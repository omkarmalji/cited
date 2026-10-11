import Link from "next/link";
import type { Source, Status } from "@/lib/types";
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
    "Winnable now": "green",
    "In about 3 months": "amber",
    Unlikely: "red",
    "Needs your check": "blue",
    "Sample data": "amber",
    Approved: "green",
  };
  return (
    <span className={`badge ${colors[label] || ""}`}>
      <i aria-hidden="true" />
      {label}
    </span>
  );
}
export function Dots({ count }: { count: number }) {
  return (
    <span
      className="run-score"
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
      aria-label={`Source ${source.id}: ${source.title}`}
    >
      [{source.id}] {source.domain}
    </a>
  );
}
