import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRecord } from "@/lib/store";
import type { Check } from "@/lib/types";
import { Badge } from "@/components/ui";
async function pageData(slug: string) {
  const check = await getRecord<Check>("pages", slug);
  if (
    !check ||
    !check.fixes.some((f) => f.slug === slug && f.status === "approved")
  )
    notFound();
  return check;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const check = await pageData(slug);
  return {
    title: check.facts.name,
    description: check.facts.knownFor,
    robots: check.sample ? { index: false, follow: false } : undefined,
  };
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
  return (
    <main id="main" className="app-container public-business">
      {check.sample && (
        <>
          <Badge label="Sample data" />
          <p className="notice sample">
            Fictional business. Demonstration page only.
          </p>
        </>
      )}
      <p className="mono" style={{ fontSize: 12 }}>
        {facts.category} · {facts.city}
      </p>
      <h1>{facts.name}</h1>
      <p>{facts.knownFor}</p>
      <section className="panel">
        <h2>Business details.</h2>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            fontFamily: "var(--font-inter)",
            fontSize: 15,
            margin: 0,
            lineHeight: 2,
            overflowWrap: "anywhere",
          }}
        >
          {fix.body}
        </pre>
      </section>
      {facts.website && (
        <a
          href={facts.website}
          className="button"
          style={{ marginTop: 24 }}
          rel="noopener noreferrer"
        >
          Visit website
        </a>
      )}
      <section className="report-section">
        <h2>Common questions.</h2>
        {faq.map((f) => (
          <details key={f.question}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </section>
      <p className="notice">
        Details approved by the owner on{" "}
        {new Date(fix.approvedAt!).toLocaleDateString()}. Contact the business
        to confirm current details.
      </p>
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
