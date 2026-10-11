import { cookies } from "next/headers";
import { randomUUID, createHash } from "node:crypto";
import { authClient } from "./auth";
export async function owner() {
  const client = await authClient();
  if (client) {
    const { data } = await client.auth.getUser();
    if (data.user)
      return createHash("sha256").update(data.user.id).digest("hex");
  }
  const jar = await cookies();
  let value = jar.get("cited-owner")?.value;
  if (!value || !/^[a-f0-9-]{36}$/.test(value)) {
    value = randomUUID();
    jar.set("cited-owner", value, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 90,
    });
  }
  return createHash("sha256").update(value).digest("hex");
}
