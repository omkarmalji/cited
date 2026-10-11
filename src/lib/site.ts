export function siteOrigin() {
  return new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
    .origin;
}
