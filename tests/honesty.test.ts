import { describe, it, expect } from "vitest";
import {
  classify,
  mentioned,
  validFindings,
  verifyFactLock,
  buildFixes,
} from "../src/lib/honesty";
import { sampleCheck } from "../src/lib/examples";
describe("honest visibility", () => {
  it("requires five runs before assigning an outlook", () => {
    const q = sampleCheck("brew-lane", "test").questions[0];
    expect(classify(q.runs.slice(0, 4), "broad", true)).toBe(
      "Needs your check",
    );
    expect(classify(q.runs, "broad", true)).toBe("Unlikely");
    expect(classify(q.runs, "niche", true)).toBe("In about 3 months");
    expect(classify(q.runs, "niche", false)).toBe("Needs your check");
  });
  it("matches recommended identities rather than incidental prose", () => {
    expect(mentioned("Brew Lane Cafe", ["Brew Lane Cafe"])).toBe(true);
    expect(mentioned("Brew Lane", ["Brew Lane Cafe"])).toBe(false);
    expect(mentioned("Café Lumière", ["CAFÉ LUMIÈRE"])).toBe(true);
  });
  it("rejects uncited, nonexistent and unfetched evidence", () => {
    const check = sampleCheck("brew-lane", "test");
    expect(
      validFindings(
        [
          { rival: "A", body: "B", citationIds: [] },
          { rival: "A", body: "B", citationIds: [999] },
          { rival: "A", body: "B", citationIds: [1] },
        ],
        check.sources,
      ),
    ).toHaveLength(1);
    expect(
      validFindings(
        check.findings,
        check.sources.map((s) => ({ ...s, fetchedAt: "" })),
      ),
    ).toHaveLength(0);
  });
  it("flags invented hours, awards, reviews and prices", () => {
    const { facts } = sampleCheck("brew-lane", "test");
    for (const content of [
      "Open 24 hours",
      "Award-winning coffee",
      "Five-star reviews",
      "Coffee costs $2",
    ])
      expect(verifyFactLock(content, facts)).not.toHaveLength(0);
    expect(
      verifyFactLock(
        "Brew Lane Cafe. Quiet seating, filter coffee, and house-baked pastries.",
        facts,
      ),
    ).toHaveLength(0);
  });
  it("drafts all packs exclusively from facts and allowed instructions", () => {
    for (const id of [
      "brew-lane",
      "atelier-moss",
      "spoke-studio",
      "stillwater",
    ]) {
      const { facts } = sampleCheck(id, "test");
      const fixes = buildFixes(facts, () => id);
      expect(fixes).toHaveLength(4);
      for (const fix of fixes.filter((f) => f.type !== "schema"))
        expect(verifyFactLock(fix.body, facts)).toEqual([]);
      expect(
        JSON.parse(fixes.find((f) => f.type === "schema")!.body).name,
      ).toBe(facts.name);
    }
  });
  it("zero-mention reports keep forty answers and niche opportunities", () => {
    const c = sampleCheck("spoke-studio", "test");
    expect(c.questions).toHaveLength(8);
    expect(c.questions.flatMap((q) => q.runs)).toHaveLength(40);
    expect(
      c.questions.flatMap((q) => q.runs).filter((r) => r.mentioned),
    ).toHaveLength(0);
    expect(
      c.questions.filter((q) => q.status === "In about 3 months"),
    ).toHaveLength(5);
  });
});
