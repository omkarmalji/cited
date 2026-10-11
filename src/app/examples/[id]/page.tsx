import { notFound } from "next/navigation";
import { examples } from "@/lib/examples";
import { ExampleLoader } from "@/components/example-loader";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!examples.some((e) => e.id === id)) notFound();
  return <ExampleLoader id={id} />;
}
