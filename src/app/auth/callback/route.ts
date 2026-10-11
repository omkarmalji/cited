import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { authClient } from "@/lib/auth";
import { cookies } from "next/headers";
import { siteOrigin } from "@/lib/site";
import { transferOwner } from "@/lib/store";
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code"),
    check = req.nextUrl.searchParams.get("check");
  if (code) {
    const anonymous = (await cookies()).get("cited-owner")?.value,
      client = await authClient();
    if (client) {
      const { data, error } = await client.auth.exchangeCodeForSession(code);
      if (!error && data.user) {
        const next = createHash("sha256").update(data.user.id).digest("hex");
        if (anonymous && /^[a-f0-9-]{36}$/.test(anonymous))
          await transferOwner(
            createHash("sha256").update(anonymous).digest("hex"),
            next,
          );
        return NextResponse.redirect(
          new URL(
            check && /^[a-f0-9-]{36}$/.test(check)
              ? `/check/${check}`
              : "/account",
            siteOrigin(),
          ),
        );
      }
    }
  }
  return NextResponse.redirect(new URL("/account?error=login", siteOrigin()));
}
