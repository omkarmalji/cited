import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  // Free checks remain anonymous. Refresh only an existing Supabase session.
  if (
    !url ||
    !key ||
    !request.cookies
      .getAll()
      .some(({ name }) => /^sb-.+-auth-token(?:\.\d+)?$/.test(name))
  )
    return response;
  const client = createServerClient(url, key, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll(values, headers) {
        for (const { name, value } of values) request.cookies.set(name, value);
        response = NextResponse.next({ request });
        for (const { name, value, options } of values)
          response.cookies.set(name, value, {
            ...options,
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
          });
        for (const [name, value] of Object.entries(headers))
          response.headers.set(name, value);
      },
    },
  });
  await client.auth.getClaims();
  return response;
}

export const config = {
  matcher: [
    "/account/:path*",
    "/check/:path*",
    "/confirm/:path*",
    "/fix/:path*",
  ],
};
