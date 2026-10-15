"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowClockwise } from "@phosphor-icons/react";
import { Badge, Citation, Dots, RunMatrix, outlookColor } from "./ui";
import { METHOD, type Check } from "@/lib/types";
import { named, outlookCounts, sortQuestions } from "@/lib/outlook";
import { checkMode, expectedAnswers, runsPerQuestion } from "@/lib/questions";
import { useCheck } from "./use-check";
import { CheckProgress } from "./check-progress";
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
        <h1>Your visibility check.</h1>
        <p role="status">{error || pollError || "Opening your report..."}</p>
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
  const best = questions.find((q) => q.status === "Winnable now");
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
          ? `${check.sample ? "Saved deep example" : quick ? "Quick snapshot" : "Deep research"}, ${quick ? "5 questions, 1 answer each" : "8 questions, 5 runs each"}`
          : "Your check is in progress"}
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
            Partial answers are not a complete score. No unsupported findings or
            fixes have been published.
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
              {busy ? "Retrying..." : "Retry unfinished step"}
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
            Your answers are saved as they finish. This report can be reopened
            in this browser.
          </p>
        </section>
      ) : (
        <>
          <section className="panel summary-panel">
            <div className="summary-score">
              <div className="fact-name">AI VISIBILITY</div>
              <div className="summary-count">
                {count}{" "}
                <span>
                  of {answerTotal} {quick ? "answers" : "runs"}
                </span>
              </div>
              <p>
                Named in {count} of {answerTotal} answers across{" "}
                {quick ? "five everyday" : "eight customer"} questions.
              </p>
              {check.previousTotal !== undefined && (
                <p className="mono">
                  {count - check.previousTotal >= 0 ? "Up" : "Down"}{" "}
                  {Math.abs(count - check.previousTotal)} since the previous
                  check ({check.previousTotal} of {answerTotal}).
                </p>
              )}
            </div>
            <RunMatrix questions={questions} />
            <div className="summary-side">
              {quick ? (
                <p className="snapshot-label">
                  One pass per question.
                  <br />A starting point, not a ranking prediction.
                </p>
              ) : (
                <ul className="outlook-list" aria-label="Questions by outlook">
                  {outlookCounts(questions).map((o) => (
                    <li key={o.status} className={outlookColor(o.status)}>
                      <i aria-hidden="true" />
                      {o.count} {o.status.toLowerCase()}
                    </li>
                  ))}
                </ul>
              )}
              <button className="button" onClick={recheck} disabled={busy}>
                <ArrowClockwise size={16} />
                {busy ? "Starting..." : "Recheck now"}
              </button>
            </div>
          </section>
          <div className="next-move">
            <span className="fact-name">START HERE</span>
            <p>
              {quick
                ? count
                  ? "You are appearing in everyday searches. Review your fact-only drafts to make your business easier to understand."
                  : "Other businesses are being named. Start with a clear, accurate page about your business, then check again."
                : best
                  ? `“${best.text}” is winnable now, named in ${named(best)} of 5 runs. Approve your fix pack to strengthen it.`
                  : "No question is winnable right away. Niche questions are your best path, so start with your fix pack."}
            </p>
            <a className="text-link" href="#fixes">
              Go to your fix pack <ArrowRight size={16} />
            </a>
          </div>
          {quick && (
            <section className="deep-invite">
              <div>
                <p className="eyebrow">Go deeper, when you want</p>
                <h3>See what changes across repeated answers.</h3>
                <p>
                  8 questions, 40 answers, specialty searches and a verified
                  rival diagnosis. Takes a few minutes. No payment.
                </p>
              </div>
              <button className="button" onClick={deepen} disabled={busy}>
                {busy ? "Starting research" : "Start deep research"}
                <ArrowRight size={16} />
              </button>
            </section>
          )}
          <nav className="report-nav" aria-label="Report sections">
            <a href="#questions">Questions</a>
            <a href="#why">{rival ? `Why ${rival} wins` : "Sources"}</a>
            <a href="#fixes">
              Fix pack · {approved} of {check.fixes.length} approved
            </a>
          </nav>
          <section id="questions" className="report-section">
            <h2>What your customers might ask.</h2>
            <p className="section-note">
              {quick
                ? "Everyday category-and-city questions, in their original order. Each answer is a single sourced snapshot, not a prediction of future ranking."
                : "Most winnable first. Outlook labels are heuristics, not guarantees. Deep research combines broad discovery with specialty questions."}
            </p>
            <div className="question-list">
              {questions.map((q) => (
                <article key={q.id} className="question-row">
                  <div>
                    <span className="question-kind mono">{q.kind}</span>
                    <h3>{q.text}</h3>
                  </div>
                  <div className="question-data">
                    <Dots count={named(q)} total={repeats} />
                    {quick ? (
                      <span
                        className={
                          named(q)
                            ? "answer-ready snapshot-tag"
                            : "snapshot-tag"
                        }
                      >
                        {named(q) ? "Named" : "Not named"}
                      </span>
                    ) : (
                      <Badge label={q.status} />
                    )}
                  </div>
                  <details>
                    <summary>
                      View {q.runs.length}{" "}
                      {q.runs.length === 1 ? "answer" : "answers"}
                    </summary>
                    {q.runs.map((r) => (
                      <div className="run-answer" key={r.index}>
                        <span className="mono">
                          Run {r.index + 1} ·{" "}
                          {r.mentioned ? "Named" : "Not named"}
                        </span>
                        <p>{r.answer}</p>
                        <div className="citation-list">
                          {(r.citationIds || [])
                            .map((id) => check.sources.find((s) => s.id === id))
                            .filter(Boolean)
                            .map((s) => (
                              <Citation key={s!.id} source={s!} />
                            ))}
                        </div>
                      </div>
                    ))}
                  </details>
                </article>
              ))}
            </div>
          </section>
          <section id="why" className="report-section panel">
            <h2>
              {check.findings[0]
                ? `Why ${check.findings[0].rival} wins.`
                : "What the sources tell us."}
            </h2>
            {check.findings.length ? (
              check.findings.map((f, i) => (
                <article className="finding" key={i}>
                  <p>{f.body}</p>
                  <div className="citation-list">
                    {f.citationIds
                      .map((id) => check.sources.find((s) => s.id === id))
                      .filter(Boolean)
                      .map((s) => (
                        <Citation key={s!.id} source={s!} />
                      ))}
                  </div>
                </article>
              ))
            ) : (
              <p>
                {quick
                  ? "Your quick check uses the search excerpts linked below. Choose deep research for full-page reading and an independently verified explanation of why rivals are being named."
                  : "We could not support a rival explanation with sources. No finding is shown."}
              </p>
            )}
            <details className="sources">
              <summary>All {check.sources.length} sources</summary>
              {check.sources.map((s) => (
                <div key={s.id} style={{ marginTop: 16 }}>
                  <Citation source={s} />
                  <p>
                    {s.title} · Fetched{" "}
                    {new Date(s.fetchedAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </details>
          </section>
          <section id="fixes" className="report-section">
            <div className="section-title-row">
              <h2>Your fix pack.</h2>
              <span className="mono">
                {approved} of {check.fixes.length} approved
              </span>
            </div>
            <p className="section-note">
              Drafts use only your confirmed facts. Approve each one before
              copying or publishing.
            </p>
            <div className="fix-list">
              {check.fixes.map((f) => (
                <article className="panel fix-item" key={f.id}>
                  <div className="fix-copy">
                    <div className="fix-title">
                      <h3>{f.title}</h3>
                      <Badge
                        label={
                          f.status === "approved"
                            ? "Approved"
                            : f.status === "edited"
                              ? "Edited"
                              : "Draft"
                        }
                      />
                    </div>
                    <p>
                      {f.type === "page"
                        ? "A hosted page built from your confirmed facts."
                        : f.type === "profile"
                          ? "A description, three posts, five Q&A pairs."
                          : f.type === "reviews"
                            ? "SMS, WhatsApp, email and your printable QR card."
                            : "Structured business data for your website."}
                    </p>
                    {f.flags.length > 0 && (
                      <p className="error-message">
                        Needs a fact check before approval.
                      </p>
                    )}
                  </div>
                  <div className="action-row">
                    <Link className="button" href={`/fix/${f.id}?check=${id}`}>
                      {f.status === "approved"
                        ? "View approved fix"
                        : "Edit and approve"}{" "}
                      <ArrowRight size={16} />
                    </Link>
                    {f.slug && (
                      <Link href={`/p/${f.slug}`} className="text-link">
                        View page <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
          <WeeklyRechecks check={check} />
          <SaveReport checkId={id} />
          <p className="method-note mono">{METHOD}</p>
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
          <h2>Keep your report.</h2>
          <span>Optional</span>
        </summary>
        <p style={{ fontSize: 14, marginBottom: 20 }}>
          Optional magic-link login. Your first check never needs an account.
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
          <label htmlFor="save-email">Email address</label>
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
              {busy ? "Sending..." : "Send login link"}
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
      <h2>See what changes.</h2>
      <p>
        Rechecks use the same{" "}
        {check.mode === "quick"
          ? "five everyday questions with one answer each"
          : "eight questions with five runs each"}
        . Each report keeps its sources for a fair comparison.
      </p>
      {check.latestRecheckId ? (
        <Link className="button" href={`/check/${check.latestRecheckId}`}>
          View latest weekly report <ArrowRight size={16} />
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
                ? "Stop weekly rechecks"
                : "Enable weekly rechecks"}
          </button>
          {enabled && date && (
            <p role="status" className="notice">
              Next recheck on or after {new Date(date).toLocaleDateString()}.
              Results appear here and in your saved reports.
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
