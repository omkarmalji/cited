"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export function Account() {
  const [checks, setChecks] = useState<
      {
        id: string;
        name: string;
        city: string;
        date: string;
        status: string;
        sample: boolean;
      }[]
    >([]),
    [error, setError] = useState("");
  useEffect(() => {
    fetch("/api/account")
      .then((r) => r.json())
      .then((d) => setChecks(d.checks))
      .catch(() => setError("Could not load your saved reports."));
  }, []);
  return (
    <main id="main" className="app-container">
      <h1>Your reports.</h1>
      <p>Reports saved to this session or your signed-in account.</p>
      {error && <p role="alert">{error}</p>}
      {checks.map((c) => (
        <Link className="question-row" href={`/check/${c.id}`} key={c.id}>
          <h3>
            {c.name} · {c.city}
          </h3>
          <span className="mono" style={{ fontSize: 12 }}>
            {c.sample ? "Sample data" : c.status} ·{" "}
            {new Date(c.date).toLocaleDateString()}
          </span>
        </Link>
      ))}
      {!checks.length && (
        <p className="notice">
          No reports found. If your email link expired, request a new one from
          your report.
        </p>
      )}
      <Link className="button" href="/#check">
        Run a check
      </Link>
    </main>
  );
}
