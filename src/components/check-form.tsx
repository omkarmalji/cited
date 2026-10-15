"use client";
import { useState } from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Lightning, Microscope } from "@phosphor-icons/react";
import { CheckJourney } from "./check-journey";
export function CheckForm({
  id = "check",
  variant,
}: {
  id?: string;
  variant?: "line";
}) {
  const [input, setInput] = useState<{ name: string; city: string } | null>(
    null,
  );
  const [mode, setMode] = useState<"quick" | "deep">("quick");
  const [recent, setRecent] = useState<{ id: string; name: string } | null>(
    null,
  );
  const submitButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("cited-last-check") || "null",
      );
      if (
        saved &&
        /^[a-f0-9-]{36}$/.test(saved.id) &&
        typeof saved.name === "string"
      )
        setRecent(saved);
    } catch {}
  }, [input]);
  return (
    <>
      <form
        id={id}
        className={variant ? `check-form ${variant}` : "check-form"}
        onSubmit={(e) => {
          e.preventDefault();
          const fields = new FormData(e.currentTarget);
          setInput({
            name: String(fields.get("name")).trim(),
            city: String(fields.get("city")).trim(),
          });
        }}
      >
        <fieldset className="check-tiers">
          <legend>Choose your check</legend>
          <label className={mode === "quick" ? "selected" : ""}>
            <input
              type="radio"
              name="mode"
              value="quick"
              checked={mode === "quick"}
              onChange={() => setMode("quick")}
            />
            <Lightning size={18} />
            <span>
              <strong>Quick check</strong>
              <small>5 searches · ~30 seconds</small>
            </span>
          </label>
          <label className={mode === "deep" ? "selected" : ""}>
            <input
              type="radio"
              name="mode"
              value="deep"
              checked={mode === "deep"}
              onChange={() => setMode("deep")}
            />
            <Microscope size={18} />
            <span>
              <strong>Deep research</strong>
              <small>40 answers · a few minutes</small>
            </span>
          </label>
        </fieldset>
        <div className="form-fields">
          <div>
            <label htmlFor={`${id}-business-name`}>Business name</label>
            <input
              id={`${id}-business-name`}
              aria-describedby={`${id}-note`}
              name="name"
              placeholder="e.g. Brew Lane Cafe"
              required
              minLength={2}
              maxLength={160}
              autoComplete="organization"
            />
          </div>
          <div>
            <label htmlFor={`${id}-business-city`}>City</label>
            <input
              id={`${id}-business-city`}
              aria-describedby={`${id}-note`}
              name="city"
              placeholder="e.g. Portland, USA"
              required
              minLength={2}
              maxLength={120}
              autoComplete="address-level2"
            />
          </div>
          <button ref={submitButton} className="button strong" type="submit">
            {mode === "quick" ? "Run free check" : "Start deep research"}{" "}
            <ArrowRight size={16} />
          </button>
        </div>
        <p className="form-note" id={`${id}-note`}>
          No signup. No payment. Confirm your details, then see answers as they
          arrive.
        </p>
        {recent && (
          <Link className="resume-check" href={`/check/${recent.id}`}>
            Continue {recent.name}&apos;s report <ArrowRight size={14} />
          </Link>
        )}
      </form>
      {input && (
        <CheckJourney
          input={input}
          mode={mode}
          onClose={(edit) => {
            setInput(null);
            if (edit) document.getElementById(`${id}-business-name`)?.focus();
            else submitButton.current?.focus();
          }}
        />
      )}
    </>
  );
}
