import { NextResponse } from "next/server";
import { owner } from "@/lib/session";
import { listChecks } from "@/lib/store";
export async function GET() {
  const identity = await owner();
  return NextResponse.json(
    {
      checks: (await listChecks(identity))
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .map((c) => ({
          id: c.id,
          name: c.facts.name,
          city: c.facts.city,
          date: c.createdAt,
          status: c.status,
          sample: c.sample,
        })),
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
