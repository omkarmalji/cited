import { beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";
import { sampleCheck } from "../src/lib/examples";
import type { Check } from "../src/lib/types";
const mocks = vi.hoisted(() => ({
  after: vi.fn(),
  work: vi.fn(),
  getRecord: vi.fn(),
  saveRecord: vi.fn(),
}));
vi.mock("next/server", async (original) => ({
  ...(await original<typeof import("next/server")>()),
  after: mocks.after,
}));
vi.mock("../src/lib/session", () => ({ owner: async () => "test-owner" }));
vi.mock("../src/lib/store", () => ({
  getRecord: mocks.getRecord,
  saveRecord: mocks.saveRecord,
  rateLimit: vi.fn(),
  updateCheck: vi.fn(),
}));
vi.mock("../src/lib/pipeline", () => ({ work: mocks.work, total: vi.fn() }));
import { POST, GET } from "../src/app/api/[...path]/route";
const candidateId = "11111111-1111-4111-8111-111111111111";
let records: Map<string, unknown>;
beforeEach(() => {
  vi.clearAllMocks();
  records = new Map();
  records.set(`candidates:${candidateId}`, {
    id: candidateId,
    owner: "test-owner",
    expiresAt: new Date(Date.now() + 60000).toISOString(),
    sources: [],
  });
  mocks.getRecord.mockImplementation(
    async (kind: string, id: string) => records.get(`${kind}:${id}`) || null,
  );
  mocks.saveRecord.mockImplementation(
    async (kind: string, value: { id: string }) => {
      records.set(`${kind}:${value.id}`, value);
    },
  );
});
const requestCheck = (mode?: string) =>
  POST(
    new NextRequest("http://localhost:3000/api/checks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        candidateId,
        facts: sampleCheck("brew-lane", "test").facts,
        ...(mode ? { mode } : {}),
      }),
    }),
    { params: Promise.resolve({ path: ["checks"] }) },
  );
describe("tier routing and background work", () => {
  it("returns a quick job immediately, schedules it after the response, and caches completion", async () => {
    const response = await requestCheck();
    expect(response.status).toBe(200);
    const { id } = await response.json();
    expect(mocks.after).toHaveBeenCalledTimes(1);
    expect(mocks.work).not.toHaveBeenCalled();
    mocks.work.mockImplementation(async () => {
      const check = records.get(`checks:${id}`) as Check;
      check.status = "complete";
    });
    await mocks.after.mock.calls[0][0]();
    expect(mocks.work).toHaveBeenCalledWith(id);
    expect(mocks.saveRecord).toHaveBeenCalledWith(
      "cache",
      expect.objectContaining({
        businessId: id,
        mode: "quick",
        status: "complete",
      }),
    );
  });
  it("deep research is explicit and an invalid tier is rejected", async () => {
    expect((await requestCheck("deep")).status).toBe(200);
    expect(mocks.after).not.toHaveBeenCalled();
    expect((await requestCheck("unknown")).status).toBe(400);
  });
  it("exposes worker activity without leaking ownership or lease credentials", async () => {
    const check = {
      ...sampleCheck("brew-lane", "test-owner"),
      leaseUntil: new Date(Date.now() + 60000).toISOString(),
      leaseToken: "private-lease",
    };
    records.set(`checks:${check.id}`, check);
    const response = await GET(
      new NextRequest(`http://localhost:3000/api/checks/${check.id}`),
      { params: Promise.resolve({ path: ["checks", check.id] }) },
    );
    const body = await response.json();
    expect(body.workerActive).toBe(true);
    expect(body).not.toHaveProperty("owner");
    expect(body).not.toHaveProperty("leaseToken");
    expect(body).not.toHaveProperty("leaseUntil");
  });
});
