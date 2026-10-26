import type { Metadata } from "next";
import { pageData } from "@/lib/public-page";
import { Badge } from "@/components/ui";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const check = await pageData(slug);
  return {
    title: `${check.facts.name} · ${check.facts.city}`,
    description:
      check.facts.knownFor || `${check.facts.category} in ${check.facts.city}`,
    robots: check.sample ? { index: false, follow: false } : undefined,
    alternates: {
      types: { "text/markdown": `/p/${slug}/llms.txt` },
    },
    other: { "is-agentic-site-type": "business" },
  };
}
// The approved draft is "Label: value" lines; show those as a fact list and
// any other line as plain text, exactly as the owner approved it.
function approvedLines(body: string) {
  return body
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const m = line.match(/^([^:]{2,40}):\s*(.+)$/);
      return m ? { label: m[1], value: m[2] } : { label: "", value: line };
    });
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const check = await pageData(slug),
    facts = check.facts,
    fix = check.fixes.find((f) => f.slug === slug)!;
  const faq = [
    { question: "Where are you located?", answer: facts.address || facts.city },
    { question: "When are you open?", answer: facts.hours },
    { question: "What are you known for?", answer: facts.knownFor },
  ].filter((f) => f.answer);
  const local = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: facts.name,
    address: facts.address || facts.city,
    description: facts.knownFor,
    ...(facts.website ? { url: facts.website } : {}),
    ...(facts.hours ? { openingHours: facts.hours } : {}),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  const lines = approvedLines(fix.body);
  return (
    <main id="main" className="public-business">
      {/* A business's own page, not a Cited marketing page. */}
      <style>{".nav,.footer{display:none}"}</style>
      {check.sample && (
        <div className="public-sample">
          <Badge label="Sample data" />
          <p className="notice sample">
            Fictional business. Demonstration page only.
          </p>
        </div>
      )}
      <header className="public-header">
        <p className="public-kind">
          {facts.category} · {facts.city}
          {facts.country ? `, ${facts.country}` : ""}
        </p>
        <h1>{facts.name}</h1>
        {facts.knownFor && <p className="public-tagline">{facts.knownFor}</p>}
        <p className="public-verified">
          <span aria-hidden="true">✓</span> Details confirmed by the owner on{" "}
          {new Date(fix.approvedAt!).toLocaleDateString("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        {facts.website && (
          <a
            href={facts.website}
            className="button strong"
            rel="noopener noreferrer"
          >
            Visit website
          </a>
        )}
      </header>
      <section className="public-card" aria-labelledby="details-title">
        <h2 id="details-title">Business details</h2>
        <dl>
          {lines.map((l, i) =>
            l.label ? (
              <div key={i}>
                <dt>{l.label}</dt>
                <dd>{l.value}</dd>
              </div>
            ) : (
              <p key={i}>{l.value}</p>
            ),
          )}
        </dl>
      </section>
      {faq.length > 0 && (
        <section className="public-card" aria-labelledby="faq-title">
          <h2 id="faq-title">Common questions</h2>
          {faq.map((f) => (
            <div className="public-faq" key={f.question}>
              <h3>{f.question}</h3>
              <p>{f.answer}</p>
            </div>
          ))}
        </section>
      )}
      <footer className="public-footer">
        <p>
          Please contact {facts.name} to confirm current details. This page is
          written for people and for AI assistants.{" "}
          <a href={`/p/${slug}/llms.txt`}>AI summary</a>
        </p>
        <p>
          Made with <a href="/">Cited</a>, owner-approved and fact-checked.
        </p>
      </footer>
      {!check.sample && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(local).replace(/</g, "\\u003c"),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
            }}
          />
        </>
      )}
    </main>
  );
}
