import Link from "next/link";
import Image from "next/image";
import type { Question, Source, Status } from "@/lib/types";
export function Wordmark() {
  return (
    <Link href="/" className="wordmark" aria-label="Cited home">
      <Image
        className="brand-mark"
        src="/brand/cited-mark.webp"
        width={30}
        height={30}
        alt=""
      />
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
export function Dots({ count, total = 5 }: { count: number; total?: number }) {
  return (
    <span
      className="run-score"
      role="img"
      aria-label={`Recommended in ${count} of ${total} runs`}
    >
      <span className="run-dots" aria-hidden="true">
        {Array.from({ length: total }, (_, i) => i).map((i) => (
          <i className={i < count ? "filled" : ""} key={i} />
        ))}
      </span>
      <span className="mono">
        {count} of {total}
      </span>
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
