import { notFound } from "next/navigation";
import { getRecord } from "./store";
import type { Check } from "./types";

// A published business page exists only once its page fix is approved.
export async function pageData(slug: string) {
  const check = await getRecord<Check>("pages", slug);
  if (
    !check ||
    !check.fixes.some((f) => f.slug === slug && f.status === "approved")
  )
    notFound();
  return check;
}
