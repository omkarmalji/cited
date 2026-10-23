import type { Check, Question, Status } from "./types";
// Display order: the most actionable outlook first.
export const OUTLOOKS: Status[] = [
  "Winnable now",
  "Needs your check",
  "In about 3 months",
  "Unlikely",
];
export const named = (q: Question) => q.runs.filter((r) => r.mentioned).length;
export function sortQuestions(questions: Question[]) {
  return [...questions].sort(
    (a, b) =>
      OUTLOOKS.indexOf(a.status) - OUTLOOKS.indexOf(b.status) ||
      named(b) - named(a),
  );
}
export function outlookCounts(questions: Question[]) {
  return OUTLOOKS.map((status) => ({
    status,
    count: questions.filter((q) => q.status === status).length,
  })).filter((o) => o.count > 0);
}
const normalize = (s: string) =>
  s
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}]/gu, "");
// Businesses AI named instead of the owner, counted once per answer. Saved
// examples predate recommendation lists, so they fall back to cited rivals.
export function rivals(check: Check, limit = 4) {
  const me = normalize(check.facts.name);
  const counts = new Map<string, { name: string; count: number }>();
  for (const run of check.questions.flatMap((q) => q.runs))
    for (const name of new Set(run.recommendations || [])) {
      const key = normalize(name);
      if (!key || key === me) continue;
      const entry = counts.get(key) || { name: name.trim(), count: 0 };
      entry.count++;
      counts.set(key, entry);
    }
  const ranked = [...counts.values()].sort((a, b) => b.count - a.count);
  if (ranked.length) return ranked.slice(0, limit);
  return [...new Set(check.findings.map((f) => f.rival))]
    .slice(0, limit)
    .map((name) => ({ name, count: 0 }));
}
export function verdict(count: number, total: number, name: string) {
  if (!count)
    return `Right now, AI doesn't suggest ${name} when customers ask. That's common for local businesses, and fixable.`;
  if (count === total)
    return `AI suggests ${name} every time. Keep your details fresh to stay there.`;
  if (count / total >= 0.5)
    return `AI suggests ${name} often, but not every time. A few small updates can make it more consistent.`;
  return `AI sometimes suggests ${name}, but usually picks someone else. A few small updates can help.`;
}
