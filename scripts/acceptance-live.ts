import { request } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import type { Check, Facts } from "../src/lib/types";

// Real API acceptance exercise. No fixes are approved or published by this script.
const businesses = [
  { name: "Monmouth Coffee", city: "London" },
  { name: "Schorem Haarsnijder en Barbier", city: "Rotterdam" },
  { name: "Bicycle Habitat", city: "New York" },
];
const baseURL = process.env.CITED_ACCEPTANCE_URL || "http://localhost:3000";
const output = process.env.CITED_ACCEPTANCE_OUTPUT || ".data/live-acceptance.json";
async function main() {
  const results = await Promise.all(
    businesses.map(async (input) => {
      const client = await request.newContext({ baseURL, timeout: 240000 });
      const started = new Date().toISOString();
      let id: string | undefined;
      let retries = 0;
      async function get<T>(path: string): Promise<T> {
        const response = await client.get(path);
        const value = await response.json();
        if (!response.ok()) throw new Error(value.error || `HTTP ${response.status()}`);
        return value as T;
      }
      async function post(path: string, data?: unknown) {
        const response = await client.post(path, {
          data,
          headers: { Origin: baseURL },
        });
        const value = await response.json();
        if (!response.ok())
          throw new Error(value.error || `HTTP ${response.status()}`);
        return value;
      }
      try {
        const resolved = await post("/api/resolve", input);
        const candidate = await get<{ facts: Facts }>(`/api/candidates/${resolved.id}`);
        console.log(
          `${input.city}: resolved ${candidate.facts.name}, ${candidate.facts.category}.`,
        );
        const created = await post("/api/checks", {
          candidateId: resolved.id,
          facts: candidate.facts,
        });
        id = created.id;
        let check: Check;
        for (let step = 0; step < 90; step++) {
          check = await get<Check>(`/api/checks/${id}`);
          if (check.status === "error") {
            if (!check.retryStage || retries >= 3) throw new Error(check.error);
            await post(`/api/checks/${id}/retry`);
            retries++;
            console.log(`${input.city}: resuming ${check.retryStage}, retry ${retries}.`);
            continue;
          }
          if (check.status === "complete") {
            if (
              check.questions.length !== 8 ||
              check.questions.some((q) => q.runs.length !== 5 ||
                new Set(q.runs.map((r) => r.index)).size !== 5 ||
                q.runs.some((r) => !r.answer.trim() || !r.model))
            )
              throw new Error("Incomplete counts.");
            if (
              check.findings.some(
                (f) =>
                  !f.citationIds.length ||
                  f.citationIds.some(
                    (cid) => !check.sources.some((s) => s.id === cid),
                  ),
              )
            )
              throw new Error("Invalid finding citations.");
            if (check.fixes.length !== 4 || new Set(check.fixes.map((f) => f.type)).size !== 4 ||
                check.fixes.some((f) => f.status === "approved" || f.flags.length || !f.body.trim()))
              throw new Error("Expected four verified, unapproved fixes.");
            console.log(
              `${input.city}: PASS, 40 answers, ${check.sources.length} fetched sources, ${check.findings.length} cited findings, 4 drafts.`,
            );
            return {
              input,
              id,
              started,
              finished: new Date().toISOString(),
              passed: true,
              baseURL,
              retries,
              answers: 40,
              drafts: check.fixes.map((f) => ({ type: f.type, status: f.status, flags: f.flags })),
              facts: check.facts,
              sources: check.sources.map((s) => ({
                url: s.url,
                fetchedAt: s.fetchedAt,
              })),
              findings: check.findings,
              counts: check.questions.map(
                (q) => q.runs.filter((r) => r.mentioned).length,
              ),
              models: [
                ...new Set(
                  check.questions.flatMap((q) => q.runs.map((r) => r.model)),
                ),
              ],
            };
          }
          if (check.leaseUntil && new Date(check.leaseUntil).getTime() > Date.now()) {
            await delay(5000);
            continue;
          }
          try {
            await post(`/api/checks/${id}/work`);
          } catch (error) {
            const after = await get<Check>(`/api/checks/${id}`);
            if (after.status !== "error") throw error;
            // The next iteration resumes the persisted failed step without losing answers.
          }
          console.log(`${input.city}: ${step + 1} work steps.`);
        }
        throw new Error("Pipeline did not finish within 90 steps.");
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`${input.city}: FAILED, ${message}`);
        return {
          input,
          id,
          started,
          finished: new Date().toISOString(),
          passed: false,
          error: message,
        };
      } finally {
        await client.dispose();
      }
    }),
  );
  await mkdir(dirname(output), { recursive: true });
  await writeFile(
    output,
    JSON.stringify(results, null, 2),
  );
  if (results.some((r) => !r.passed)) process.exitCode = 1;
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
