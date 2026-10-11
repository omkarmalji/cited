import { createClient } from "@supabase/supabase-js";
import { mkdir, readFile, writeFile, rename, readdir } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type { Check, Candidate } from "./types";
type RecordValue = Check | Candidate | { id: string; count: number };
const root = path.join(process.cwd(), ".data");
function database() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.SUPABASE_SERVICE_ROLE_KEY
    ? createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY,
        { auth: { persistSession: false } },
      )
    : null;
}
function requireLocal() {
  if (
    process.env.NODE_ENV === "production" &&
    process.env.CITED_LOCAL_STORE !== "true"
  )
    throw new Error("Configure Supabase storage before using live checks.");
}
let serial = Promise.resolve();
async function local<T>(operation: () => Promise<T>) {
  const previous = serial;
  let release!: () => void;
  serial = new Promise((r) => {
    release = r;
  });
  await previous;
  try {
    return await operation();
  } finally {
    release();
  }
}
export async function getRecord<T extends RecordValue>(
  kind: string,
  id: string,
): Promise<T | null> {
  if (!/^[\w-]+$/.test(id)) return null;
  const db = database();
  if (db) {
    const { data, error } = await db
      .from("records")
      .select("data")
      .eq("kind", kind)
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    return (data?.data as T) || null;
  }
  requireLocal();
  try {
    return JSON.parse(
      await readFile(path.join(root, kind, `${id}.json`), "utf8"),
    );
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw e;
  }
}
export async function saveRecord(kind: string, record: RecordValue) {
  const db = database();
  if (db) {
    const { error } = await db.from("records").upsert({
      kind,
      id: record.id,
      data: record,
      updated_at: new Date().toISOString(),
    });
    if (error) throw error;
    return;
  }
  requireLocal();
  await mkdir(path.join(root, kind), { recursive: true });
  const file = path.join(root, kind, `${record.id}.json`),
    temp = `${file}.${randomUUID()}.tmp`;
  await writeFile(temp, JSON.stringify(record));
  await rename(temp, file);
}
export async function takeLease(id: string) {
  const token = randomUUID(),
    until = new Date(Date.now() + 360000).toISOString(),
    db = database();
  if (db) {
    const { data, error } = await db.rpc("claim_check", {
      check_id: id,
      lease_token: token,
      lease_until: until,
    });
    if (error) throw error;
    return data ? { check: data as Check, token } : null;
  }
  return local(async () => {
    const check = await getRecord<Check>("checks", id);
    if (
      !check ||
      (check.leaseUntil && Date.parse(check.leaseUntil) > Date.now()) ||
      ["complete", "error"].includes(check.status)
    )
      return null;
    check.leaseUntil = until;
    check.leaseToken = token;
    await saveRecord("checks", check);
    return { check, token };
  });
}
export async function finishLease(check: Check, token: string) {
  check.updatedAt = new Date().toISOString();
  delete check.leaseUntil;
  delete check.leaseToken;
  const db = database();
  if (db) {
    const { error } = await db.rpc("finish_check", {
      check_id: check.id,
      lease_token: token,
      payload: check,
    });
    if (error) throw error;
    return;
  }
  return local(async () => {
    const current = await getRecord<Check>("checks", check.id);
    if (current?.leaseToken !== token) throw new Error("Check lease expired.");
    check.owner = current.owner;
    await saveRecord("checks", check);
  });
}
export async function rateLimit(key: string) {
  const db = database();
  if (db) {
    const { data, error } = await db.rpc("consume_quota", {
      quota_key: key,
      quota_max: 3,
    });
    if (error) throw error;
    if (!data)
      throw new Error(
        "Three free checks per day. Try a saved example or return tomorrow.",
      );
    return;
  }
  return local(async () => {
    const value = (await getRecord<{ id: string; count: number }>(
      "limits",
      key,
    )) || { id: key, count: 0 };
    if (value.count >= 3)
      throw new Error(
        "Three free checks per day. Try a saved example or return tomorrow.",
      );
    value.count++;
    await saveRecord("limits", value);
  });
}
export async function listChecks(identity?: string) {
  const db = database();
  if (db) {
    let query = db.from("records").select("data").eq("kind", "checks");
    if (identity) query = query.eq("data->>owner", identity);
    const { data, error } = await query;
    if (error) throw error;
    return (data || []).map((r) => r.data as Check);
  }
  requireLocal();
  let names: string[];
  try {
    names = await readdir(path.join(root, "checks"));
  } catch {
    return [];
  }
  const checks = await Promise.all(
    names
      .filter((n) => n.endsWith(".json"))
      .map((n) => getRecord<Check>("checks", n.slice(0, -5))),
  );
  return checks.filter(
    (c): c is Check => !!c && (!identity || c.owner === identity),
  );
}
export async function transferOwner(previous: string, next: string) {
  const db = database();
  if (db) {
    const { error } = await db.rpc("transfer_reports", {
      previous_owner: previous,
      next_owner: next,
    });
    if (error) throw error;
    return;
  }
  for (const check of await listChecks(previous)) {
    check.owner = next;
    await saveRecord("checks", check);
  }
}
export async function updateCheck(
  id: string,
  identity: string,
  change: (check: Check) => void,
): Promise<Check> {
  const db = database();
  const mutate = (check: Check | null) => {
    if (!check || check.owner !== identity)
      throw new Error("Report not found in this browser session.");
    change(check);
    check.updatedAt = new Date().toISOString();
    return check;
  };
  if (!db)
    return local(async () => {
      const check = mutate(await getRecord<Check>("checks", id));
      await saveRecord("checks", check);
      return check;
    });
  for (let attempt = 0; attempt < 5; attempt++) {
    const { data, error } = await db
      .from("records")
      .select("data,updated_at")
      .eq("kind", "checks")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    const check = mutate((data?.data as Check) || null);
    const result = await db.rpc("replace_check", {
      check_id: id,
      expected_updated_at: data!.updated_at,
      payload: check,
    });
    if (result.error) throw result.error;
    if (result.data) return check;
  }
  throw new Error("Another update is in progress. Please try again.");
}
export async function scheduleRecheck(previous: Check, next: Check) {
  const db = database();
  if (db) {
    const { data, error } = await db.rpc("schedule_recheck", {
      check_id: previous.id,
      expected_due: previous.nextRecheckAt,
      next_payload: next,
    });
    if (error) throw error;
    return !!data;
  }
  return local(async () => {
    const current = await getRecord<Check>("checks", previous.id);
    if (
      !current?.weeklyEnabled ||
      current.nextRecheckAt !== previous.nextRecheckAt ||
      Date.parse(current.nextRecheckAt!) > Date.now()
    )
      return false;
    if (!(await getRecord<Check>("checks", next.id)))
      await saveRecord("checks", { ...next, owner: current.owner });
    current.weeklyEnabled = false;
    current.latestRecheckId = next.id;
    await saveRecord("checks", current);
    return true;
  });
}
