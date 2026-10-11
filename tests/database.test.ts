import { PGlite } from "@electric-sql/pglite";
import { readFile } from "node:fs/promises";
import { beforeAll, afterAll, describe, it, expect } from "vitest";
import { sampleCheck } from "../src/lib/examples";
import type { Check } from "../src/lib/types";
let db: PGlite;
beforeAll(async () => {
  db = new PGlite();
  await db.exec(
    "create role anon; create role authenticated; create role service_role;",
  );
  await db.exec(await readFile("supabase/migrations/001_cited.sql", "utf8"));
}, 60000);
afterAll(async () => {
  await db?.close();
});
async function insert(check: Check, kind = "checks") {
  await db.query("insert into records(kind,id,data) values($1,$2,$3)", [
    kind,
    check.id,
    JSON.stringify(check),
  ]);
}
describe("Postgres migration and durable queue", () => {
  it("mirrors complete reports and enforces citations at the DB boundary", async () => {
    const check = sampleCheck("brew-lane", "test");
    await insert(check);
    const count = await db.query<{ count: number }>(
      "select count(*)::int as count from runs r join questions q on q.id=r.question_id where q.check_id=$1",
      [check.id],
    );
    expect(count.rows[0].count).toBe(40);
    await expect(
      db.query(
        "insert into findings(check_id,kind,body,citation_ids) values($1,$2,$3,$4)",
        [check.id, "rival", "Unsupported", []],
      ),
    ).rejects.toThrow(/check constraint/);
    await expect(
      db.query(
        "insert into findings(check_id,kind,body,citation_ids) values($1,$2,$3,$4)",
        [check.id, "rival", "Missing source", [999]],
      ),
    ).rejects.toThrow("Finding references a missing source");
    await db.query(
      "insert into findings(check_id,kind,body,citation_ids) values($1,$2,$3,$4)",
      [check.id, "rival", "Cited", [1]],
    );
  });
  it("rejects a completed report with fewer than forty answers or missing arrays", async () => {
    const check = sampleCheck("spoke-studio", "test");
    check.questions[0].runs.pop();
    await expect(insert(check)).rejects.toThrow(
      "Complete reports require 8 questions and 5 runs each",
    );
    const missing = sampleCheck("spoke-studio", "test");
    delete (missing as Partial<Check>).questions;
    await expect(insert(missing)).rejects.toThrow(
      "Complete reports require 8 questions and 5 runs each",
    );
  });
  it("cloned example question IDs remain unique", async () => {
    const one = sampleCheck("atelier-moss", "one"),
      two = sampleCheck("atelier-moss", "two");
    await insert(one);
    await insert(two);
    expect(
      (
        await db.query<{ count: number }>(
          "select count(*)::int as count from checks where id=any($1)",
          [[one.id, two.id]],
        )
      ).rows[0].count,
    ).toBe(2);
  });
  it("only one lease wins and an expired token cannot overwrite progress", async () => {
    const check = sampleCheck("stillwater", "anonymous");
    check.status = "queued";
    await insert(check);
    const first = await db.query<{ claim_check: Check }>(
      "select claim_check($1,$2,$3)",
      [check.id, "token-one", new Date(Date.now() + 180000).toISOString()],
    );
    expect(first.rows[0].claim_check.id).toBe(check.id);
    const second = await db.query<{ claim_check: Check | null }>(
      "select claim_check($1,$2,$3)",
      [check.id, "token-two", new Date(Date.now() + 180000).toISOString()],
    );
    expect(second.rows[0].claim_check).toBeNull();
    await db.query("select transfer_reports($1,$2)", ["anonymous", "account"]);
    await db.query("select finish_check($1,$2,$3)", [
      check.id,
      "token-one",
      JSON.stringify(check),
    ]);
    const result = await db.query<{ data: Check }>(
      "select data from records where kind=$1 and id=$2",
      ["checks", check.id],
    );
    expect(result.rows[0].data.owner).toBe("account");
    await expect(
      db.query("select finish_check($1,$2,$3)", [
        check.id,
        "token-two",
        JSON.stringify(check),
      ]),
    ).rejects.toThrow("Check lease expired");
  });
  it("optimistic updates reject stale snapshots and quota is atomic", async () => {
    const check = sampleCheck("brew-lane", "cas");
    await insert(check);
    const current = await db.query<{ stamp: string }>(
      "select updated_at::text as stamp from records where kind=$1 and id=$2",
      ["checks", check.id],
    );
    const args = [check.id, current.rows[0].stamp, JSON.stringify(check)];
    expect(
      (
        await db.query<{ replace_check: boolean }>(
          "select replace_check($1,$2,$3)",
          args,
        )
      ).rows[0].replace_check,
    ).toBe(true);
    expect(
      (
        await db.query<{ replace_check: boolean }>(
          "select replace_check($1,$2,$3)",
          args,
        )
      ).rows[0].replace_check,
    ).toBe(false);
    for (let i = 0; i < 4; i++)
      expect(
        (
          await db.query<{ consume_quota: boolean }>(
            "select consume_quota($1,$2)",
            ["day-ip", 3],
          )
        ).rows[0].consume_quota,
      ).toBe(i < 3);
  });
  it("weekly scheduling is idempotent and preserves the current owner", async () => {
    const check = sampleCheck("brew-lane", "weekly-owner");
    check.sample = false;
    check.weeklyEnabled = true;
    check.nextRecheckAt = new Date(Date.now() - 1000).toISOString();
    await insert(check);
    const next = structuredClone(check);
    next.id = `weekly-${check.id}`;
    next.status = "queued";
    next.owner = "stale-owner";
    next.questions = next.questions.map((q, i) => ({
      ...q,
      id: `${next.id}-q${i}`,
      runs: [],
    }));
    next.fixes = [];
    const args = [check.id, check.nextRecheckAt, JSON.stringify(next)];
    expect(
      (
        await db.query<{ schedule_recheck: boolean }>(
          "select schedule_recheck($1,$2,$3)",
          args,
        )
      ).rows[0].schedule_recheck,
    ).toBe(true);
    expect(
      (
        await db.query<{ schedule_recheck: boolean }>(
          "select schedule_recheck($1,$2,$3)",
          args,
        )
      ).rows[0].schedule_recheck,
    ).toBe(false);
    const saved = await db.query<{ data: Check }>(
      "select data from records where kind=$1 and id=$2",
      ["checks", next.id],
    );
    expect(saved.rows[0].data.owner).toBe("weekly-owner");
  });
  it("all tables enable RLS and anonymous roles cannot invoke queue mutation", async () => {
    const tables = await db.query<{ relrowsecurity: boolean }>(
      "select relrowsecurity from pg_class where relnamespace='public'::regnamespace and relkind='r'",
    );
    expect(tables.rows.every((t) => t.relrowsecurity)).toBe(true);
    const permission = await db.query<{ allowed: boolean }>(
      "select has_function_privilege('anon','claim_check(text,text,timestamptz)','EXECUTE') as allowed",
    );
    expect(permission.rows[0].allowed).toBe(false);
  });
});
