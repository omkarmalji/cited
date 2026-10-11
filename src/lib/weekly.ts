import { listChecks, saveRecord } from "./store";
import { work, total } from "./pipeline";
import type { Check } from "./types";
export async function processQueue() {
  const checks = await listChecks();
  const started = Date.now();
  let processed = 0;
  for (const check of checks
    .filter(
      (c) =>
        !c.sample &&
        c.status === "complete" &&
        c.weeklyEnabled &&
        c.nextRecheckAt &&
        Date.parse(c.nextRecheckAt) <= Date.now(),
    )
    .slice(0, 3)) {
    const now = new Date().toISOString();
    const nextId = `weekly-${check.id.replace(/^weekly-/, "").slice(0, 36)}-${check.nextRecheckAt!.slice(0, 10)}`;
    const next: Check = {
      ...check,
      id: nextId,
      createdAt: now,
      updatedAt: now,
      status: "queued",
      progress: "Weekly recheck queued",
      questions: check.questions.map((q, i) => ({
        ...q,
        id: `${nextId}-q${i}`,
        runs: [],
        sourceIds: [],
        status: "Needs your check",
      })),
      findings: [],
      fixes: [],
      previousTotal: total(check),
      recheckOf: check.id,
      weeklyEnabled: true,
      nextRecheckAt: new Date(Date.now() + 7 * 86400000).toISOString(),
      latestRecheckId: undefined,
      leaseToken: undefined,
      leaseUntil: undefined,
    };
    // One deterministic ID per predecessor and due date makes scheduler retries idempotent.
    await saveRecord("checks", next);
    check.weeklyEnabled = false;
    check.latestRecheckId = next.id;
    await saveRecord("checks", check);
  }
  for (const c of (await listChecks())
    .filter((c) => !c.sample && !["complete", "error"].includes(c.status))
    .slice(0, 5)) {
    if (Date.now() - started > 45000) break;
    await work(c.id);
    processed++;
  }
  return { processed };
}
