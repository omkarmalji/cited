import { Badge, Citation, Dots, Wordmark } from "@/components/ui";
import { METHOD } from "@/lib/types";
export const metadata = { title: "Design system", robots: { index: false } };
export default function Design() {
  return (
    <main id="main" className="app-container">
      <Wordmark />
      <h1>Black velvet. One violet.</h1>
      <p>
        Cited design system. Pure black canvas, hairline borders, ghost
        controls, readable receipts.
      </p>
      <section className="panel">
        <h2>Color tokens.</h2>
        <div className="swatches">
          {[
            ["Void black", "#000000"],
            ["Graphite hairline", "#292d30"],
            ["Surface lift", "#0b0e14"],
            ["White", "#ffffff"],
            ["Bone white", "#f0f0f0"],
            ["Ash gray", "#a1a4a5"],
            ["Smoke gray", "#abafb4"],
            ["Iron", "#6e727a"],
            ["Charcoal", "#464a4d"],
            ["Iris violet", "#9281f7"],
            ["Iris glow", "#baa7ff"],
            ["Signal blue", "#3b9eff"],
            ["Sky blue", "#70b8ff"],
            ["Pulse green", "#3ad389"],
            ["Alarm red", "#ff9592"],
            ["Crimson", "#ff6465"],
            ["Amber", "#ffca16"],
          ].map(([name, color]) => (
            <div className="swatch" key={name}>
              <div className="swatch-color" style={{ background: color }} />
              <div>{name}</div>
              <span
                className="mono"
                style={{ fontSize: 12, color: "var(--color-ash-gray)" }}
              >
                {color}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="panel">
        <h2>Typography.</h2>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px,6vw,77px)",
            lineHeight: 1.1,
            color: "#fff",
          }}
        >
          Does it say you?
        </p>
        <h2 style={{ fontSize: 56, marginTop: 32 }}>Inter 400</h2>
        <p>Body 16px / 1.5. Small 14px / 1.43. Caption 12px / 1.33.</p>
        <p className="mono" style={{ marginTop: 16 }}>
          JetBrains Mono · 2 of 5 · source [01]
        </p>
      </section>
      <section className="panel">
        <h2>Spacing and radii.</h2>
        <p className="mono" style={{ fontSize: 12 }}>
          4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · 40 · 48 · 64 · 80 · 96 · 104 ·
          144
        </p>
        <div className="action-row">
          {[6, 16, 24].map((r) => (
            <div
              key={r}
              style={{
                border: "1px solid #292d30",
                padding: 24,
                borderRadius: r,
              }}
            >
              {r}px
            </div>
          ))}
        </div>
      </section>
      <section className="panel">
        <h2>Controls.</h2>
        <div className="action-row">
          <button className="button">Ghost button</button>
          <button className="button strong">Strong button</button>
          <button className="button" disabled>
            Disabled
          </button>
          <a className="announcement" href="#statuses">
            Announcement pill ›
          </a>
        </div>
        <label htmlFor="design-input" style={{ marginTop: 32 }}>
          Business name
        </label>
        <input id="design-input" placeholder="Brew Lane Cafe" />
      </section>
      <section id="statuses" className="panel">
        <h2>Status, scores and sources.</h2>
        <div className="action-row">
          {(
            [
              "Winnable now",
              "In about 3 months",
              "Unlikely",
              "Needs your check",
              "Approved",
              "Sample data",
            ] as const
          ).map((label) => (
            <Badge key={label} label={label} />
          ))}
        </div>
        <div className="action-row">
          {[0, 2, 5].map((count) => (
            <Dots key={count} count={count} />
          ))}
        </div>
        <div className="action-row">
          <Citation
            source={{
              id: 1,
              url: "https://schema.org/LocalBusiness",
              title: "LocalBusiness schema",
              domain: "schema.org",
              excerpt: "",
              fetchedAt: "",
            }}
          />
        </div>
      </section>
      <article className="question-row" style={{ marginTop: 32 }}>
        <h3>Where can I find a quiet cafe in Portland?</h3>
        <div className="question-data">
          <Dots count={2} />
          <Badge label="Winnable now" />
        </div>
      </article>
      <article className="panel fix-item">
        <h3>Your AI-readable page</h3>
        <p>Confirmed details. Edit, then approve.</p>
        <div className="action-row">
          <button className="button">Edit</button>
          <button className="button strong">Approve</button>
        </div>
      </article>
      <div className="receipt" style={{ marginTop: 32 }}>
        <div className="receipt-header">
          <span className="traffic">
            <i />
            <i />
            <i />
          </span>
          visibility.receipt
        </div>
        <div className="receipt-body">
          <p>
            business: <span style={{ color: "#f0f0f0" }}>Brew Lane Cafe</span>
          </p>
          <p>
            source: <span style={{ color: "#9281f7" }}>[01]</span>
          </p>
          <p>
            mentioned: <span style={{ color: "#3ad389" }}>2 of 5 runs</span>
          </p>
        </div>
      </div>
      <p className="notice mono">{METHOD}</p>
    </main>
  );
}
