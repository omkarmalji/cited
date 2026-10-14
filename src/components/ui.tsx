import Link from "next/link";
import type { Question, Source, Status } from "@/lib/types";
export function Wordmark() {
  return (
    <Link href="/" className="wordmark" aria-label="Cited home">
      <span className="brand-mark" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <i key={i} className={i === 4 ? "empty" : ""} />
        ))}
      </span>
      Cited<span className="wordmark-period">.</span>
    </Link>
  );
}
export function Badge({
  label,
}: {
  label: Status | "Sample data" | "Approved" | "Draft" | "Edited";
}) {
  const colors: Record<string, string> = {
    "Sample data": "amber",
    Approved: "green",
  };
  return (
    <span className={`badge ${colors[label] || outlookColor(label)}`}>
      <i aria-hidden="true" />
      {label}
    </span>
  );
}
// Full-bleed hairline with crosshair markers where it meets the page rails.
export function Rule() {
  return (
    <div className="grid-rule" aria-hidden="true">
      <i />
      <i />
    </div>
  );
}
export const outlookColor = (label: string) =>
  ({
    "Winnable now": "green",
    "In about 3 months": "amber",
    Unlikely: "red",
    "Needs your check": "blue",
  })[label] || "";
export function RunMatrix({ questions }: { questions: Question[] }) {
  const runs = questions.flatMap((q) => q.runs);
  const count = runs.filter((r) => r.mentioned).length;
  return (
    <span
      className="run-matrix"
      role="img"
      aria-label={`Named in ${count} of ${runs.length} runs`}
    >
      {questions.map((q) => (
        <span key={q.id}>
          {q.runs.map((r) => (
            <i key={r.index} className={r.mentioned ? "filled" : ""} />
          ))}
        </span>
      ))}
    </span>
  );
}
export function Dots({ count }: { count: number }) {
  return (
    <span
      className="run-score"
      role="img"
      aria-label={`Recommended in ${count} of 5 runs`}
    >
      <span className="run-dots" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <i className={i < count ? "filled" : ""} key={i} />
        ))}
      </span>
      <span className="mono">{count} of 5</span>
    </span>
  );
}
export function Citation({ source }: { source: Source }) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="citation"
      aria-label={`[${source.id}] ${source.domain}. Source ${source.id}: ${source.title}`}
    >
      [{source.id}] {source.domain}
    </a>
  );
}
