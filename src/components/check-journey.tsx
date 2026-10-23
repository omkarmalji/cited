"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, PencilSimple, X } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import type { Candidate, Facts } from "@/lib/types";
import { broadQuestions } from "@/lib/questions";
import { rivals, verdict } from "@/lib/outlook";
import { CheckProgress } from "./check-progress";
import { useCheck } from "./use-check";
import { BusinessMatch } from "./business-match";

const EDIT_LABELS: Record<keyof Facts, string> = {
  name: "Business name",
  category: "What kind of business",
  city: "City",
  country: "Country",
  address: "Address",
  hours: "Opening hours",
  knownFor: "Known for",
  website: "Website",
  reviewUrl: "Review link",
};

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
  const [editing, setEditing] = useState(false);
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
          {mode === "quick" ? "Quick check" : "Deep research"}
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
          We lost the connection for a moment. Nothing is lost.{" "}
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
          <p className="eyebrow found-eyebrow">
            <Check size={14} aria-hidden="true" /> We found a match
          </p>
          <h2>Is this your business?</h2>
          {!editing && facts && (
            <BusinessMatch facts={facts} sources={candidate.sources} />
          )}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              start();
            }}
          >
            {editing && (
              <div className="journey-facts">
                {(
                  [
                    "name",
                    "category",
                    "city",
                    "country",
                    "address",
                    "hours",
                    "website",
                    "reviewUrl",
                  ] as const
                ).map((key) => (
                  <div key={key}>
                    <label htmlFor={`journey-${key}`}>{EDIT_LABELS[key]}</label>
                    <input
                      id={`journey-${key}`}
                      type={
                        key === "website" || key === "reviewUrl"
                          ? "url"
                          : "text"
                      }
                      value={facts?.[key] || ""}
                      required={["name", "city", "category"].includes(key)}
                      minLength={
                        ["name", "city", "category"].includes(key)
                          ? 2
                          : undefined
                      }
                      maxLength={key === "name" ? 160 : 200}
                      placeholder={
                        key === "reviewUrl"
                          ? "Link where customers leave reviews"
                          : "Leave blank if unsure"
                      }
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
            )}
            <div className="match-actions">
              <button type="submit" className="button strong" disabled={busy}>
                {busy
                  ? "Starting"
                  : editing
                    ? "Save and continue"
                    : "Yes, that's my business"}
                <ArrowRight size={16} />
              </button>
              {!editing && (
                <button
                  type="button"
                  className="button"
                  onClick={() => setEditing(true)}
                >
                  <PencilSimple size={16} /> Something&apos;s wrong, let me fix
                  it
                </button>
              )}
            </div>
            {facts && (
              <p className="journey-note">
                Next we ask AI 5 questions a customer might ask, like “
                {broadQuestions(facts)[0].text}”. It takes about 30 seconds.
                Nothing is posted anywhere.
              </p>
            )}
          </form>
        </div>
      ) : (
        <>
          {complete ? (
            <div className="quick-outcome">
              <p className="eyebrow found-eyebrow">
                <Check size={14} aria-hidden="true" /> All 5 searches done
              </p>
              <h2>AI mentioned you in {count} of 5 searches.</h2>
              <p>{verdict(count, 5, facts?.name || input.name)}</p>
              {check && rivals(check, 3).length > 0 && (
                <p className="outcome-rivals">
                  AI suggested instead:{" "}
                  {rivals(check, 3).map((r, i) => (
                    <span key={r.name}>
                      {i > 0 && ", "}
                      <strong>{r.name}</strong>
                    </span>
                  ))}
                </p>
              )}
              <div className="match-actions">
                <Link href={`/check/${id}#fixes`} className="button strong">
                  See what to do next
                  <ArrowRight size={16} />
                </Link>
                <Link href={`/check/${id}`} className="button">
                  Open my full report
                </Link>
              </div>
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
                  {busy ? "Trying again" : "Try the unfinished searches again"}
                </button>
              )}
            </div>
          )}
          {!complete && (
            <p className="journey-resume">
              You can close this window. We keep going, and your{" "}
              <Link href={`/check/${id}`}>report stays saved</Link> on this
              device.
            </p>
          )}
        </>
      )}
    </dialog>
  );
}
