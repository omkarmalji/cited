"use client";
import { useEffect, useState } from "react";
import { Check, CircleNotch, MagnifyingGlass } from "@phosphor-icons/react";
import type { Check as VisibilityCheck } from "@/lib/types";
import { Citation } from "./ui";

export function CheckProgress({
  check,
  name,
  city,
  since,
  phase = "search",
  paused = false,
}: {
  check?: VisibilityCheck | null;
  name: string;
  city: string;
  since: number;
  phase?: "lookup" | "search";
  paused?: boolean;
}) {
  const finished =
    paused || check?.status === "complete" || check?.status === "error";
  const [now, setNow] = useState(since);
  useEffect(() => {
    setNow(Date.now());
    if (finished) return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [since, finished]);
  const elapsed = Math.max(0, Math.floor((now - since) / 1000));
  const deep = check && check.mode !== "quick";
  const done =
    check?.questions.filter((q) => q.runs.length >= (deep ? 5 : 1)).length || 0;
  const tips =
    phase === "lookup"
      ? [
          "We check public sources so you can confirm the right business.",
          "Your category and city shape the questions, not your street address.",
          "Nothing is published or changed by running a check.",
        ]
      : [
          "These are questions a customer could ask before choosing where to go.",
          "Each answer keeps its sources. You can open the evidence yourself.",
          "Not being named is useful too. It shows where your next fix can help.",
        ];
  const stage =
    phase === "lookup"
      ? paused
        ? "Let's check those details."
        : "Finding your business"
      : check?.status === "error"
        ? "Your finished answers are saved"
        : check?.status === "complete"
          ? "Your answers, with sources."
          : deep && !["queued", "questions", "runs"].includes(check.status)
            ? check.progress
            : "Who gets recommended? Let's find out.";
  return (
    <div className="check-progress">
      <div className="journey-overline">
        <span className="live-indicator" />
        {phase === "lookup"
          ? "Business lookup"
          : deep
            ? "Deep research"
            : "Quick check"}
        <span>
          {check?.status === "complete"
            ? "Ready"
            : paused
              ? "Paused"
              : `${elapsed}s elapsed`}
        </span>
      </div>
      <h2>{stage}</h2>
      <p className="journey-business">
        {name}
        <span>{city}</span>
      </p>
      {phase === "lookup" ? (
        <div className="lookup-evidence" aria-hidden="true">
          <MagnifyingGlass size={28} />
          <span>Public listings</span>
          <span>Business website</span>
          <span>Category + city</span>
        </div>
      ) : (
        <>
          <div className="answer-progress" role="status" aria-live="polite">
            {done} of {deep ? 8 : 5} questions answered
            {deep
              ? ` · ${check?.questions.flatMap((q) => q.runs).length || 0} of 40 runs`
              : ""}
          </div>
          <div className="answer-track" aria-hidden="true">
            {Array.from({ length: deep ? 8 : 5 }, (_, i) => (
              <span className={i < done ? "done" : ""} key={i}>
                {i < done ? <Check size={16} /> : i + 1}
              </span>
            ))}
          </div>
          <div className="live-questions">
            {check?.questions.map((q) => (
              <div className="live-question" key={q.id}>
                <span className={q.runs.length ? "answer-ready" : ""}>
                  {q.runs.length ? (
                    <Check size={16} />
                  ) : (
                    <CircleNotch
                      size={16}
                      className={q.error ? "" : "spinner"}
                    />
                  )}
                </span>
                <div>
                  <p>{q.text}</p>
                  {q.runs.length ? (
                    <>
                      <strong>
                        {q.runs[0].mentioned
                          ? `${name} was named`
                          : q.runs[0].recommendations?.length
                            ? "Other businesses were named"
                            : "No supported recommendation"}
                      </strong>
                      <p className="live-answer">{q.runs[0].answer}</p>
                      <div className="citation-list">
                        {q.runs[0].citationIds
                          ?.map((id) => check.sources.find((s) => s.id === id))
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((source) => (
                            <Citation key={source!.id} source={source!} />
                          ))}
                      </div>
                    </>
                  ) : (
                    <small>
                      {q.error ||
                        "Searching sources and reading recommendations"}
                    </small>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {check?.status !== "error" && check?.status !== "complete" && (
        <div className="journey-insight">
          <span className="fact-name">
            {elapsed > 25 && !deep ? "Taking a little longer" : "While we look"}
          </span>
          <p>
            {elapsed > 25 && !deep
              ? "Some sources are slower today. Finished answers appear above and stay saved. There is no need to restart."
              : tips[Math.floor(elapsed / 7) % tips.length]}
          </p>
        </div>
      )}
      <p className="journey-method">
        {phase === "lookup"
          ? "You confirm the details before any analysis starts."
          : deep
            ? "Nemotron + web search. Repeated runs and verified diagnosis."
            : "Nemotron + web search. One answer per question, a snapshot rather than a ranking guarantee."}
      </p>
    </div>
  );
}
