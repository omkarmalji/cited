import { loadEnvConfig } from "@next/env";
import { z } from "zod";
import { modelJSON, search, configured } from "../src/lib/integrations";
loadEnvConfig(process.cwd());
async function main() {
  if (!configured())
    throw new Error(
      "Missing provider credentials or model IDs. Configure .env.local first.",
    );
  const base =
    process.env.NEBIUS_BASE_URL || "https://api.tokenfactory.nebius.com/v1/";
  const r = await fetch(`${base.replace(/\/$/, "")}/models`, {
    headers: { Authorization: `Bearer ${process.env.NEBIUS_API_KEY}` },
    signal: AbortSignal.timeout(20000),
  });
  if (!r.ok) throw new Error(`Model catalog failed: ${r.status}`);
  const catalog = await r.json();
  for (const key of ["MODEL_FAST", "MODEL_REASON", "MODEL_WRITE"])
    if (!catalog.data.some((m: { id: string }) => m.id === process.env[key]))
      throw new Error(`${key} is not in the authenticated catalog.`);
  for (const role of ["FAST", "REASON", "WRITE"] as const) {
    await modelJSON(
      role,
      "Return JSON: {ok:true}.",
      {},
      z.object({ ok: z.literal(true) }),
    );
    console.log(
      `${role}: ${process.env[`MODEL_${role}`]} runtime inference passed.`,
    );
  }
  const sources = await search(
    "Powell’s City of Books Portland official hours",
  );
  if (!sources.length) throw new Error("Tavily returned no sources.");
  console.log(`Tavily search + extract passed: ${sources.length} sources.`);
}
main().catch((e) => {
  console.error(e.message);
  process.exitCode = 1;
});
