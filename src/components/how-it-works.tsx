"use client";
import { useEffect, useRef, useState } from "react";
import { ListNumbers } from "@phosphor-icons/react";

const steps = [
  {
    id: "confirm",
    short: "Confirm",
    note: "Your facts become the fact lock.",
    title: "Confirm your business",
    text: "Enter your name and city. We search the web for your details and show what we found. You correct anything wrong before we go further.",
    points: [
      "Name, address, hours and specialty",
      "Edit any detail we got wrong",
      "Unknown details stay blank",
    ],
    tone: "green",
  },
  {
    id: "ask",
    short: "Ask",
    note: "Five everyday searches. Answers arrive live.",
    title: "See what AI says",
    text: "Start with five broad questions like best sweet shops in Bhopal. Your answers arrive as they finish. Choose deep research for eight questions, repeated runs and a verified rival diagnosis.",
    points: [
      "NVIDIA Nemotron answers every run",
      "Tavily search supplies the sources",
      "Deep research adds cited rival explanations",
      "Checks whether AI agents can read your website",
    ],
    tone: "blue",
  },
  {
    id: "fix-pack",
    short: "Fix",
    note: "Drafts you edit and approve.",
    title: "Approve your fix pack",
    text: "Four practical drafts, written only from your confirmed facts. Edit anything, then approve. Nothing is copied out or published without you.",
    points: [
      "An AI-readable hosted page with schema",
      "Google Business Profile description, posts and Q&A",
      "Review requests and a printable QR card",
      "Schema markup for your own website",
    ],
    tone: "copper",
  },
];

export function HowItWorks({ preview }: { preview: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting)
            setActive(refs.current.indexOf(entry.target as HTMLElement));
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <section id="how-it-works" className="container protocol">
      <div className="protocol-side">
        <span className="pill-label">
          <ListNumbers size={12} aria-hidden="true" /> Three steps
        </span>
        <h2 className="two-tone">
          How it <span>works</span>
        </h2>
        <ol className="protocol-index">
          {steps.map((s, i) => (
            <li key={s.id} className={i === active ? "active" : ""}>
              <a href={`#${s.id}`}>
                0{i + 1} / {s.short}
              </a>
              <span>{s.note}</span>
            </li>
          ))}
        </ol>
        <div className="protocol-preview">{preview}</div>
      </div>
      <div className="protocol-steps">
        {steps.map((s, i) => (
          <article
            key={s.id}
            id={s.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
          >
            <span
              className="step-numeral"
              data-n={`0${i + 1}`}
              aria-hidden="true"
            />
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <ul className={`bullets ${s.tone}`}>
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
