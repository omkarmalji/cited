import { beforeEach, describe, expect, it, vi } from "vitest";
import { sampleCheck } from "../src/lib/examples";
import type { Check } from "../src/lib/types";
const mocked = vi.hoisted(() => ({
  takeLease: vi.fn(),
  finishLease: vi.fn(),
  search: vi.fn(),
  modelJSON: vi.fn(),
}));
vi.mock("../src/lib/store", () => ({
  takeLease: mocked.takeLease,
  finishLease: mocked.finishLease,
}));
vi.mock("../src/lib/integrations", () => ({
  search: mocked.search,
  modelJSON: mocked.modelJSON,
}));
import { work } from "../src/lib/pipeline";
let check: Check, saved: Check[], active: number, maxActive: number;
beforeEach(() => {
  vi.clearAllMocks();
  active = 0;
  maxActive = 0;
  saved = [];
  check = {
    ...sampleCheck("brew-lane", "test"),
    mode: "quick",
    sample: false,
    status: "queued",
    questions: [],
    sources: [],
    findings: [],
    fixes: [],
  };
  mocked.takeLease.mockImplementation(async () => ({
    check,
    token: "exclusive-token",
  }));
  mocked.finishLease.mockImplementation(async (payload: Check) => {
    saved.push(structuredClone(payload));
  });
  mocked.search.mockImplementation(async (query: string) => [
    {
      id: 1,
      url: `https://example.com/${encodeURIComponent(query)}`,
      title: "Cafe guide",
      domain: "example.com",
      excerpt: "Brew Lane Cafe is a cafe in Portland.",
      fetchedAt: new Date().toISOString(),
    },
  ]);
  mocked.modelJSON.mockImplementation(
    async (
      _role: string,
      _prompt: string,
      input: { sources: { id: number }[] },
    ) => {
      active++;
      maxActive = Math.max(active, maxActive);
      await new Promise((resolve) => setTimeout(resolve, 5));
      active--;
      return {
        answer: "Brew Lane Cafe is listed in this guide.",
        recommendations: ["Brew Lane Cafe"],
        citationIds: [input.sources[0].id],
      };
    },
  );
});
describe("quick pipeline", () => {
  it("prepares five broad and three natural niche questions without an extra model round trip", async () => {
    check.mode = "deep";
    await work(check.id);
    expect(check.status).toBe("runs");
    expect(check.questions.filter((q) => q.kind === "broad")).toHaveLength(5);
    expect(check.questions.filter((q) => q.kind === "niche")).toHaveLength(3);
    expect(mocked.modelJSON).not.toHaveBeenCalled();
  });
  it("runs five searches concurrently, persists intermediate answers, and never invokes deep diagnosis", async () => {
    await work(check.id);
    expect(check.status).toBe("complete");
    expect(maxActive).toBe(5);
    expect(check.questions).toHaveLength(5);
    expect(
      check.questions.every((q) => q.kind === "broad" && q.runs.length === 1),
    ).toBe(true);
    expect(
      mocked.modelJSON.mock.calls.every((call) => call[0] === "FAST"),
    ).toBe(true);
    expect(
      saved.some(
        (c) => c.status === "runs" && c.questions.some((q) => q.runs.length),
      ),
    ).toBe(true);
    expect(check.fixes).toHaveLength(4);
    expect(
      check.fixes.every((f) => f.status === "draft" && !f.flags.length),
    ).toBe(true);
    expect(check.findings).toEqual([]);
  });
  it("preserves completed answers and retries only unfinished searches", async () => {
    const original = mocked.search.getMockImplementation()!;
    mocked.search.mockImplementation(async (query: string) => {
      if (query.startsWith("Popular")) throw new Error("timeout");
      return original(query);
    });
    await work(check.id);
    expect(check.status).toBe("error");
    expect(check.questions.filter((q) => q.runs.length)).toHaveLength(4);
    expect(check.retryStage).toBe("runs");
    check.status = "runs";
    mocked.search.mockImplementation(original);
    mocked.search.mockClear();
    mocked.modelJSON.mockClear();
    await work(check.id);
    expect(check.status).toBe("complete");
    expect(mocked.search).toHaveBeenCalledTimes(1);
    expect(mocked.modelJSON).toHaveBeenCalledTimes(1);
  });
  it("deep retries fill the missing run index without duplicating successful runs", async () => {
    check.mode = "deep";
    check.status = "runs";
    check.questions = sampleCheck("brew-lane", "test").questions;
    const question = check.questions[0];
    question.runs = question.runs.filter((run) => run.index !== 1);
    question.sourceIds = [1];
    check.sources = [
      {
        id: 1,
        url: "https://example.com",
        title: "Guide",
        domain: "example.com",
        excerpt: "Brew Lane Cafe",
        fetchedAt: new Date().toISOString(),
      },
    ];
    await work(check.id);
    expect(question.runs.map((run) => run.index)).toEqual([0, 1, 2, 3, 4]);
    expect(mocked.modelJSON).toHaveBeenCalledTimes(1);
    expect(check.status).toBe("diagnosis");
  });
});
