import { randomUUID } from "node:crypto";
import { buildFixes, classify } from "./honesty";
import type { Check, Facts } from "./types";
export const examples = [
  {
    id: "brew-lane",
    name: "Brew Lane Cafe",
    city: "Portland",
    country: "United States",
    category: "Cafe",
    address: "24 Riverside Walk, Portland",
    hours: "Monday to Saturday, 8am to 6pm",
    knownFor: "Quiet seating, filter coffee, and house-baked pastries",
    counts: [0, 1, 2, 3, 4, 1, 2, 0],
    rival: "Juniper Coffee",
  },
  {
    id: "atelier-moss",
    name: "Atelier Moss",
    city: "London",
    country: "United Kingdom",
    category: "Hair salon",
    address: "18 Willow Lane, London",
    hours: "Tuesday to Saturday, 10am to 7pm",
    knownFor: "Curly hair cuts and one-to-one appointments",
    counts: [0, 0, 1, 3, 4, 2, 2, 1],
    rival: "Fern Hair Studio",
  },
  {
    id: "spoke-studio",
    name: "Spoke Studio",
    city: "Melbourne",
    country: "Australia",
    category: "Bicycle repair shop",
    address: "9 Garden Street, Melbourne",
    hours: "Monday to Friday, 9am to 5pm",
    knownFor: "Commuter bike servicing and puncture repairs",
    counts: [0, 0, 0, 0, 0, 0, 0, 0],
    rival: "Elm Cycle Works",
  },
  {
    id: "stillwater",
    name: "Stillwater Dental",
    city: "Toronto",
    country: "Canada",
    category: "Dental clinic",
    address: "31 Harbor Road, Toronto",
    hours: "Monday to Friday, 8am to 4pm",
    knownFor: "Routine dental checkups and preventive care",
    counts: [0, 1, 1, 2, 2, 1, 0, 2],
    rival: "Maple Dental",
  },
];
export function sampleCheck(
  exampleId: string,
  owner: string,
  id = randomUUID(),
): Check {
  const e = examples.find((e) => e.id === exampleId);
  if (!e) throw new Error("Example not found.");
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const facts: Facts = {
    name: e.name,
    city: e.city,
    country: e.country,
    category: e.category,
    address: e.address,
    hours: e.hours,
    knownFor: e.knownFor,
    website: "",
    reviewUrl: "",
  };
  const texts = [
    `What is the best ${e.category.toLowerCase()} in ${e.city}?`,
    `Which ${e.category.toLowerCase()} would you recommend in ${e.city}?`,
    `Where can I find a local ${e.category.toLowerCase()} in ${e.city}?`,
    `Where in ${e.city} offers ${e.knownFor.toLowerCase()}?`,
    `Which ${e.category.toLowerCase()} is near ${e.address.split(",")[0]}?`,
    `Which ${e.category.toLowerCase()} in ${e.city} is open on weekdays?`,
    `Which independent ${e.category.toLowerCase()} should I try in ${e.city}?`,
    `Which ${e.category.toLowerCase()} in ${e.city} has useful information online?`,
  ];
  const createdAt = "2026-10-12T08:00:00.000Z";
  const sources = [
    {
      id: 1,
      url: `${origin}/sample-sources/${e.id}`,
      title: `${e.name}: fictional sample source`,
      domain: "Cited sample source",
      excerpt: `${e.name}. ${e.address}. ${e.hours}. ${e.knownFor}.`,
      fetchedAt: createdAt,
    },
    {
      id: 2,
      url: `${origin}/sample-sources/${e.id}?rival=1`,
      title: `${e.rival}: fictional sample source`,
      domain: "Cited sample source",
      excerpt: `${e.rival} publishes a dedicated page listing services, address and opening hours. ${e.name} has less structured information in this fictional scenario.`,
      fetchedAt: createdAt,
    },
  ];
  const questions = texts.map((text, i) => {
    const kind = i < 3 ? ("broad" as const) : ("niche" as const);
    const runs = Array.from({ length: 5 }, (_, n) => ({
      index: n,
      mentioned: n < e.counts[i],
      answer: `Sample recommendation: ${n < e.counts[i] ? e.name : e.rival}. This is fictional saved data, not a live AI answer.`,
      model: "Sample data",
    }));
    return {
      id: `${id}-q${i}`,
      text,
      kind,
      runs,
      status: classify(runs, kind, true),
    };
  });
  return {
    id,
    owner,
    businessId: exampleId,
    facts,
    confirmedAt: createdAt,
    createdAt,
    updatedAt: createdAt,
    sample: true,
    status: "complete",
    progress: "Saved example ready",
    sources,
    questions,
    findings: [
      {
        rival: e.rival,
        body: `In this fictional example, ${e.rival} has a dedicated page with its services, address and hours in readable text. Give assistants the same clear information about ${e.name}.`,
        citationIds: [2],
      },
      {
        rival: e.rival,
        body: `Your confirmed specialty, ${e.knownFor.toLowerCase()}, gives you more specific questions to target than a broad city-wide recommendation.`,
        citationIds: [1],
      },
    ],
    fixes: buildFixes(facts, randomUUID),
  };
}
