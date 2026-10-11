import { loadEnvConfig } from "@next/env";
import { readFile, writeFile } from "node:fs/promises";
import { getRecord, saveRecord } from "../src/lib/store";
import { work, total } from "../src/lib/pipeline";
import type { Check } from "../src/lib/types";
loadEnvConfig(process.cwd());
async function main() {
  const previous = JSON.parse(
    await readFile(".data/live-acceptance.json", "utf8"),
  ) as {
    id: string;
    input: { name: string; city: string };
    passed?: boolean;
  }[];
  const unfinishedOnly = process.argv.includes("--unfinished");
  if (!unfinishedOnly)
    await writeFile(
      ".data/live-acceptance-first-attempt.json",
      JSON.stringify(previous, null, 2),
    );
  const results = await Promise.all(
    previous.map(async (entry) => {
      if (unfinishedOnly && entry.passed) return entry;
      const check = await getRecord<Check>("checks", entry.id);
      if (!check) throw new Error("Acceptance check missing.");
      if (!unfinishedOnly) {
        check.questions = [];
        check.findings = [];
        check.fixes = [];
        check.status = "queued";
        check.progress = "Retesting discovery questions after validation fix";
      } else {
        check.status = check.retryStage || "runs";
        check.progress = "Resuming unfinished acceptance check";
      }
      delete check.error;
      delete check.leaseUntil;
      delete check.leaseToken;
      await saveRecord("checks", check);
      try {
        for (let step = 0; step < 55; step++) {
          await work(entry.id);
          const current = await getRecord<Check>("checks", entry.id);
          if (!current) throw new Error("Check missing.");
          console.log(`${entry.input.city}: ${current.progress}`);
          if (current.status === "error") throw new Error(current.error);
          if (current.status === "complete") {
            if (
              current.questions.length !== 8 ||
              current.questions.some((q) => q.runs.length !== 5)
            )
              throw new Error("Invalid run counts");
            if (current.findings.some((f) => !f.citationIds.length))
              throw new Error("Uncited finding");
            return {
              input: entry.input,
              id: entry.id,
              passed: true,
              finished: new Date().toISOString(),
              counts: current.questions.map(
                (q) => q.runs.filter((r) => r.mentioned).length,
              ),
              total: total(current),
              questions: current.questions.map((q) => q.text),
              sources: current.sources.length,
              findings: current.findings.length,
              fixes: current.fixes.map((f) => ({
                type: f.type,
                status: f.status,
                flags: f.flags,
              })),
            };
          }
        }
        throw new Error("Did not complete.");
      } catch (error) {
        return {
          input: entry.input,
          id: entry.id,
          passed: false,
          error: error instanceof Error ? error.message : String(error),
        };
      }
    }),
  );
  await writeFile(
    ".data/live-acceptance.json",
    JSON.stringify(results, null, 2),
  );
  console.log(JSON.stringify(results, null, 2));
  if (results.some((r) => !r.passed)) process.exitCode = 1;
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
