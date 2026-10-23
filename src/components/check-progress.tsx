"use client";
import { useEffect, useState } from "react";
import { Check, CircleNotch, Minus } from "@phosphor-icons/react";
import type { Check as VisibilityCheck } from "@/lib/types";

// One place to look: a status line, a bar, the question being asked right now,
// and a plain scoreboard. Full answers and sources live in the report.
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
  const deep = !!check && check.mode !== "quick";
  const perQuestion = deep ? 5 : 1;
  const total = deep ? 8 : 5;
  const done =
    check?.questions.filter((q) => q.runs.length >= perQuestion).length || 0;
  const current = check?.questions.find(
    (q) => q.runs.length < perQuestion && !q.error,
  );
  const complete = check?.status === "complete";
  if (phase === "lookup")
    return (
      <div className="check-progress">
        <p className="progress-status" role="status">
          <span className="live-indicator" />
          {paused ? "Lookup paused" : "Looking you up"}
          <span>{paused ? "" : `${elapsed}s`}</span>
        </p>
        <div className={paused ? "progress-bar" : "progress-bar busy"}>
          <i />
        </div>
        <h2>
          {paused ? "Let's check those details" : "Finding your business"}
        </h2>
        <p className="progress-business">
          {name} <span>· {city}</span>
        </p>
        {!paused && (
          <p className="progress-hint">
            We&apos;re checking public listings, directories and websites. This
            usually takes a few seconds.
          </p>
        )}
      </div>
    );
  const after =
    deep && check && ["diagnosis", "verifyDiagnosis"].includes(check.status)
      ? "Working out why AI picks other businesses"
      : deep && check && ["fixes", "verifyFixes"].includes(check.status)
        ? "Writing your to-do list"
        : "";
  return (
    <div className="check-progress">
      {!complete && (
        <>
          <p className="progress-status" role="status" aria-live="polite">
            <span className="live-indicator" />
            {done} of {total} questions answered
            <span>{check?.status === "error" ? "Paused" : `${elapsed}s`}</span>
          </p>
          <div className="progress-bar">
            <i style={{ width: `${Math.max(4, (done / total) * 100)}%` }} />
          </div>
          <h2 className="progress-now">
            {check?.status === "error" ? (
              "Some searches didn't finish"
            ) : after ? (
              after
            ) : current ? (
              <>
                <span>Asking AI</span>“{current.text}”
              </>
            ) : (
              "Getting your questions ready"
            )}
          </h2>
        </>
      )}
      <ol className="score-list" aria-label="Results so far">
        {check?.questions.map((q) => {
          const answered = q.runs.length >= perQuestion;
          const hits = q.runs.filter((r) => r.mentioned).length;
          const others = [
            ...new Set(q.runs.flatMap((r) => r.recommendations || [])),
          ]
            .filter((n) => n.trim().toLowerCase() !== name.trim().toLowerCase())
            .slice(0, 2);
          const state = q.error
            ? "error"
            : !answered
              ? q === current
                ? "asking"
                : "waiting"
              : hits
                ? "yes"
                : "no";
          return (
            <li key={q.id} className={`score-row ${state}`}>
              <span className="score-icon" aria-hidden="true">
                {state === "yes" ? (
                  <Check size={14} weight="bold" />
                ) : state === "no" ? (
                  <Minus size={14} weight="bold" />
                ) : state === "asking" ? (
                  <CircleNotch size={14} className="spinner" />
                ) : null}
              </span>
              <span className="score-question">{q.text}</span>
              <span className="score-result">
                {state === "yes"
                  ? deep
                    ? `You're mentioned (${hits} of 5)`
                    : "You're mentioned"
                  : state === "no"
                    ? "Not mentioned"
                    : state === "asking"
                      ? deep
                        ? `Asking… ${q.runs.length} of 5`
                        : "Asking…"
                      : state === "error"
                        ? "Didn't finish"
                        : "Waiting"}
              </span>
              {state === "no" && others.length > 0 && (
                <span className="score-others">
                  AI suggested {others.join(", ")}
                </span>
              )}
            </li>
          );
        })}
      </ol>
      {!finished && elapsed > 25 && !deep && (
        <p className="progress-hint">
          Taking a little longer than usual. Finished answers are saved, so
          there&apos;s no need to start again.
        </p>
      )}
      {!complete && (
        <p className="journey-method">
          {`Answers come from NVIDIA Nemotron AI using live web search for ${city}. It shows how AI tools tend to answer, not a live ChatGPT result.`}
        </p>
      )}
    </div>
  );
}
