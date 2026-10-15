import type { Facts, Question, Check } from "./types";

// Broad discovery asks about the category and city, never the target's street,
// name, or a stack of attributes which would bias the recommendation toward it.
export function discoveryCategory(category: string) {
  const value = category.trim();
  const groups: [RegExp, string][] = [
    [/sweet|mithai|confection/i, "sweet shops"],
    [/caf[eé]|coffee/i, "cafes"],
    [/barber/i, "barber shops"],
    [/bicycle|bike|cycling/i, "bike shops"],
    [/dent(al|ist)/i, "dentists"],
    [/baker/i, "bakeries"],
    [/restaurant/i, "restaurants"],
    [/salon|hairdress/i, "hair salons"],
    [/hotel/i, "hotels"],
    [/architect/i, "architects"],
    [/gym|fitness/i, "gyms"],
  ];
  return (
    groups.find(([pattern]) => pattern.test(value))?.[1] ||
    value.toLocaleLowerCase()
  );
}
export function broadQuestions(
  facts: Facts,
): Pick<Question, "text" | "kind">[] {
  const category = discoveryCategory(facts.category),
    city = facts.city.trim();
  return [
    `Best ${category} in ${city}`,
    `Top rated ${category} in ${city}`,
    `${category.charAt(0).toUpperCase() + category.slice(1)} to try in ${city}`,
    `Popular ${category} in ${city}`,
    `Which ${category} would you recommend in ${city}?`,
  ].map((text) => ({ text, kind: "broad" }));
}
// Optional deep checks probe familiar purchase occasions. These are questions
// about the market, never assertions that the target offers a given service.
export function nicheQuestions(
  facts: Facts,
): Pick<Question, "text" | "kind">[] {
  const category = discoveryCategory(facts.category),
    city = facts.city.trim();
  const intents: Record<string, string[]> = {
    "sweet shops": [
      "Sweet shops for festival gifting",
      "Where to buy fresh mithai",
      "Sweet shops for wedding orders",
    ],
    cafes: [
      "Quiet cafes to work from",
      "Cafes for a coffee date",
      "Cafes for a quick takeaway",
    ],
    "barber shops": [
      "Barber shops for a beard trim",
      "Barber shops for a fade haircut",
      "Walk-in barber shops",
    ],
    "bike shops": [
      "Bike shops for puncture repairs",
      "Where to buy a commuter bike",
      "Bike shops for a bicycle service",
    ],
    dentists: [
      "Dentists for a routine checkup",
      "Dentists for teeth cleaning",
      "Dentists accepting new patients",
    ],
    bakeries: [
      "Bakeries for birthday cakes",
      "Where to buy fresh bread",
      "Bakeries for custom cake orders",
    ],
    restaurants: [
      "Restaurants for a family dinner",
      "Restaurants for a date night",
      "Restaurants for a quick lunch",
    ],
    "hair salons": [
      "Hair salons for a haircut",
      "Hair salons for hair colouring",
      "Hair salons for bridal styling",
    ],
    hotels: [
      "Hotels for a family stay",
      "Hotels for a business trip",
      "Hotels for a weekend stay",
    ],
    architects: [
      "Architects for a home renovation",
      "Architects for a new house",
      "Architects for a small office",
    ],
    gyms: [
      "Gyms for beginners",
      "Gyms with personal training",
      "Gyms for strength training",
    ],
  };
  const phrases = intents[category] || [
    `Affordable ${category}`,
    `Independent ${category}`,
    `${category} with good customer reviews`,
  ];
  return phrases.map((phrase) => ({
    text: `${phrase} in ${city}`,
    kind: "niche",
  }));
}
export const checkMode = (check: Pick<Check, "mode">) => check.mode || "deep";
export const runsPerQuestion = (check: Pick<Check, "mode">) =>
  checkMode(check) === "quick" ? 1 : 5;
export const expectedAnswers = (check: Pick<Check, "mode">) =>
  checkMode(check) === "quick" ? 5 : 40;
