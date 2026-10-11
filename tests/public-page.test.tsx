import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { sampleCheck } from "../src/lib/examples";
import type { Check } from "../src/lib/types";

const { getRecord } = vi.hoisted(() => ({ getRecord: vi.fn() }));
vi.mock("@/lib/store", () => ({ getRecord }));
vi.mock("next/navigation", () => ({ notFound: () => { throw new Error("Not found"); } }));
import Page, { generateMetadata } from "../src/app/p/[slug]/page";

const slug = "cited-test-page";
const props = { params: Promise.resolve({ slug }) };
function approved(sample: boolean): Check {
  const check = sampleCheck("brew-lane", "test-owner");
  check.sample = sample;
  const fix = check.fixes.find((f) => f.type === "page")!;
  Object.assign(fix, { slug, status: "approved", approvedAt: new Date().toISOString() });
  return check;
}
describe("approved public page", () => {
  beforeEach(() => getRecord.mockReset());
  it("server-renders fact-derived structured data and safely escapes script content", async () => {
    const check = approved(false);
    check.facts.name = "Test Lab </script><script>alert(1)</script>";
    check.facts.hours = "";
    getRecord.mockResolvedValue(check);
    const html = renderToStaticMarkup(await Page(props));
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)]
      .map((match) => JSON.parse(match[1]));
    expect(schemas.map((s) => s["@type"])).toEqual(["LocalBusiness", "FAQPage"]);
    expect(schemas[0].name).toBe(check.facts.name);
    expect(schemas[0].address).toBe(check.facts.address);
    expect(schemas[0]).not.toHaveProperty("openingHours");
    expect(schemas[1].mainEntity).toHaveLength(2);
    expect(html).not.toContain("</script><script>alert(1)</script>");
  });
  it("keeps fictional pages labeled, noindex and without business structured data", async () => {
    getRecord.mockResolvedValue(approved(true));
    const html = renderToStaticMarkup(await Page(props));
    expect(html).toContain("Fictional business. Demonstration page only.");
    expect(html).not.toContain("application/ld+json");
    expect((await generateMetadata(props)).robots).toEqual({ index: false, follow: false });
  });
  it("does not render an unapproved snapshot", async () => {
    const check = approved(false);
    check.fixes.find((f) => f.type === "page")!.status = "draft";
    getRecord.mockResolvedValue(check);
    await expect(Page(props)).rejects.toThrow("Not found");
  });
});
