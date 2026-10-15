import { describe, expect, it } from "vitest";
import {
  broadQuestions,
  nicheQuestions,
  discoveryCategory,
  expectedAnswers,
  runsPerQuestion,
} from "../src/lib/questions";
import { sampleCheck } from "../src/lib/examples";
describe("customer question tiers", () => {
  it("asks ordinary city-level sweet-shop questions without leaking a target's street or specialty", () => {
    const facts = {
      ...sampleCheck("brew-lane", "test").facts,
      name: "Manohar Dairy",
      city: "Bhopal",
      category: "Traditional Indian sweets and dairy shop",
      address: "Maruti Nandan Complex",
      knownFor: "Traditional sweets prepared on-site",
    };
    const questions = broadQuestions(facts);
    expect(questions).toHaveLength(5);
    expect(questions[0].text).toBe("Best sweet shops in Bhopal");
    expect(
      questions.every((q) => q.kind === "broad" && q.text.includes("Bhopal")),
    ).toBe(true);
    expect(questions.map((q) => q.text).join(" ")).not.toMatch(
      /Manohar|Maruti|on.site|traditional/i,
    );
    expect(new Set(questions.map((q) => q.text)).size).toBe(5);
  });
  it("keeps quick and legacy deep denominators distinct", () => {
    expect(expectedAnswers({ mode: "quick" })).toBe(5);
    expect(runsPerQuestion({ mode: "quick" })).toBe(1);
    expect(expectedAnswers({})).toBe(40);
    expect(runsPerQuestion({})).toBe(5);
    expect(discoveryCategory("Dentist")).toBe("dentists");
  });
  it("uses one natural occasion per optional niche question, without a street or invented business attribute", () => {
    const facts = {
      ...sampleCheck("brew-lane", "test").facts,
      category: "Sweet Shop",
      name: "Manohar Dairy",
      city: "Bhopal",
      address: "Maruti Nandan Complex",
    };
    expect(nicheQuestions(facts)).toEqual([
      { text: "Sweet shops for festival gifting in Bhopal", kind: "niche" },
      { text: "Where to buy fresh mithai in Bhopal", kind: "niche" },
      { text: "Sweet shops for wedding orders in Bhopal", kind: "niche" },
    ]);
    expect(
      nicheQuestions(facts).every((q) => q.text.split(/\s+/).length <= 10),
    ).toBe(true);
  });
});
