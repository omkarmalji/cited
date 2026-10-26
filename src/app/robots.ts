import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";

// Published business pages exist to be read by AI assistants, so all
// crawlers are welcome. Private reports live behind session-bound APIs.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/check/", "/fix/", "/confirm/"],
      },
    ],
    sitemap: `${siteOrigin()}/sitemap.xml`,
  };
}
