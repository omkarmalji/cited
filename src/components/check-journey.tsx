"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, X } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { FACT_LABELS, type Candidate, type Facts } from "@/lib/types";
import { CheckProgress } from "./check-progress";
import { useCheck } from "./use-check";
import { Citation } from "./ui";

export function CheckJourney({
  input,
  mode,
  onClose,
}: {
  input: { name: string; city: string };
  mode: "quick" | "deep";
  onClose: (edit?: boolean) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const lookup = useRef<Promise<Candidate> | null>(null);
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [facts, setFacts] = useState<Facts | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0),
    [started, setStarted] = useState(() => Date.now());
  const { check, error: pollError, refresh } = useCheck(id);
  const router = useRouter();
  useEffect(() => {
    dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);
  useEffect(() => {
    let active = true;
    setError("");
    setStarted(Date.now());
    // Reuse the in-flight lookup through React's development effect replay.
    // One click must consume one quota slot, not launch two paid searches.
    if (!lookup.current)
      lookup.current = fetch("/api/resolve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      }).then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);
        return data;
      });
    lookup.current
      .then((data) => {
        if (!active) return;
        setCandidate(data);
        setFacts(data.facts);
        if (mode === "deep") router.push(`/confirm/${data.id}?mode=deep`);
      })
      .catch((error) => {
        if (active && error.name !== "AbortError") setError(error.message);
      });
    return () => {
      active = false;
    };
  }, [input, mode, attempt, router]);
  const start = async () => {
    if (!candidate || !facts) return;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/checks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ candidateId: candidate.id, facts, mode }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      setStarted(Date.now());
      setId(data.id);
      try {
        localStorage.setItem(
          "cited-last-check",
          JSON.stringify({ id: data.id, name: facts.name, mode }),
        );
      } catch {
        /* Report access uses the session cookie even if local storage is unavailable. */
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setBusy(false);
    }
  };
  const retry = async () => {
    setBusy(true);
    setError("");
    try {
      const response = await fetch(`/api/checks/${id}/retry`, {
        method: "POST",
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      refresh();
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setBusy(false);
    }
  };
  const complete = check?.status === "complete";
  const count =
    check?.questions.filter((q) => q.runs[0]?.mentioned).length || 0;
  return (
    <dialog
      ref={dialog}
      className="journey-dialog"
      aria-labelledby="journey-title"
      onClose={() => onClose(dialog.current?.returnValue === "edit")}
    >
      <div className="journey-header">
        <span id="journey-title">
          Your {mode === "quick" ? "quick check" : "deep research"}
        </span>
        <button
          type="button"
          className="journey-close"
          aria-label={id ? "Close and keep report" : "Close check"}
          onClick={() => dialog.current?.close()}
        >
          <X size={20} />
        </button>
      </div>
      {error && (
        <p className="error-message" role="alert">
          {error}
        </p>
      )}
      {pollError && (
        <p className="error-message" role="alert">
          Connection interrupted. Your saved answers are safe.{" "}
          <button type="button" className="text-link" onClick={refresh}>
            Reconnect
          </button>
        </p>
      )}
      {!candidate ? (
        <>
          <CheckProgress
            name={input.name}
            city={input.city}
            since={started}
            phase="lookup"
            paused={!!error}
          />
          {error && (
            <div className="action-row">
              <button
                className="button strong"
                type="button"
                onClick={() => dialog.current?.close("edit")}
              >
                Edit name or city
              </button>
              <button
                className="button"
                type="button"
                onClick={() => {
                  lookup.current = null;
                  setAttempt((v) => v + 1);
                }}
              >
                Retry lookup
              </button>
            </div>
          )}
        </>
      ) : !id ? (
        <div className="journey-confirm">
          <p className="eyebrow">Found your business</p>
          <h2>Right business?</h2>
          <p>
            Check the name, city and category. These shape five everyday
            searches. Review the additional details below before confirming.
          </p>
          <div className="citation-list">
            {candidate.sources.slice(0, 2).map((source) => (
              <Citation key={source.id} source={source} />
            ))}
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              start();
            }}
          >
            <div className="journey-facts">
              {(["name", "city", "category"] as const).map((key) => (
                <div key={key}>
                  <label htmlFor={`journey-${key}`}>{FACT_LABELS[key]}</label>
                  <input
                    id={`journey-${key}`}
                    value={facts?.[key] || ""}
                    required
                    minLength={2}
                    maxLength={key === "name" ? 160 : 120}
                    onChange={(event) =>
                      setFacts((current) =>
                        current
                          ? { ...current, [key]: event.target.value }
                          : current,
                      )
                    }
                  />
                </div>
              ))}
            </div>
            <details className="journey-optional">
              <summary>Review all business details before confirming</summary>
              <div className="journey-facts">
                {(
                  [
                    "country",
                    "address",
                    "hours",
                    "knownFor",
                    "website",
                    "reviewUrl",
                  ] as const
                ).map((key) => (
                  <div key={key}>
                    <label htmlFor={`journey-${key}`}>{FACT_LABELS[key]}</label>
                    <input
                      id={`journey-${key}`}
                      type={
                        key === "website" || key === "reviewUrl"
                          ? "url"
                          : "text"
                      }
                      value={facts?.[key] || ""}
                      onChange={(event) =>
                        setFacts((current) =>
                          current
                            ? { ...current, [key]: event.target.value }
                            : current,
                        )
                      }
                    />
                  </div>
                ))}
              </div>
            </details>
            <p className="notice">
              By continuing, you confirm these details. Drafts use only these
              facts and are never published automatically.
            </p>
            <button type="submit" className="button strong" disabled={busy}>
              {busy ? "Starting your check" : "Confirm and run 5 searches"}
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      ) : (
        <>
          {complete ? (
            <div className="quick-outcome">
              <p className="eyebrow">
                <Check size={16} /> Your snapshot is ready
              </p>
              <h2>Named in {count} of 5 answers.</h2>
              <p>
                {count
                  ? "Now turn that visibility into a clearer business presence."
                  : "You have a starting point. Give AI clearer facts to find next time."}
              </p>
              <Link href={`/check/${id}#fixes`} className="button strong">
                Review your fix pack
                <ArrowRight size={16} />
              </Link>
              <Link href={`/check/${id}`} className="text-link">
                Open full report
                <ArrowRight size={16} />
              </Link>
              <p className="journey-method">
                Fact-only drafts, ready for your review. Deep research adds
                repeated runs and a verified rival diagnosis.
              </p>
            </div>
          ) : null}
          <CheckProgress
            check={check}
            name={facts?.name || input.name}
            city={facts?.city || input.city}
            since={started}
          />
          {check?.status === "error" && (
            <div className="journey-recovery">
              <p role="alert">{check.error}</p>
              {(check.retryCount || 0) < 3 && (
                <button
                  type="button"
                  className="button strong"
                  disabled={busy}
                  onClick={retry}
                >
                  {busy ? "Retrying" : "Retry unfinished searches"}
                </button>
              )}
            </div>
          )}
          {!complete && (
            <p className="journey-resume">
              You can close this panel.{" "}
              <Link href={`/check/${id}`}>
                Your report is saved in this browser.
              </Link>
            </p>
          )}
        </>
      )}
    </dialog>
  );
}
