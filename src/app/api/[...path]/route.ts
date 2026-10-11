import { NextRequest, NextResponse } from "next/server";
import { createHash, randomUUID } from "node:crypto";
import { z } from "zod";
import QRCode from "qrcode";
import { owner } from "@/lib/session";
import { getRecord, saveRecord, rateLimit, updateCheck } from "@/lib/store";
import { configured, modelJSON, search } from "@/lib/integrations";
import { factsSchema, buildFixes, verifyFactLock } from "@/lib/honesty";
import { sampleCheck, examples } from "@/lib/examples";
import { work, total } from "@/lib/pipeline";
import type { Candidate, Check, Fix } from "@/lib/types";
export const runtime = "nodejs";
export const maxDuration = 300;
const json = (data: unknown, status = 200) =>
  NextResponse.json(data, { status, headers: { "Cache-Control": "no-store" } });
async function ownedCheck(id: string, identity: string) {
  const check = await getRecord<Check>("checks", id);
  if (!check || check.owner !== identity)
    throw new Error("Report not found in this browser session.");
  return check;
}
async function quota(req: NextRequest) {
  const ip =
    req.headers.get("x-vercel-forwarded-for") ||
    req.headers.get("x-forwarded-for") ||
    "local";
  const key = createHash("sha256")
    .update(ip.split(",")[0] + new Date().toISOString().slice(0, 10))
    .digest("hex");
  await rateLimit(key);
}
async function handler(
  req: NextRequest,
  context: { params: Promise<{ path: string[] }> },
) {
  try {
    if (
      req.method !== "GET" &&
      req.headers.get("origin") &&
      new URL(req.headers.get("origin")!).host !== req.headers.get("host")
    )
      return json({ error: "Invalid request origin." }, 403);
    const { path } = await context.params;
    const [resource, id, action] = path;
    const identity = await owner();
    if (resource === "resolve" && req.method === "POST") {
      if (!configured())
        return json(
          {
            error:
              "Live checks need Nebius and Tavily setup. Try a saved example below.",
          },
          503,
        );
      await quota(req);
      const input = z
        .object({
          name: z.string().trim().min(2).max(160),
          city: z.string().trim().min(2).max(120),
        })
        .parse(await req.json());
      const sources = await search(
        `${input.name} ${input.city} official business address hours`,
      );
      if (!sources.length)
        throw new Error(
          "No sources found. Try the exact business name and city.",
        );
      const result = await modelJSON(
        "REASON",
        "Identify the requested business from sources. Return {facts:{name,city,country,category,address,hours,knownFor,website,reviewUrl}}. All fields strings. Use empty string for unknown details. Never fabricate hours or review links. If identity is unclear, return {facts:null}.",
        { input, sources },
        z.object({ facts: factsSchema.nullable() }),
      );
      if (!result.facts)
        throw new Error(
          "We could not confidently identify this business. Try a more specific name and city.",
        );
      const candidate: Candidate = {
        id: randomUUID(),
        facts: result.facts,
        sources,
        owner: identity,
        expiresAt: new Date(Date.now() + 3600000).toISOString(),
      };
      await saveRecord("candidates", candidate);
      return json({ id: candidate.id });
    }
    if (resource === "candidates" && req.method === "GET") {
      const candidate = await getRecord<Candidate>("candidates", id);
      if (
        !candidate ||
        candidate.owner !== identity ||
        Date.parse(candidate.expiresAt) < Date.now()
      )
        return json(
          { error: "Business details expired. Run another check." },
          404,
        );
      return json({
        id: candidate.id,
        facts: candidate.facts,
        sources: candidate.sources,
      });
    }
    if (resource === "examples" && req.method === "POST") {
      const { exampleId } = z
        .object({
          exampleId: z.enum(examples.map((e) => e.id) as [string, ...string[]]),
        })
        .parse(await req.json());
      const saved = await getRecord<Check>("examples", exampleId);
      const check = saved
        ? {
            ...structuredClone(saved),
            id: randomUUID(),
            owner: identity,
            fixes: saved.fixes.map((f) => ({
              ...f,
              id: randomUUID(),
              status: "draft" as const,
              approvedAt: undefined,
              slug: undefined,
            })),
          }
        : sampleCheck(exampleId, identity);
      // A real HTTP fetch records the fictional evidence pages, never live findings.
      check.questions = check.questions.map((q, i) => ({
        ...q,
        id: `${check.id}-q${i}`,
      }));
      const sampleOrigin =
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
      for (const source of check.sources) {
        const parsed = new URL(source.url);
        source.url = sampleOrigin + parsed.pathname + parsed.search;
        const result = await fetch(source.url, {
          signal: AbortSignal.timeout(10000),
        });
        if (!result.ok) throw new Error("Sample source unavailable.");
        await result.text();
        source.fetchedAt = new Date().toISOString();
      }
      await saveRecord("checks", check);
      return json({ id: check.id });
    }
    if (resource === "checks" && req.method === "POST" && !id) {
      const input = z
        .object({ candidateId: z.string().uuid(), facts: factsSchema })
        .parse(await req.json());
      const candidate = await getRecord<Candidate>(
        "candidates",
        input.candidateId,
      );
      if (
        !candidate ||
        candidate.owner !== identity ||
        Date.parse(candidate.expiresAt) < Date.now()
      )
        return json({ error: "Business details expired." }, 404);
      const now = new Date().toISOString();
      const cacheId = createHash("sha256")
        .update(identity + JSON.stringify(input.facts))
        .digest("hex");
      const cached = await getRecord<Check>("cache", cacheId);
      if (
        cached &&
        cached.status === "complete" &&
        Date.now() - Date.parse(cached.createdAt) < 86400000
      )
        return json({ id: cached.businessId, cached: true });
      const check: Check = {
        id: randomUUID(),
        businessId: cacheId,
        owner: identity,
        facts: input.facts,
        confirmedAt: now,
        createdAt: now,
        updatedAt: now,
        sample: false,
        status: "queued",
        progress: "Asking the questions",
        sources: candidate.sources,
        questions: [],
        findings: [],
        fixes: [],
      };
      await saveRecord("checks", check);
      return json({ id: check.id });
    }
    if (resource === "checks" && id) {
      const check = await ownedCheck(id, identity);
      if (req.method === "GET") {
        const {
          owner: _owner,
          leaseToken: _leaseToken,
          leaseUntil: _leaseUntil,
          ...safe
        } = check;
        return json(safe);
      }
      if(req.method==='POST'&&action==='retry'){
        const updated=await updateCheck(id,identity,c=>{if(c.status!=='error'||!c.retryStage||(c.retryCount||0)>=3)throw new Error('This check cannot be retried again. Start a new check.');c.retryCount=(c.retryCount||0)+1;c.status=c.retryStage;c.progress='Retrying the unfinished step';delete c.error;delete c.leaseToken;delete c.leaseUntil;});return json({id:updated.id});
      }
      if (req.method === "POST" && action === "weekly") {
        if (check.sample || check.status !== "complete")
          throw new Error("Weekly rechecks need a completed live report.");
        const { enabled } = z
          .object({ enabled: z.boolean() })
          .parse(await req.json());
        const updated = await updateCheck(id, identity, (c) => {
          c.weeklyEnabled = enabled;
          c.nextRecheckAt = enabled
            ? new Date(Date.now() + 7 * 86400000).toISOString()
            : undefined;
        });
        return json({
          enabled: updated.weeklyEnabled,
          nextRecheckAt: updated.nextRecheckAt,
        });
      }
      if (req.method === "POST" && action === "work") {
        await work(check.id);
        const updated = await getRecord<Check>("checks", check.id);
        if (updated?.status === "complete" && !updated.sample)
          await saveRecord("cache", {
            ...updated,
            id: updated.businessId,
            businessId: updated.id,
          });
        return json({ ok: true });
      }
      if (req.method === "POST" && action === "recheck") {
        if (check.status !== "complete")
          throw new Error("Wait for this check to finish first.");
        if (check.sample) {
          const next = sampleCheck(check.businessId, identity);
          next.previousTotal = total(check);
          next.recheckOf = check.id;
          await saveRecord("checks", next);
          return json({ id: next.id });
        }
        await quota(req);
        const now = new Date().toISOString();
        const nextId = randomUUID();
        const next: Check = {
          ...check,
          id: nextId,
          createdAt: now,
          updatedAt: now,
          status: "queued",
          progress: "Asking the same questions again",
          questions: check.questions.map((q, i) => ({
            ...q,
            id: `${nextId}-q${i}`,
            runs: [],
            sourceIds: [],
            status: "Needs your check",
          })),
          findings: [],
          fixes: [],
          previousTotal: total(check),
          recheckOf: check.id,
          weeklyEnabled: false,
          nextRecheckAt: undefined,
          latestRecheckId: undefined,
          leaseToken: undefined,
          leaseUntil: undefined,
        };
        await saveRecord("checks", next);
        return json({ id: next.id });
      }
    }
    if (resource === "fixes" && id) {
      const checkId = req.nextUrl.searchParams.get("check");
      if (!checkId) throw new Error("Missing report.");
      const check = await ownedCheck(checkId, identity),
        fix = check.fixes.find((f) => f.id === id);
      if (!fix) return json({ error: "Fix not found." }, 404);
      if (req.method === "GET" && !action)
        return json({ fix, facts: check.facts, sample: check.sample });
      if (req.method === "PATCH") {
        const { body } = z
          .object({ body: z.string().min(1).max(30000) })
          .parse(await req.json());
        const updated = await updateCheck(checkId, identity, (c) => {
          const f = c.fixes.find((f) => f.id === id)!;
          if (f.status === "approved")
            throw new Error(
              "Approved fixes are locked. Start a recheck to draft another version.",
            );
          f.body = body;
          f.status = "edited";
          f.flags = validateFix(f, c);
        });
        return json({ fix: updated.fixes.find((f) => f.id === id) });
      }
      if (req.method === "POST" && action === "approve") {
        const updated = await updateCheck(checkId, identity, (c) => {
          const f = c.fixes.find((f) => f.id === id)!;
          f.flags = validateFix(f, c);
          if (f.flags.length || f.status === "approved") return;
          f.status = "approved";
          f.approvedAt = new Date().toISOString();
          if (f.type === "page")
            f.slug = `${c.facts.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "")}-${c.id.slice(0, 8)}`;
        });
        const approved = updated.fixes.find((f) => f.id === id)!;
        if (approved.flags.length)
          return json(
            {
              error: "Approval blocked: unconfirmed facts.",
              flags: approved.flags,
            },
            422,
          );
        if (approved.slug)
          await saveRecord("pages", { ...updated, id: approved.slug });
        return json({ fix: approved });
      }
      if (req.method === "GET" && action === "qr") {
        if (
          fix.type !== "reviews" ||
          fix.status !== "approved" ||
          !check.facts.reviewUrl
        )
          throw new Error(
            "Approve review requests with a confirmed review link first.",
          );
        const png = await QRCode.toBuffer(check.facts.reviewUrl, {
          width: 500,
          margin: 2,
        });
        return new NextResponse(new Uint8Array(png), {
          headers: {
            "Content-Type": "image/png",
            "Cache-Control": "private, no-store",
          },
        });
      }
    }
    return json({ error: "Not found." }, 404);
  } catch (e) {
    console.error(
      "request_failed",
      e instanceof Error ? e.message : "Unknown error",
    );
    return json(
      {
        error:
          e instanceof z.ZodError
            ? "Check the form fields and try again."
            : e instanceof Error
              ? e.message
              : "Something went wrong.",
      },
      400,
    );
  }
}
function validateFix(fix: Fix, check: Check) {
  const original = buildFixes(check.facts, () => fix.id).find(
    (f) => f.type === fix.type,
  )!;
  if (fix.body === original.body) return [];
  if (fix.type === "schema") {
    try {
      return JSON.stringify(JSON.parse(fix.body)) ===
        JSON.stringify(JSON.parse(original.body))
        ? []
        : [
            "Schema includes changed facts. Restore the generated schema or confirm new facts in a new check.",
          ];
    } catch {
      return ["Invalid JSON schema."];
    }
  }
  return verifyFactLock(fix.body, check.facts);
}
export { handler as GET, handler as POST, handler as PATCH };
