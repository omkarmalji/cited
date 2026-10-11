import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle,
  Plus,
  GlobeHemisphereWest,
  ChatCircleText,
  Star,
  Code,
  WarningCircle,
} from "@phosphor-icons/react/dist/ssr";
import { HeroScene } from "@/components/hero-scene";
import { CheckForm } from "@/components/check-form";
import { Motion } from "@/components/motion";
import { Badge, Dots } from "@/components/ui";
import { SampleReport } from "@/components/sample-report";
import { ComingSoon } from "@/components/coming-soon";
import { examples, sampleCheck } from "@/lib/examples";
const fixes = [
  {
    icon: GlobeHemisphereWest,
    title: "A page AI can read",
    text: "One hosted page with your confirmed details, structured for people and assistants.",
    detail: "LocalBusiness + FAQ schema",
  },
  {
    icon: ChatCircleText,
    title: "A better business profile",
    text: "A description, three posts and five Q&A pairs for your Google Business Profile.",
    detail: "Written only from your facts",
  },
  {
    icon: Star,
    title: "More honest reviews",
    text: "Review requests for SMS, WhatsApp and email, plus a printable QR card.",
    detail: "No incentives. No fake praise.",
  },
  {
    icon: Code,
    title: "The right website signals",
    text: "Schema markup for your own site, with plain-language install steps.",
    detail: "Copy after you approve",
  },
];
const faqs = [
  {
    question: "How accurate is an AI visibility check?",
    answer:
      "It is an estimate, not a ranking promise. Five runs per question show how often your business appears, and linked sources let you check the evidence. Results change as models and public information change.",
  },
  {
    question: "Which AI assistants do you check?",
    answer:
      "Cited pairs NVIDIA Nemotron models on Nebius Token Factory with fresh Tavily web search. It is a transparent simulation of AI recommendations, not a live test of ChatGPT, Claude or Gemini.",
  },
  {
    question: "How does scoring work?",
    answer:
      "Eight customer questions, five answers each. Your score counts how many of those 40 answers name your business. Each question also shows its runs, sources and a realistic outlook.",
  },
  {
    question: "What happens to my business data?",
    answer:
      "We store the details, confirmed facts, sources, answers and drafts your report needs. Live checks send relevant facts and public web content to Nebius and Tavily. Reports stay in your browser session unless you save them to an account. A hosted page goes public only after you approve it. Do not enter private customer information.",
  },
  {
    question: "Is the free check really free?",
    answer:
      "Yes. The check and the saved examples need no signup or payment. Owner and Agency are planned tiers with no billing flow today.",
  },
];
export default function Home() {
  const preview = sampleCheck("brew-lane", "landing");
  return (
    <Motion>
      <main id="main" className="landing-page">
        <section className="hero">
          <HeroScene />
          <div className="container hero-content">
            <div className="hero-copy">
              <p className="announcement" data-enter>
                AI visibility checks for local businesses
              </p>
              <h1 data-enter>
                Customers ask AI who to visit. <span>Does it say you?</span>
              </h1>
              <p className="hero-description" data-enter>
                We ask AI eight questions your customers ask, five times each.
                See who gets named, why, and exactly what to fix.
              </p>
              <div className="hero-form" data-enter>
                <CheckForm />
              </div>
              <div id="examples" className="example-row" data-enter>
                <p>
                  No business handy? Open a saved example.{" "}
                  <Badge label="Sample data" />
                </p>
                <ul>
                  {examples.map((e) => (
                    <li key={e.id}>
                      <Link href={`/examples/${e.id}`} className="example-chip">
                        <strong>{e.name}</strong>
                        <span>{e.city}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hero-preview" data-enter>
              <SampleReport check={preview} />
            </div>
          </div>
        </section>
        <section
          className="method-strip"
          aria-label="What every check includes"
        >
          <div className="container">
            <dl>
              <div>
                <dt>customer questions</dt>
                <dd>8</dd>
              </div>
              <div>
                <dt>answers per question</dt>
                <dd>5</dd>
              </div>
              <div>
                <dt>claims without a source</dt>
                <dd>0</dd>
              </div>
              <div>
                <dt>fixes published without approval</dt>
                <dd>0</dd>
              </div>
            </dl>
            <p>
              Runs on NVIDIA Nemotron via Nebius Token Factory, with live Tavily
              web search.
            </p>
          </div>
        </section>
        <section id="how-it-works" className="container section" data-reveal>
          <div className="section-header">
            <p className="eyebrow">How it works</p>
            <h2>From “am I invisible?” to “here’s my next move.”</h2>
          </div>
          <ol className="steps">
            <li>
              <div className="step-visual" aria-hidden="true">
                <div className="mini-fact">
                  <span>Address</span>24 Riverside Walk
                  <CheckCircle size={16} />
                </div>
                <div className="mini-fact">
                  <span>Hours</span>Mon to Sat, 8am to 6pm
                  <CheckCircle size={16} />
                </div>
                <span className="mini-button">Yes, this is me</span>
              </div>
              <span className="step-number mono">01</span>
              <h3>Confirm your business.</h3>
              <p>
                Enter your name and city. We find your details. You correct
                anything wrong. Only confirmed facts are used later.
              </p>
            </li>
            <li>
              <div className="step-visual" aria-hidden="true">
                <p className="mini-question">
                  “Quiet cafe with filter coffee in Portland?”
                </p>
                <div className="mini-row">
                  <Dots count={3} />
                  <Badge label="Winnable now" />
                </div>
                <p className="mini-question muted">“Best cafe in Portland?”</p>
                <div className="mini-row">
                  <Dots count={0} />
                  <Badge label="Unlikely" />
                </div>
              </div>
              <span className="step-number mono">02</span>
              <h3>See what AI says.</h3>
              <p>
                Eight questions your customers might ask, five answers each.
                Every answer keeps the sources it read.
              </p>
            </li>
            <li>
              <div className="step-visual" aria-hidden="true">
                <div className="mini-row">
                  <span className="mini-title">Business profile pack</span>
                  <Badge label="Approved" />
                </div>
                <div className="mini-row">
                  <span className="mini-title">Review requests + QR</span>
                  <span className="mini-button">Approve</span>
                </div>
              </div>
              <span className="step-number mono">03</span>
              <h3>Approve your fixes.</h3>
              <p>
                Get a fix pack built from your facts. Edit anything, then
                approve. Nothing goes out without you.
              </p>
            </li>
          </ol>
        </section>
        <section id="honesty" className="container section" data-reveal>
          <div className="section-header">
            <p className="eyebrow">Honest by design</p>
            <h2>No mystery score. No made-up facts.</h2>
            <p>
              AI answers vary. Cited shows the variation and the evidence
              instead of dressing it up as certainty.
            </p>
          </div>
          <div className="principles">
            <article>
              <div className="principle-visual" aria-hidden="true">
                <p>
                  Juniper Coffee lists its hours and services on a dedicated
                  page.
                </p>
                <span className="citation-list">
                  <span className="citation">[2] juniper-coffee.example</span>
                  <span className="citation">[4] city-guide.example</span>
                </span>
              </div>
              <h3>No source, no claim.</h3>
              <p>
                Every finding links to the page we read. Anything we cannot cite
                is not shown.
              </p>
            </article>
            <article>
              <div className="principle-visual" aria-hidden="true">
                <div className="score-compare">
                  <s>Visibility 40%</s>
                  <Dots count={2} />
                </div>
              </div>
              <h3>Repeat, then report.</h3>
              <p>
                Each question runs five times and shows five dots. Never a
                single confident percentage.
              </p>
            </article>
            <article>
              <div className="principle-visual" aria-hidden="true">
                <p className="mono">Open 24 hours.</p>
                <p className="flag">
                  <WarningCircle size={16} />
                  Approval blocked: unconfirmed facts.
                </p>
              </div>
              <h3>Your facts. Your approval.</h3>
              <p>
                Drafts can only use facts you confirmed. Edits that add new
                claims are blocked until you remove them.
              </p>
            </article>
          </div>
        </section>
        <section
          id="fix-pack"
          className="container section split-section"
          data-reveal
        >
          <div className="section-header">
            <p className="eyebrow">The fix pack</p>
            <h2>Don’t just find the gaps. Close them.</h2>
            <p>
              Every report ends with four practical drafts you can edit, approve
              and use the same day.
            </p>
            <Link className="text-link" href="/examples/brew-lane">
              Open a sample fix pack <ArrowRight size={18} />
            </Link>
          </div>
          <ul className="fix-grid">
            {fixes.map((f) => (
              <li className="fix-feature" key={f.title}>
                <span className="feature-icon">
                  <f.icon size={20} />
                </span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                  <span className="feature-detail mono">{f.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section id="pricing" className="container section" data-reveal>
          <div className="section-header">
            <p className="eyebrow">Pricing</p>
            <h2>Small business. Small bill.</h2>
            <p>The free check is live today. Paid plans are planned.</p>
          </div>
          <div className="pricing-grid">
            <article className="price-card featured">
              <span className="plan-name mono">
                Free check{" "}
                <span className="plan-badge live">Available now</span>
              </span>
              <div className="price">
                $0<span>no signup</span>
              </div>
              <p>Find your starting point.</p>
              <ul>
                <li>
                  <Check size={15} aria-hidden="true" />8 customer questions, 5
                  runs each
                </li>
                <li>
                  <Check size={15} aria-hidden="true" />
                  Sources and rival explanations
                </li>
                <li>
                  <Check size={15} aria-hidden="true" />A fact-checked fix pack
                </li>
              </ul>
              <a className="button strong" href="#check">
                Run free check <ArrowRight size={16} />
              </a>
            </article>
            <article className="price-card">
              <span className="plan-name mono">
                Owner <span className="plan-badge">Coming soon</span>
              </span>
              <div className="price">
                $19<span>/ month</span>
              </div>
              <p>Build a habit of being found.</p>
              <ul>
                <li>
                  <Check size={15} aria-hidden="true" />
                  Weekly rechecks and trends
                </li>
                <li>
                  <Check size={15} aria-hidden="true" />
                  Your hosted page and fix packs
                </li>
                <li>
                  <Check size={15} aria-hidden="true" />
                  Review requests and QR card
                </li>
              </ul>
              <ComingSoon plan="Owner" />
            </article>
            <article className="price-card">
              <span className="plan-name mono">
                Agency <span className="plan-badge">Coming soon</span>
              </span>
              <div className="price">
                $79<span>/ month</span>
              </div>
              <p>Clarity for your clients.</p>
              <ul>
                <li>
                  <Check size={15} aria-hidden="true" />
                  Multi-client workspace
                </li>
                <li>
                  <Check size={15} aria-hidden="true" />
                  White-label reports
                </li>
                <li>
                  <Check size={15} aria-hidden="true" />
                  Shared approval workflows
                </li>
              </ul>
              <ComingSoon plan="Agency" />
            </article>
          </div>
        </section>
        <section
          id="faq"
          className="container section split-section"
          data-reveal
        >
          <div className="section-header">
            <p className="eyebrow">Questions</p>
            <h2>Good questions.</h2>
          </div>
          <div className="faq-list">
            {faqs.map(({ question, answer }) => (
              <details className="faq-item" key={question}>
                <summary>
                  {question}
                  <Plus size={20} aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="container final-cta" data-reveal>
          <p className="eyebrow">Your next customer is asking</p>
          <h2>Give AI a reason to say your name.</h2>
          <div className="hero-form">
            <CheckForm id="final-check" />
          </div>
        </section>
      </main>
    </Motion>
  );
}
