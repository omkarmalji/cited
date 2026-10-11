import type { Question, Status } from "./types";
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
