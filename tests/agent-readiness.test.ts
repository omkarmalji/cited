import { describe, expect, it } from "vitest";
import {
  analyzeSite,
  assertPublicHost,
  normalizeUrl,
  robotsBlocks,
  schemaTypes,
  visibleText,
} from "../src/lib/agent-readiness";

const facts = {
  name: "Brew Lane Cafe",
  city: "Portland",
  address: "24 Riverside Walk, Portland",
  hours: "Monday to Saturday, 8am to 6pm",
};
const goodHtml = `<html><head><title>Brew Lane Cafe</title>
<meta name="description" content="Quiet cafe with filter coffee in Portland.">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"CafeOrCoffeeShop","name":"Brew Lane Cafe"}</script>
</head><body><h1>Brew Lane Cafe</h1><p>${"Filter coffee and pastries at 24 Riverside Walk. ".repeat(12)}</p>
<p>Open Monday to Saturday, 8am to 6pm.</p><script>var x = "ignored text";</script></body></html>`;

describe("agent readiness", () => {
  it("reads robots.txt groups for AI agents", () => {
    expect(robotsBlocks("User-agent: GPTBot\nDisallow: /", "GPTBot")).toBe(
      true,
    );
    expect(robotsBlocks("User-agent: *\nDisallow: /admin", "GPTBot")).toBe(
      false,
    );
    expect(robotsBlocks("User-agent: *\nDisallow: /", "ClaudeBot")).toBe(true);
    expect(
      robotsBlocks(
        "User-agent: *\nDisallow: /\n\nUser-agent: ClaudeBot\nAllow: /",
        "ClaudeBot",
      ),
    ).toBe(false);
  });
  it("finds schema types and strips scripts from visible text", () => {
    expect(schemaTypes(goodHtml)).toContain("CafeOrCoffeeShop");
    expect(visibleText(goodHtml)).not.toContain("ignored text");
  });
  it("passes a readable, open site and flags a blocked, empty one", () => {
    const good = analyzeSite({
      homepage: { status: 200, text: goodHtml, https: true },
      robots: "User-agent: *\nAllow: /",
      llms: true,
      sitemap: true,
      facts,
    });
    expect(good.every((i) => i.pass)).toBe(true);
    const bad = analyzeSite({
      homepage: {
        status: 200,
        text: "<html><body><div id=root></div></body></html>",
        https: false,
      },
      robots: "User-agent: GPTBot\nDisallow: /",
      llms: false,
      sitemap: false,
      facts,
    });
    const failed = bad.filter((i) => !i.pass).map((i) => i.id);
    expect(failed).toEqual(
      expect.arrayContaining([
        "reachable",
        "crawlers",
        "readable",
        "schema",
        "llms",
        "sitemap",
      ]),
    );
  });
  it("normalizes URLs and refuses private hosts", async () => {
    expect(normalizeUrl("example.com")?.toString()).toBe(
      "https://example.com/",
    );
    expect(normalizeUrl("ftp://example.com")).toBeNull();
    await expect(assertPublicHost("localhost")).rejects.toThrow();
    await expect(assertPublicHost("127.0.0.1")).rejects.toThrow();
    await expect(assertPublicHost("192.168.1.5")).rejects.toThrow();
  });
});
