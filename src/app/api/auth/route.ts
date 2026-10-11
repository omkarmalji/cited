import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { authClient } from "@/lib/auth";
import { siteOrigin } from "@/lib/site";
import { owner } from "@/lib/session";
import { getRecord, rateLimit } from "@/lib/store";
import type { Check } from "@/lib/types";
import { createHash } from "node:crypto";
export async function POST(req: NextRequest) {
  if (
    !req.headers.get("origin") ||
    new URL(req.headers.get("origin")!).host !== req.headers.get("host")
  )
    return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
  try {
    const { email, checkId } = z
      .object({ email: z.email(), checkId: z.string().regex(/^[\w-]{1,120}$/) })
      .parse(await req.json());
    const client = await authClient();
    if (!client)
      return NextResponse.json(
        {
          error:
            "Email login needs Supabase setup. Your report is saved in this browser session.",
        },
        { status: 503 },
      );
    const identity = await owner(),
      check = await getRecord<Check>("checks", checkId);
    if (!check || check.owner !== identity || check.status !== "complete")
      throw new Error("Report unavailable.");
    await rateLimit(
      createHash("sha256")
        .update(`email-${identity}-${new Date().toISOString().slice(0, 10)}`)
        .digest("hex"),
    );
    const redirect = new URL("/auth/callback", siteOrigin());
    redirect.searchParams.set("check", checkId);
    const { error } = await client.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirect.toString() },
    });
    if (error) throw error;
    return NextResponse.json({
      message: "Check your email for your login link.",
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "Could not send login link. Check your email address and try again.",
      },
      { status: 400 },
    );
  }
}
