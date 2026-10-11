import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GlobeHemisphereWest,
  ChatCircleText,
  Star,
  Code,
  CheckCircle,
  MagnifyingGlass,
  FileText,
  Quotes,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { HeroScene } from "@/components/hero-scene";
import { CheckForm } from "@/components/check-form";
import { Motion } from "@/components/motion";
import { Badge, Dots } from "@/components/ui";
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
      <main id="main">
        <section className="hero container">
          <div className="hero-copy">
            <a href="#honesty" className="announcement" data-enter>
              AI visibility for local businesses <ArrowRight size={14} />
            </a>
            <h1 data-enter>
              Customers ask AI
              {" "}
              <br />
              who to visit.
              {" "}
              <br />
              <span>Does it say you?</span>
            </h1>
            <p className="hero-description" data-enter>
              See when AI recommends your business.
              <br />
              Understand why. Know what to fix.
            </p>
          </div>
          <HeroScene />
          <div className="hero-form" data-enter>
            <CheckForm />
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
              Explore the sample report <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="receipt">
            <div className="receipt-header">
              <span className="traffic" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>brew-lane.visibility</span>
              <Badge label="Sample data" />
            </div>
            <div className="receipt-body">
              <div className="receipt-business">
                <span>BUSINESS</span>
                <strong>Brew Lane Cafe</strong>
                <span>Portland, United States</span>
              </div>
              <div className="receipt-question">
                <span>QUESTION</span>
                <p>“Where can I find a quiet cafe in Portland?”</p>
                <Dots count={3} />
              </div>
              <div className="receipt-result">
                <span>OUTLOOK</span>
                <Badge label="Winnable now" />
              </div>
              <div className="receipt-bottom">
                <CheckCircle size={16} />5 runs. Sources attached. No guesswork.
              </div>
            </div>
          </div>
        </section>
        <section
          id="examples"
          className="container examples-section"
          data-reveal
        >
          <div className="examples-label">
            <span>Meet your next step.</span>
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
            <h2>
              From “am I invisible?”
              <br />
              to “here’s my next move.”
            </h2>
            <p>Three steps. Plain language. You stay in control.</p>
          </div>
          <div className="steps">
            <article>
              <span className="step-icon">
                <MagnifyingGlass size={26} />
              </span>
              <span className="step-number mono">01</span>
              <h3>Find your business.</h3>
              <p>
                Enter your name and city. Check the details we find. Correct
                anything before we go further.
              </p>
            </article>
            <article>
              <span className="step-icon">
                <Quotes size={26} />
              </span>
              <span className="step-number mono">02</span>
              <h3>See what AI says.</h3>
              <p>
                We ask eight questions your customers might ask. Five times
                each. You get answers with sources.
              </p>
            </article>
            <article>
              <span className="step-icon">
                <FileText size={26} />
              </span>
              <span className="step-number mono">03</span>
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
            <h2>
              Don’t just find the gaps.
              <br />
              Close them.
            </h2>
            <p>Your fix pack turns a report into something you can use.</p>
          </div>
          <div className="fix-grid">
            {fixes.map((f, i) => (
              <article className={`fix-feature fix-feature-${i}`} key={f.title}>
                <f.icon size={28} weight="light" />
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <div className="mini-art" aria-hidden="true">
                  {i === 0 ? (
                    <>
                      <span className="mini-domain">brew-lane.cited.page</span>
                      <div className="mini-page">
                        <span>Brew Lane Cafe</span>
                        <span>Quiet seating. Filter coffee.</span>
                        <span>Portland, United States</span>
                      </div>
                    </>
                  ) : i === 1 ? (
                    <>
                      <div className="mini-post">
                        Description <span>Confirmed facts only</span>
                      </div>
                      <div className="mini-post">
                        3 posts <span>Ready to review</span>
                      </div>
                      <div className="mini-post">
                        5 Q&A pairs <span>Plain answers</span>
                      </div>
                    </>
                  ) : i === 2 ? (
                    <>
                      <div className="review-message">
                        Thank you for visiting.
                        <br />
                        Please leave an honest review.
                      </div>
                      <span className="mini-domain">
                        SMS · WhatsApp · Email
                      </span>
                    </>
                  ) : (
                    <pre>
                      {
                        '{\n  "@type": "LocalBusiness",\n  "name": "Brew Lane Cafe",\n  "address": "Portland"\n}'
                      }
                    </pre>
                  )}
                </div>
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
          <ShieldCheck size={32} weight="light" />
          <h2>
            Honest by design.
            <br />
            Useful by default.
          </h2>
          <div className="principles">
            <article>
              <span className="mono">[01]</span>
              <h3>No source, no claim.</h3>
              <p>
                Every finding links to what we read. You can check the evidence
                yourself.
              </p>
            </article>
            <article>
              <span className="mono">[02]</span>
              <h3>Repeat, then report.</h3>
              <p>
                Five runs, shown as five dots. We show variation instead of
                dressing it up as certainty.
              </p>
            </article>
            <article>
              <span className="mono">[03]</span>
              <h3>Your facts. Your approval.</h3>
              <p>
                No invented hours or awards. No automatic publishing. Every fix
                waits for your approval.
              </p>
            </article>
          </div>
          <p className="honesty-note">
            An estimate of AI visibility, not a promise of ranking. Every
            question gets a realistic outlook.
          </p>
        </section>
        <section id="pricing" className="container section" data-reveal>
          <div className="section-header">
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
              <div className="price">$0</div>
              <p>Find your starting point.</p>
              <ul>
                <li>8 customer questions, 5 runs each</li>
                <li>Sources and rival explanations</li>
                <li>A fact-checked fix pack</li>
                <li>Try saved examples anytime</li>
              </ul>
              <a className="button strong" href="#check">
                Run free check <ArrowUpRight size={16} />
              </a>
            </article>
            <article className="price-card">
              <span className="mono">Owner</span>
              <div className="price">
                $19<span>/ month</span>
              </div>
              <p>Build a habit of being found.</p>
              <ul>
                <li>Everything in your free check</li>
                <li>Weekly rechecks and trends</li>
                <li>One hosted business page</li>
                <li>Review requests and QR card</li>
              </ul>
              <span className="availability mono">
                Planned pricing. No payments today.
              </span>
            </article>
            <article className="price-card">
              <span className="mono">Agency</span>
              <div className="price">
                $79<span>/ month</span>
              </div>
              <p>Clarity for your clients.</p>
              <ul>
                <li>Planned multi-client workspace</li>
                <li>Client switching</li>
                <li>White-label reports</li>
                <li>Shared approval workflows</li>
              </ul>
              <span className="availability mono">
                Post-hackathon. Not available yet.
              </span>
            </article>
          </div>
        </section>
        <section className="container final-cta" data-reveal>
          <p>Your next customer is asking.</p>
          <h2>
            Give AI a reason
            <br />
            to say your name.
          </h2>
          <a className="text-link" href="#check">
            Check your business <ArrowUpRight size={22} />
          </a>
        </section>
      </main>
    </Motion>
  );
}
