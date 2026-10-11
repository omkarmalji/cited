import { notFound } from "next/navigation";
import { Badge } from "@/components/ui";
import { examples } from "@/lib/examples";
export const metadata = {
  robots: { index: false, follow: false },
  title: "Fictional sample source",
};
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ rival?: string }>;
}) {
  const { id } = await params,
    { rival } = await searchParams;
  const e = examples.find((e) => e.id === id);
  if (!e) notFound();
  return (
    <main id="main" className="app-container">
      <Badge label="Sample data" />
      <h1>{rival ? e.rival : e.name}</h1>
      <p>
        This is an authored fictional source for a Cited sample report. It is
        not a real business or evidence about one.
      </p>
      <article className="panel">
        <h2>{rival ? "Clear business details" : "Confirmed sample facts"}</h2>
        {rival ? (
          <p>
            {e.rival} publishes a dedicated page listing services, address and
            opening hours. {e.name} has less structured information in this
            fictional scenario.
          </p>
        ) : (
          <dl>
            {Object.entries({
              Name: e.name,
              Address: e.address,
              Hours: e.hours,
              "Known for": e.knownFor,
              Category: e.category,
              City: e.city,
            }).map(([k, v]) => (
              <div key={k} style={{ marginBottom: 24 }}>
                <dt className="fact-name">{k}</dt>
                <dd style={{ margin: 0 }}>{v}</dd>
              </div>
            ))}
          </dl>
        )}
      </article>
    </main>
  );
}
