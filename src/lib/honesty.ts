import { z } from "zod";
import type { Facts, Finding, Source, Status, Run } from "./types";
const webURL = z
  .url()
  .refine((url) => /^https?:\/\//.test(url), "Use an HTTP or HTTPS URL.");
export const factsSchema = z
  .object({
    name: z.string().trim().min(2).max(160),
    city: z.string().trim().min(2).max(120),
    country: z.string().max(120),
    category: z.string().min(2).max(120),
    address: z.string().max(300),
    hours: z.string().max(300),
    knownFor: z.string().max(500),
    website: z.union([z.literal(""), webURL]),
    reviewUrl: z.union([z.literal(""), webURL]),
  })
  .strict();
export function classify(
  runs: Run[],
  kind: "broad" | "niche",
  hasSources: boolean,
): Status {
  if (!hasSources || runs.length !== 5) return "Needs your check";
  const count = runs.filter((r) => r.mentioned).length;
  if (count >= 2) return "Winnable now";
  if (count === 1 || kind === "niche") return "In about 3 months";
  return "Unlikely";
}
export function validFindings(findings: Finding[], sources: Source[]) {
  const ids = new Set(
    sources
      .filter((s) => /^https?:\/\//.test(s.url) && s.excerpt && s.fetchedAt)
      .map((s) => s.id),
  );
  return findings.filter(
    (f) => f.citationIds.length > 0 && f.citationIds.every((id) => ids.has(id)),
  );
}
export function mentioned(name: string, recommendations: string[]) {
  const normalize = (s: string) =>
    s
      .normalize("NFKC")
      .toLocaleLowerCase()
      .replace(/[^\p{L}\p{N}]/gu, "");
  return recommendations.some((b) => normalize(b) === normalize(name));
}
// Drafts are assembled from exact fact values. Editing is constrained to those values
// and an explicit set of non-factual instructions, preventing silent invented claims.
export const SAFE_COPY = [
  "Please leave an honest review of your visit.",
  "Your feedback helps future visitors.",
  "Thank you for visiting.",
  "Tell us about your experience.",
  "Share your experience here:",
  "Visit our website for details.",
  "Contact the business directly to confirm current details.",
];
export function verifyFactLock(body: string, facts: Facts): string[] {
  let remaining = body;
  for (const value of [...Object.values(facts), ...SAFE_COPY]
    .filter(Boolean)
    .sort((a, b) => b.length - a.length))
    remaining = remaining.split(value).join("");
  remaining = remaining
    .replace(
      /\b(Name|City|Country|Category|Address|Hours|Known for|Website|Review link|Description|Post [1-3]|Question [1-5]|Answer|SMS|WhatsApp|Email|Subject|Review request|Visit|Location|Opening hours|What are you known for|Where are you located|When are you open|How can I find out more|How do I leave a review)\b/g,
      "",
    )
    .replace(/[\s\p{P}\p{S}]/gu, "");
  return remaining
    ? [
        "This edit contains text outside your confirmed facts. Confirm the new facts first, or remove the unsupported text.",
      ]
    : [];
}
export function buildFixes(facts: Facts, id: () => string) {
  const lines = Object.entries(facts)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `${({ knownFor: "Known for", reviewUrl: "Review link" } as Record<string, string>)[k] || k[0].toUpperCase() + k.slice(1)}: ${v}`,
    );
  const description = [facts.name, facts.category, facts.city, facts.knownFor]
    .filter(Boolean)
    .join(". ");
  return [
    {
      type: "page" as const,
      title: "Your AI-readable page",
      body: lines.filter((l) => !l.startsWith("Review link")).join("\n"),
      factKeys: Object.keys(facts).filter(
        (k) => facts[k as keyof Facts] && k !== "reviewUrl",
      ) as (keyof Facts)[],
    },
    {
      type: "profile" as const,
      title: "Google Business Profile pack",
      body: `Description: ${description}\n\nPost 1: ${facts.knownFor || facts.category}\nPost 2: ${facts.address || facts.city}\nPost 3: ${facts.hours || "Contact the business directly to confirm current details."}\n\nQuestion 1: Where are you located?\nAnswer: ${facts.address || facts.city}\nQuestion 2: When are you open?\nAnswer: ${facts.hours || "Contact the business directly to confirm current details."}\nQuestion 3: What are you known for?\nAnswer: ${facts.knownFor || facts.category}\nQuestion 4: How can I find out more?\nAnswer: ${facts.website || "Contact the business directly to confirm current details."}\nQuestion 5: How do I leave a review?\nAnswer: ${facts.reviewUrl || "Contact the business directly to confirm current details."}`,
      factKeys: Object.keys(facts).filter(
        (k) => facts[k as keyof Facts],
      ) as (keyof Facts)[],
    },
    {
      type: "reviews" as const,
      title: "Review requests + QR card",
      body: `SMS: Thank you for visiting. Please leave an honest review of your visit. ${facts.reviewUrl}\n\nWhatsApp: Tell us about your experience. Your feedback helps future visitors. ${facts.reviewUrl}\n\nEmail:\nSubject: ${facts.name}. Review request.\nThank you for visiting. Please leave an honest review of your visit. Share your experience here: ${facts.reviewUrl}`,
      factKeys: ["name", "reviewUrl"] as (keyof Facts)[],
    },
    {
      type: "schema" as const,
      title: "Website schema markup",
      body: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: facts.name,
          address: facts.address || facts.city,
          ...(facts.website ? { url: facts.website } : {}),
          description: [facts.category, facts.knownFor]
            .filter(Boolean)
            .join(". "),
          ...(facts.hours ? { openingHours: facts.hours } : {}),
        },
        null,
        2,
      ),
      factKeys: [
        "name",
        "address",
        "city",
        "category",
        "knownFor",
        "website",
        "hours",
      ] as (keyof Facts)[],
    },
  ].map((f) => ({ ...f, id: id(), status: "draft" as const, flags: [] }));
}
