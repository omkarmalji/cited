import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";
import { processQueue } from "@/lib/weekly";
export const maxDuration = 120;
export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET,
    provided = req.headers.get("authorization");
  if (
    !secret ||
    !provided ||
    provided.length !== `Bearer ${secret}`.length ||
    !timingSafeEqual(Buffer.from(provided), Buffer.from(`Bearer ${secret}`))
  )
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  return NextResponse.json(await processQueue());
}
