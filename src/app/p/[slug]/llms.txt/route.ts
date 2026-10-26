import { pageData } from "@/lib/public-page";

// Plain-text business profile for AI tools, built only from owner-approved
// facts and the approved page text.
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const check = await pageData(slug);
  const f = check.facts,
    fix = check.fixes.find((x) => x.slug === slug)!;
  const line = (label: string, value: string) =>
    value ? `- ${label}: ${value}\n` : "";
  const body = `# ${f.name}

> ${f.knownFor || `${f.category} in ${f.city}`}
${check.sample ? "\nFictional sample business for demonstration only.\n" : ""}
## Facts confirmed by the owner (${fix.approvedAt?.slice(0, 10)})

${line("Category", f.category)}${line("City", [f.city, f.country].filter(Boolean).join(", "))}${line("Address", f.address)}${line("Opening hours", f.hours)}${line("Website", f.website)}${line("Known for", f.knownFor)}
## Page text

${fix.body}

Contact the business to confirm current details.
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      ...(check.sample ? { "X-Robots-Tag": "noindex" } : {}),
    },
  });
}
