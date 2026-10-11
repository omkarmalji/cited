import Link from "next/link";
import {
  ArrowRight,
  Check,
  Plus,
  ArrowUpRight,
  GlobeHemisphereWest,
  ChatCircleText,
  Star,
  Code,
  MagnifyingGlass,
  FileText,
  Quotes,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { HeroScene } from "@/components/hero-scene";
import { CheckForm } from "@/components/check-form";
import { Motion } from "@/components/motion";
import { Badge } from "@/components/ui";
import { SampleReport } from "@/components/sample-report";
import { ComingSoon } from "@/components/coming-soon";
import { examples } from "@/lib/examples";
const fixes = [
  {
    icon: GlobeHemisphereWest,
    title: "A page AI can read",
    text: "Your confirmed details. One clear, hosted page. Structured for people and assistants.",
    detail: "LocalBusiness + FAQ schema",
    type: "page",
  },
  {
    icon: ChatCircleText,
    title: "A better business profile",
    text: "A description, three posts, and five Q&A pairs. Ready for your Google Business Profile.",
    detail: "Written from your facts",
    type: "profile",
  },
  {
    icon: Star,
    title: "More honest reviews",
    text: "Simple review requests for SMS, WhatsApp and email, with a printable QR card.",
    detail: "No incentives. No fake praise.",
    type: "reviews",
  },
  {
    icon: Code,
    title: "The right website signals",
    text: "Schema markup with plain-language instructions. Help assistants understand your own site.",
    detail: "Copy after you approve",
    type: "schema",
  },
];
export default function Home() {
  return (
    <Motion>
      <main id="main" className="landing-page">
        <section className="hero">
          <HeroScene />
          <div className="container hero-content">
            <div className="hero-copy">
              <a href="#how-it-works" className="announcement" data-enter>
                AI visibility for local businesses <ArrowRight size={14} />
              </a>
              <h1 data-enter>
                Customers ask AI <br />
                who to visit. <br />
                <span>Does it say you?</span>
              </h1>
              <p className="hero-description" data-enter>
                See when AI recommends your business.
                <br />
                Understand why. Know what to fix.
              </p>
            </div>
            <div className="hero-preview" aria-hidden="true" inert>
              <SampleReport />
            </div>
            <div className="hero-form" data-enter>
              <CheckForm />
            </div>
          </div>
        </section>
        <section
          className="social-proof"
          aria-label="Community preview"
          data-reveal
        >
          <div className="container social-proof-inner">
            <div>
              <p>Trusted by local businesses in 40+ cities</p>
              <span className="placeholder-note mono">
                Preview metrics, not live totals
              </span>
            </div>
            {/* TODO: Replace all placeholder metrics, including the 40+ cities claim, with verified usage data before launch. */}
            <dl className="proof-stats">
              <div>
                <dt>Businesses checked</dt>
                <dd>
                  1,200<span>+</span>
                </dd>
              </div>
              <div>
                <dt>Questions asked</dt>
                <dd>
                  9,600<span>+</span>
                </dd>
              </div>
              <div>
                <dt>Average fixes found</dt>
                <dd>4.8</dd>
              </div>
            </dl>
          </div>
        </section>
        <section
          className="container proof-section"
          aria-label="Sample visibility report"
          data-reveal
        >
          <div className="proof-intro">
            <p className="eyebrow">A little clarity goes a long way</p>
            <h2>
              You deserve more
              <br />
              than a mystery score.
            </h2>
            <p>
              A real question. Five answers. Every source.
              <br />
              See exactly where you stand.
            </p>
            <Link className="text-link" href="/examples/brew-lane">
              Explore the sample report <ArrowRight size={18} />
            </Link>
          </div>
          <SampleReport />
        </section>
        <section
          id="examples"
          className="container examples-section"
          data-reveal
        >
          <div className="examples-label">
            <span className="eyebrow">Meet your next step.</span>
            <p>Try a saved example. No keys, no waiting.</p>
            <Badge label="Sample data" />
          </div>
          <div className="example-grid">
            {examples.map((e) => (
              <Link href={`/examples/${e.id}`} key={e.id} className="example">
                <span>{e.category}</span>
                <strong>
                  {e.name} <ArrowUpRight size={16} />
                </strong>
                <span>
                  {e.city}, {e.country}
                </span>
              </Link>
            ))}
          </div>
        </section>
        <section id="how-it-works" className="container section" data-reveal>
          <div className="section-header">
            <p className="eyebrow">How it works</p>
            <h2>
              From “am I invisible?”
              <br />
              to “here’s my next move.”
            </h2>
            <p>Three steps. Plain language. You stay in control.</p>
          </div>
          <div className="steps">
            <article>
              <div className="numbered-icon">
                <span className="step-icon">
                  <MagnifyingGlass size={26} />
                </span>
                <span className="step-number mono">01</span>
              </div>
              <h3>Find your business.</h3>
              <p>
                Enter your name and city. Check the details we find. Correct
                anything before we go further.
              </p>
            </article>
            <article>
              <div className="numbered-icon">
                <span className="step-icon">
                  <Quotes size={26} />
                </span>
                <span className="step-number mono">02</span>
              </div>
              <h3>See what AI says.</h3>
              <p>
                We ask eight questions your customers might ask. Five times
                each. You get answers with sources.
              </p>
            </article>
            <article>
              <div className="numbered-icon">
                <span className="step-icon">
                  <FileText size={26} />
                </span>
                <span className="step-number mono">03</span>
              </div>
              <h3>Approve your next move.</h3>
              <p>
                Get a practical fix pack built from your facts. Review, edit,
                then approve. Nothing goes out without you.
              </p>
            </article>
          </div>
        </section>
        <section id="fix-pack" className="container section" data-reveal>
          <div className="section-header">
            <p className="eyebrow">The fix pack</p>
            <h2>
              Don’t just find the gaps.
              <br />
              Close them.
            </h2>
            <p>Your fix pack turns a report into something you can use.</p>
          </div>
          <div className="fix-grid">
            {fixes.map((f) => (
              <article className="fix-feature" key={f.title}>
                <span className="feature-icon">
                  <f.icon size={20} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <span className="feature-detail mono">{f.detail}</span>
              </article>
            ))}
          </div>
        </section>
        <section
          id="honesty"
          className="container section honesty-section"
          data-reveal
        >
          <p className="eyebrow">Our principles</p>
          <h2>
            Honest by design.
            <br />
            Useful by default.
          </h2>
          <div className="principles">
            <article>
              <div className="numbered-icon">
                <span className="step-icon">
                  <FileText size={24} />
                </span>
                <span className="step-number mono">01</span>
              </div>
              <h3>No source, no claim.</h3>
              <p>
                Every finding links to what we read. You can check the evidence
                yourself.
              </p>
            </article>
            <article>
              <div className="numbered-icon">
                <span className="step-icon">
                  <Quotes size={24} />
                </span>
                <span className="step-number mono">02</span>
              </div>
              <h3>Repeat, then report.</h3>
              <p>
                Five runs, shown as five dots. We show variation instead of
                dressing it up as certainty.
              </p>
            </article>
            <article>
              <div className="numbered-icon">
                <span className="step-icon">
                  <ShieldCheck size={24} />
                </span>
                <span className="step-number mono">03</span>
              </div>
              <h3>Your facts. Your approval.</h3>
              <p>
                No invented hours or awards. No automatic publishing. Every fix
                waits for your approval.
              </p>
            </article>
          </div>
        </section>
        <section id="pricing" className="container section" data-reveal>
          <div className="section-header">
            <p className="eyebrow">Pricing</p>
            <h2>
              Small business.
              <br />
              Small bill.
            </h2>
            <p>Start with clarity. Grow at your own pace.</p>
          </div>
          <div className="pricing-grid">
            <article className="price-card">
              <span className="mono">Free check</span>
              <div className="price">
                $0<span>forever</span>
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
                <li>
                  <Check size={15} aria-hidden="true" />
                  Try saved examples anytime
                </li>
              </ul>
              <a className="button strong" href="#check">
                Run free check <ArrowRight size={16} />
              </a>
            </article>
            <article className="price-card popular">
              <div className="plan-heading">
                <span className="plan-name mono">
                  Owner <span className="plan-badge">Coming soon</span>
                </span>
                <span className="plan-badge popular-badge">Most popular</span>
              </div>
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
                  Planned multi-client workspace
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
        <section id="faq" className="container section faq-section" data-reveal>
          <div className="section-header">
            <p className="eyebrow">A few good questions</p>
            <h2>Clarity starts here.</h2>
          </div>
          <div className="faq-list">
            {[
              {
                question: "How accurate is an AI visibility check?",
                answer:
                  "An estimate of AI visibility, not a promise of ranking. Every question gets a realistic outlook. Five runs show how often your business appears, and linked sources let you check the evidence. Results can vary as models and public information change.",
              },
              {
                question: "Which AI assistants do you check?",
                answer:
                  "Cited pairs NVIDIA Nemotron with fresh web search through Tavily to explore the questions your customers ask. This gives you source-backed answers and practical next steps. It is a transparent simulation of AI recommendations, rather than a live test of ChatGPT, Claude, or Gemini.",
              },
              {
                question: "How does scoring work?",
                answer:
                  "We ask eight customer questions five times each. Your report counts how many of those 40 answers recommend your business. Each question also shows its five-run result, sources, rival explanations, and realistic outlook, so you can see what sits behind the total.",
              },
              {
                question: "What happens to my business data?",
                answer:
                  "We store the business details, confirmed facts, sources, answers, and drafts needed for your report. Live checks send relevant facts and public web content to Nebius and Tavily. Reports stay in your browser session unless you choose to save them to an account. A hosted page becomes public only after your approval. Do not enter private customer or sensitive information.",
              },
              {
                question: "What is included in the fix pack?",
                answer:
                  "A hosted AI-readable page, a Google Business Profile description with posts and Q&A, honest review requests with a printable QR card, and website schema with plain-language instructions. Everything is drafted from your confirmed facts. You can review, edit, and approve each fix.",
              },
              {
                question: "Is the free check really free?",
                answer:
                  "Yes. Your starting check and saved examples are free, with no signup or payment required. Owner and Agency are planned tiers and are coming soon. There is no billing flow today.",
              },
            ].map(({ question, answer }) => (
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
          <p className="eyebrow">Your next customer is asking.</p>
          <h2>
            Give AI a reason
            <br />
            to say your name.
          </h2>
          <div className="hero-form">
            <CheckForm id="final-check" />
          </div>
        </section>
      </main>
    </Motion>
  );
}
