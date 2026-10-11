import { Confirm } from "@/components/confirm";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <Confirm id={id} />;
}
