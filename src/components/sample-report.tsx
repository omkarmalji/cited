import { Badge, Dots, RunMatrix } from "./ui";
import { named, sortQuestions } from "@/lib/outlook";
import type { Check } from "@/lib/types";

// Static excerpt of a saved fictional report, rendered from the same data the
// example report uses so the landing page never shows numbers it can't back up.
export function SampleReport({ check }: { check: Check }) {
  const sorted = sortQuestions(
    check.questions.filter((q) => q.kind === "broad"),
  );
  const rows = [sorted[0], sorted[1], sorted[sorted.length - 1]];
  const total = check.questions.reduce((n, q) => n + named(q), 0);
  const finding = check.findings[0];
  return (
    <figure className="receipt">
      <div className="receipt-header">
        <span className="traffic" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>{check.businessId}.report</span>
        <Badge label="Sample data" />
      </div>
      <div className="receipt-body">
        <div className="receipt-score">
          <div>
            <span className="receipt-label">{check.facts.name}</span>
            <strong>
              {total}
              <span> of 40 runs</span>
            </strong>
          </div>
          <RunMatrix questions={check.questions} />
        </div>
        <ul className="receipt-questions">
          {rows.map((q) => (
            <li key={q.id}>
              <p>{q.text}</p>
              <span>
                <Dots count={named(q)} />
                <Badge label={q.status} />
              </span>
            </li>
          ))}
        </ul>
        {finding && (
          <div className="receipt-finding">
            <span className="receipt-label">Why {finding.rival} wins</span>
            <p>
              {finding.body.split(". ")[0]}.{" "}
              <span className="citation">
                [{finding.citationIds[0]}] source
              </span>
            </p>
          </div>
        )}
      </div>
      <figcaption className="receipt-caption">
        Fictional deep report. Broad questions shown, five runs each. Every
        finding cited.
      </figcaption>
    </figure>
  );
}
