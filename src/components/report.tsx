"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  ArrowClockwise,
  Check as CheckIcon,
} from "@phosphor-icons/react";
import { Badge, Citation, RunMatrix } from "./ui";
import { METHOD, type Check } from "@/lib/types";
import { named, rivals, sortQuestions, verdict } from "@/lib/outlook";
import { checkMode, expectedAnswers, runsPerQuestion } from "@/lib/questions";
import { useCheck } from "./use-check";
import { CheckProgress } from "./check-progress";
import { AgentReadinessPanel } from "./agent-readiness";
// Owner-facing names. Fix types stay technical in code and drafts.
const PLAIN_FIXES = {
  page: {
    title: "Publish a simple page about your business",
    why: "AI tools read pages like this. We wrote it from your details. You check it, then publish with one click.",
    time: "About 2 minutes",
  },
  profile: {
    title: "Update your Google Business Profile",
    why: "Copy and paste a ready description, 3 posts and 5 questions with answers into your Google listing.",
    time: "About 10 minutes",
  },
  reviews: {
    title: "Ask happy customers for a review",
    why: "Ready messages for WhatsApp, SMS and email, plus a QR card you can print for your counter.",
    time: "About 5 minutes",
  },
  schema: {
    title: "Send this to whoever runs your website",
    why: "A small piece of code that helps AI understand your site. Just forward it, no need to understand it.",
    time: "About 1 minute",
  },
} as const;
export function Report({ id }: { id: string }) {
  const { check, error: pollError, refresh } = useCheck(id);
  const [error, setError] = useState(""),
    [busy, setBusy] = useState(false);
  const router = useRouter();
  const deepen = async () => {
    setBusy(true);
    setError("");
    try {
      const response = await fetch(`/api/checks/${id}/deepen`, {
        method: "POST",
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      router.push(`/check/${data.id}`);
    } catch (error) {
      setError((error as Error).message);
      setBusy(false);
    }
  };
  const recheck = async () => {
    setBusy(true);
    setError("");
    try {
      const r = await fetch(`/api/checks/${id}/recheck`, { method: "POST" }),
        d = await r.json();
      if (!r.ok) throw new Error(d.error);
      router.push(`/check/${d.id}`);
    } catch (e) {
      setError((e as Error).message);
      setBusy(false);
    }
  };
  if (!check)
    return (
      <main id="main" className="app-container">
        <h1>Your AI check</h1>
        <p role="status">{error || pollError || "Opening your report…"}</p>
        {pollError && (
          <button className="button" onClick={refresh}>
            Reconnect
          </button>
        )}
        <a className="button" href="/#examples">
          Try an example
        </a>
      </main>
    );
  const count = check.questions
    .flatMap((q) => q.runs)
    .filter((r) => r.mentioned).length;
  const complete = check.status === "complete";
  const quick = checkMode(check) === "quick";
  const answerTotal = expectedAnswers(check);
  const repeats = runsPerQuestion(check);
  const questions = quick ? check.questions : sortQuestions(check.questions);
  const others = rivals(check);
  const approved = check.fixes.filter((f) => f.status === "approved").length;
  const rival = check.findings[0]?.rival;
  return (
    <main id="main" className="app-container">
      <div className="app-topline">
        <Link href="/" className="back-link">
          Back to Cited
        </Link>
        {check.sample && <Badge label="Sample data" />}
      </div>
      <h1>{check.facts.name}</h1>
      <p className="report-meta">
        {check.facts.city}, {check.facts.country} ·{" "}
        {complete
          ? check.sample
            ? "Saved example"
            : `Checked ${new Date(check.createdAt).toLocaleDateString("en", { day: "numeric", month: "short", year: "numeric" })}`
          : "Check in progress"}
      </p>
      {check.sample && (
        <p className="notice sample">
          Fictional business. Saved results. Approved pages stay labeled.
        </p>
      )}
      {(error || pollError) && (
        <p className="error-message" role="alert">
          {error || pollError}
          {pollError && (
            <button className="button" onClick={refresh}>
              Reconnect
            </button>
          )}
        </p>
      )}
      {check.status === "error" ? (
        <div className="panel">
          <h2>We couldn’t finish this check.</h2>
          <p role="alert">{check.error}</p>
          <p className="notice">
            The answers we did get are saved below. Nothing was published.
          </p>
          {check.questions.some((q) => q.runs.length) && (
            <CheckProgress
              check={check}
              name={check.facts.name}
              city={check.facts.city}
              since={Date.parse(check.createdAt)}
            />
          )}
          {check.retryStage && (check.retryCount || 0) < 3 && (
            <button
              className="button strong"
              style={{ marginRight: 12 }}
              disabled={busy}
              onClick={async () => {
                setBusy(true);
                setError("");
                try {
                  const response = await fetch(`/api/checks/${id}/retry`, {
                      method: "POST",
                    }),
                    data = await response.json();
                  if (!response.ok) throw new Error(data.error);
                  refresh();
                } catch (e) {
                  setError((e as Error).message);
                }
                setBusy(false);
              }}
            >
              {busy ? "Trying again..." : "Try again"}
            </button>
          )}
          <a className="button" href="/#check">
            Start another check
          </a>
        </div>
      ) : !complete ? (
        <section className="panel">
          <CheckProgress
            check={check}
            name={check.facts.name}
            city={check.facts.city}
            since={Date.parse(check.createdAt)}
          />
          <p className="notice">
            You can leave this page. Answers are saved as they arrive, and this
            report opens again on this device.
          </p>
        </section>
      ) : (
        <>
          <section className="panel verdict">
            <p className="fact-name">
              {check.sample
                ? "Saved example result"
                : quick
                  ? "Quick check result"
                  : "Deep research result"}
            </p>
            <h2 className="verdict-title">
              AI mentioned you in <span className="summary-count">{count}</span>{" "}
              of {answerTotal} {quick ? "searches" : "answers"}.
            </h2>
            <p className="verdict-text">
              {verdict(count, answerTotal, check.facts.name)}
            </p>
            {quick ? (
              <span
                className="verdict-dots"
                role="img"
                aria-label={`Mentioned in ${count} of ${answerTotal} searches`}
              >
                {check.questions.map((q) => (
                  <i key={q.id} className={named(q) ? "filled" : ""} />
                ))}
              </span>
            ) : (
              <RunMatrix questions={questions} />
            )}
            {check.previousTotal !== undefined && (
              <p className="mono verdict-trend">
                {count - check.previousTotal >= 0 ? "Up" : "Down"}{" "}
                {Math.abs(count - check.previousTotal)} since the previous check
                ({check.previousTotal} of {answerTotal}).
              </p>
            )}
            <div className="verdict-actions">
              <a className="button strong" href="#fixes">
                See what to do next <ArrowRight size={16} />
              </a>
              <button className="button" onClick={recheck} disabled={busy}>
                <ArrowClockwise size={16} />
                {busy ? "Starting..." : "Recheck now"}
              </button>
            </div>
          </section>
          {others.length > 0 && (
            <section id="why" className="report-section">
              <h2>Who AI suggests instead</h2>
              <p className="section-note">
                These are the businesses AI named when customers asked. They
                show what AI can easily find about a business like yours.
              </p>
              <ol className="rival-list">
                {others.map((r, i) => (
                  <li key={r.name}>
                    <span className="rival-rank">{i + 1}</span>
                    <strong>{r.name}</strong>
                    {r.count > 0 && (
                      <span>
                        named in {r.count} of {answerTotal}{" "}
                        {quick ? "searches" : "answers"}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
              {check.findings.length > 0 && (
                <div className="why-box">
                  <h3>Why AI picks {rival}</h3>
                  {check.findings.map((f, i) => (
                    <div className="finding" key={i}>
                      <p>{f.body}</p>
                      <div className="citation-list">
                        {f.citationIds
                          .map((id) => check.sources.find((s) => s.id === id))
                          .filter(Boolean)
                          .map((s) => (
                            <Citation key={s!.id} source={s!} />
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}
          <AgentReadinessPanel checkId={id} sample={check.sample} />
          <section id="fixes" className="report-section">
            <div className="section-title-row">
              <h2>What to do next</h2>
              <span className="mono">
                {approved} of {check.fixes.length} done
              </span>
            </div>
            <p className="section-note">
              We already wrote these for you, using only the details you
              confirmed. Open each one, change anything you like, then use it.
            </p>
            <ol className="todo-list">
              {check.fixes.map((f, i) => {
                const plain = PLAIN_FIXES[f.type],
                  done = f.status === "approved";
                return (
                  <li
                    className={done ? "fix-item done" : "fix-item"}
                    key={f.id}
                  >
                    <span className="todo-step" aria-hidden="true">
                      {done ? <CheckIcon size={16} weight="bold" /> : i + 1}
                    </span>
                    <div className="fix-copy">
                      <h3>{plain.title}</h3>
                      <p>{plain.why}</p>
                      <span className="todo-time">
                        {done ? "Done" : plain.time}
                      </span>
                      {f.flags.length > 0 && (
                        <p className="error-message">
                          One detail needs your check before you can use this.
                        </p>
                      )}
                    </div>
                    <div className="action-row">
                      <Link
                        className={done ? "button" : "button strong"}
                        href={`/fix/${f.id}?check=${id}`}
                      >
                        {done ? "View" : "Review and use"}{" "}
                        <ArrowRight size={16} />
                      </Link>
                      {f.slug && (
                        <Link href={`/p/${f.slug}`} className="text-link">
                          See your page <ArrowRight size={16} />
                        </Link>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
          {quick && (
            <section className="deep-invite">
              <div>
                <p className="eyebrow">Want a closer look?</p>
                <h3>Ask more questions, more times.</h3>
                <p>
                  AI answers change from one try to the next. Deep research asks
                  8 questions 5 times each and explains why AI picks other
                  businesses. Takes a few minutes. Still free.
                </p>
              </div>
              <button className="button" onClick={deepen} disabled={busy}>
                {busy ? "Starting" : "Start deep research"}
                <ArrowRight size={16} />
              </button>
            </section>
          )}
          <section id="questions" className="report-section">
            <h2>What customers asked AI</h2>
            <p className="section-note">
              {quick
                ? "We asked AI these everyday questions, once each."
                : "We asked each question 5 times, because AI answers change."}{" "}
              Open any question to see exactly what AI said and where it found
              it.
            </p>
            <div className="question-list">
              {questions.map((q) => (
                <article key={q.id} className="question-row">
                  <h3>{q.text}</h3>
                  <div className="question-data">
                    <span
                      className={
                        named(q) ? "answer-ready snapshot-tag" : "snapshot-tag"
                      }
                    >
                      {quick
                        ? named(q)
                          ? "You're mentioned"
                          : "Not mentioned"
                        : `Mentioned ${named(q)} of ${repeats} times`}
                    </span>
                    {!quick && <Badge label={q.status} />}
                  </div>
                  <details>
                    <summary>What AI said</summary>
                    {q.runs.map((r) => (
                      <div className="run-answer" key={r.index}>
                        {!quick && (
                          <span className="mono">
                            Try {r.index + 1} ·{" "}
                            {r.mentioned
                              ? "mentioned you"
                              : "did not mention you"}
                          </span>
                        )}
                        <p>{r.answer}</p>
                        {(r.citationIds || []).length > 0 && (
                          <div className="citation-list">
                            <span className="citation-label">Found on</span>
                            {(r.citationIds || [])
                              .map((id) =>
                                check.sources.find((s) => s.id === id),
                              )
                              .filter(Boolean)
                              .map((s) => (
                                <Citation key={s!.id} source={s!} />
                              ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </details>
                </article>
              ))}
            </div>
          </section>
          <WeeklyRechecks check={check} />
          <SaveReport checkId={id} />
          <details className="how-checked">
            <summary>How we checked</summary>
            <p>
              We asked NVIDIA Nemotron AI the questions above, with live web
              search through Tavily, the way a customer might ask an AI
              assistant. {METHOD}
            </p>
            {!quick && (
              <p>
                Outlook labels such as “Winnable now” are our best estimate, not
                a guarantee.
              </p>
            )}
            <p>
              Every claim links to a page we read. All {check.sources.length}{" "}
              sources:
            </p>
            <div className="citation-list">
              {check.sources.map((s) => (
                <Citation key={s.id} source={s} />
              ))}
            </div>
          </details>
        </>
      )}
    </main>
  );
}
function SaveReport({ checkId }: { checkId: string }) {
  const [email, setEmail] = useState(""),
    [message, setMessage] = useState(""),
    [busy, setBusy] = useState(false);
  return (
    <section className="report-section">
      <details className="panel report-option">
        <summary>
          <h2>Keep this report</h2>
          <span>Optional</span>
        </summary>
        <p style={{ fontSize: 14, marginBottom: 20 }}>
          We&apos;ll email you a link so you can open it on any device. No
          password needed.
        </p>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setBusy(true);
            setMessage("");
            try {
              const r = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, checkId }),
              });
              const d = await r.json();
              setMessage(d.message || d.error);
            } catch {
              setMessage("Could not send login link. Please try again.");
            }
            setBusy(false);
          }}
        >
          <label htmlFor="save-email">Your email</label>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <input
              style={{ flex: "1 1 240px" }}
              id="save-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <button className="button" disabled={busy}>
              {busy ? "Sending..." : "Email me a link"}
            </button>
          </div>
          {message && (
            <p className="notice" role="status">
              {message}
            </p>
          )}
        </form>
      </details>
    </section>
  );
}
function WeeklyRechecks({ check }: { check: Check }) {
  const [enabled, setEnabled] = useState(!!check.weeklyEnabled),
    [date, setDate] = useState(check.nextRecheckAt),
    [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  if (check.sample) return null;
  return (
    <section className="report-section panel">
      <h2>Check again every week</h2>
      <p>
        We repeat the same questions each week, so you can see whether your
        updates are working.
      </p>
      {check.latestRecheckId ? (
        <Link className="button" href={`/check/${check.latestRecheckId}`}>
          See this week&apos;s result <ArrowRight size={16} />
        </Link>
      ) : (
        <>
          <button
            className="button"
            aria-pressed={enabled}
            disabled={busy}
            style={{ marginTop: 20 }}
            onClick={async () => {
              setBusy(true);
              setError("");
              try {
                const response = await fetch(`/api/checks/${check.id}/weekly`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ enabled: !enabled }),
                  }),
                  data = await response.json();
                if (!response.ok) throw new Error(data.error);
                setEnabled(data.enabled);
                setDate(data.nextRecheckAt);
              } catch (e) {
                setError((e as Error).message);
              }
              setBusy(false);
            }}
          >
            {busy
              ? "Saving..."
              : enabled
                ? "Turn off weekly checks"
                : "Turn on weekly checks"}
          </button>
          {enabled && date && (
            <p role="status" className="notice">
              Next check on or after {new Date(date).toLocaleDateString()}. The
              result will show up here.
            </p>
          )}
        </>
      )}
      {error && (
        <p role="alert" className="error-message">
          {error}
        </p>
      )}
    </section>
  );
}
