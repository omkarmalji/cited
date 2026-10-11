import { FixEditor } from "@/components/fix-editor";
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ check?: string }>;
}) {
  const { id } = await params,
    { check } = await searchParams;
  return <FixEditor id={id} checkId={check || ""} />;
}
