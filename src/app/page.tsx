import Link from "next/link";
import {
  ArrowUpRight,
  ChatCircleText,
  Check,
  Lock,
  MagnifyingGlass,
  MapPin,
  Quotes,
  SealCheck,
  ShieldCheck,
  Target,
  UserCircleCheck,
} from "@phosphor-icons/react/dist/ssr";
import { HeroScene } from "@/components/hero-scene";
import { CheckForm } from "@/components/check-form";
import { Motion } from "@/components/motion";
import { Badge } from "@/components/ui";
import { SampleReport } from "@/components/sample-report";
import { ComingSoon } from "@/components/coming-soon";
import { HowItWorks } from "@/components/how-it-works";
import { examples, sampleCheck } from "@/lib/examples";

const stats = [
  {
    icon: MagnifyingGlass,
    value: "8",
    label: "Customer questions",
    tag: "Per check",
  },
  { icon: ChatCircleText, value: "40", label: "AI answers read" },
  { icon: SealCheck, value: "0", label: "Claims without a source" },
];
const tiles = ["sky", "ember", "dune", "crimson"] as const;
const principles = [
  {
    icon: Quotes,
    quote:
      "Every finding links to the page we read. If we cannot cite it, we do not show it.",
    title: "No source, no claim",
    rule: "Citation rule",
  },
  {
    icon: Target,
    quote:
      "Every question runs five times and shows five dots. Variation is never dressed up as a single percentage.",
    title: "Repeat, then report",
    rule: "Scoring rule",
  },
  {
    icon: Lock,
    quote:
      "Drafts only use facts you confirmed. Nothing is copied out or published until you approve it.",
    title: "Your facts, your call",
    rule: "Fact lock",
  },
];

function Matrix({ counts }: { counts: number[] }) {
  return (
    <span className="tile-matrix" aria-hidden="true">
      {counts.map((c, q) => (
        <span key={q}>
          {[0, 1, 2, 3, 4].map((i) => (
            <i key={i} className={i < c ? "on" : ""} />
          ))}
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  const preview = sampleCheck("brew-lane", "landing");
  const [brew, moss, spoke, still] = examples;
  const tile = (e: (typeof examples)[number], tone: string, tall = false) => (
    <Link
      href={`/examples/${e.id}`}
      className={`tile tile-${tone}${tall ? " tall" : ""}`}
    >
      <span className="tile-tag">{e.category}</span>
      <Matrix counts={e.counts} />
      <span className="tile-label">
        <strong>{e.name}</strong>
        <span>
          {e.city} · {e.counts.reduce((a, b) => a + b, 0)} of 40 runs
        </span>
      </span>
    </Link>
  );
  return (
    <Motion>
      <main id="main" className="landing-page">
        <section className="hero">
          <HeroScene />
          <div className="hero-ring" aria-hidden="true" />
          <div className="container hero-content">
            <p className="hero-version" data-enter>
              AI visibility check · v1
            </p>
            <h1 data-enter>
              Does it say <span>you?</span>
            </h1>
            <div className="hero-sub" data-enter>
              <span className="status-chip">
                <ShieldCheck size={16} aria-hidden="true" />
                <span>
                  <small>Free check</small>No signup
                </span>
              </span>
              <p>Customers ask AI who to visit.</p>
            </div>
            <p className="hero-description" data-enter>
              Cited asks AI the questions your customers ask, five times each,
              then shows who gets named, why, and the fixes that close the gap.
            </p>
            <div className="hero-actions" data-enter>
              <a className="button strong" href="#check">
                Run free check
              </a>
              <Link className="button" href="/examples/brew-lane">
                See a sample report
              </Link>
            </div>
            <ul className="stat-cards" data-enter>
              {stats.map((s, i) => (
                <li key={s.label}>
                  <span className="stat-top">
                    <s.icon size={18} aria-hidden="true" />
                    {s.tag && <span className="stat-tag">{s.tag}</span>}
                    <span className="stat-index">0{i + 1}</span>
                  </span>
                  <strong>{s.value}</strong>
                  <span className="stat-label">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="manifesto container" data-reveal>
          <p>
            Stop guessing. Start{" "}
            <span className="chip">
              <Target size={18} aria-hidden="true" /> measuring
            </span>{" "}
            what AI tells your customers, with{" "}
            <span className="highlight">an engine that cites</span> every claim
            and turns{" "}
            <span className="chip icon-only">
              <Lock size={16} aria-hidden="true" />
            </span>{" "}
            blind spots into fixes you approve.
          </p>
        </section>

        <HowItWorks preview={<SampleReport check={preview} />} />

        <section id="examples" className="container section" data-reveal>
          <div className="section-title">
            <h2>Examples</h2>
            <p className="kicker">
              / Saved reports / Fictional businesses{" "}
              <Badge label="Sample data" />
            </p>
          </div>
          <div className="mosaic">
            {tile(brew, tiles[0], true)}
            <div className="mosaic-stack">
              {tile(moss, tiles[1])}
              {tile(spoke, tiles[2])}
              <a href="#check" className="tile tile-volt">
                <span className="tile-tag">Live</span>
                <span className="tile-cta">
                  <ArrowUpRight size={28} aria-hidden="true" />
                </span>
                <span className="tile-label">
                  <strong>Your business</strong>
                  <span>Any city, worldwide</span>
                </span>
              </a>
            </div>
            {tile(still, tiles[3], true)}
          </div>
        </section>

        <section
          id="honesty"
          className="section principles-section"
          data-reveal
        >
          <div className="container">
            <h2 className="center-title">
              Honest <span>by design</span>
            </h2>
            <ul className="quote-cards">
              {principles.map((p) => (
                <li key={p.title}>
                  <p>“{p.quote}”</p>
                  <span className="quote-by">
                    <p.icon size={22} aria-hidden="true" />
                    <span>
                      <strong>{p.title}</strong>
                      <small>{p.rule}</small>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="pricing" className="container section" data-reveal>
          <div className="section-title">
            <h2>Pricing</h2>
            <p className="kicker">/ Free today / Paid plans planned</p>
          </div>
          <div className="pricing-grid">
            <article className="price-card featured">
              <span className="plan-name">
                Free check{" "}
                <span className="plan-badge live">Available now</span>
              </span>
              <div className="price">
                $0<span>no signup</span>
              </div>
              <ul>
                <li>
                  <Check size={14} aria-hidden="true" />8 questions, 5 runs each
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Sources and rival explanations
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />A fact-checked fix pack
                </li>
              </ul>
              <a className="button strong" href="#check">
                Run free check
              </a>
            </article>
            <article className="price-card">
              <span className="plan-name">
                Owner <span className="plan-badge">Coming soon</span>
              </span>
              <div className="price">
                $19<span>/ month</span>
              </div>
              <ul>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Weekly rechecks and trends
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Hosted page and fix packs
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Review requests and QR card
                </li>
              </ul>
              <ComingSoon plan="Owner" />
            </article>
            <article className="price-card">
              <span className="plan-name">
                Agency <span className="plan-badge">Coming soon</span>
              </span>
              <div className="price">
                $79<span>/ month</span>
              </div>
              <ul>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Multi-client workspace
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  White-label reports
                </li>
                <li>
                  <Check size={14} aria-hidden="true" />
                  Shared approval workflows
                </li>
              </ul>
              <ComingSoon plan="Agency" />
            </article>
          </div>
        </section>

        <section className="final-cta" data-reveal>
          <h2>
            Ready to be <span>cited?</span>
          </h2>
          <p>
            Free check. No signup. Forty AI answers, every one with its sources.
          </p>
          <a className="button strong" href="#check">
            Check my business
          </a>
        </section>

        <section className="container start-section" data-reveal>
          <div className="start-copy">
            <h2>Start your check</h2>
            <p>
              Enter your business name and city. We find your details, you
              confirm them, then we read forty AI answers and draft your fixes.
            </p>
            <ul>
              <li>
                <UserCircleCheck size={18} aria-hidden="true" />
                No signup or payment
              </li>
              <li>
                <MapPin size={18} aria-hidden="true" />
                Works for any city, worldwide
              </li>
            </ul>
          </div>
          <CheckForm variant="line" />
        </section>
      </main>
    </Motion>
  );
}
