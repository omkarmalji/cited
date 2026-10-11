export const METHOD =
  "Scores from Nemotron plus web search. Not live ChatGPT results.";
export type Status =
  "Winnable now" | "In about 3 months" | "Unlikely" | "Needs your check";
export type Facts = {
  name: string;
  city: string;
  country: string;
  category: string;
  address: string;
  hours: string;
  knownFor: string;
  website: string;
  reviewUrl: string;
};
export type Source = {
  id: number;
  url: string;
  title: string;
  domain: string;
  excerpt: string;
  fetchedAt: string;
};
export type Run = {
  index: number;
  mentioned: boolean;
  answer: string;
  model: string;
  citationIds?: number[];
};
export type Question = {
  id: string;
  text: string;
  kind: "broad" | "niche";
  status: Status;
  runs: Run[];
  sourceIds?: number[];
};
export type Finding = { body: string; rival: string; citationIds: number[] };
export type Fix = {
  id: string;
  type: "page" | "profile" | "reviews" | "schema";
  title: string;
  body: string;
  factKeys: (keyof Facts)[];
  status: "draft" | "edited" | "approved";
  approvedAt?: string;
  slug?: string;
  flags: string[];
};
export type Check = {
  id: string;
  owner: string;
  businessId: string;
  facts: Facts;
  confirmedAt: string;
  createdAt: string;
  updatedAt: string;
  sample: boolean;
  status:
    | "queued"
    | "questions"
    | "runs"
    | "diagnosis"
    | "fixes"
    | "complete"
    | "error";
  progress: string;
  error?: string;
  sources: Source[];
  questions: Question[];
  findings: Finding[];
  fixes: Fix[];
  previousTotal?: number;
  recheckOf?: string;
  leaseUntil?: string;
  leaseToken?: string;
  weeklyEnabled?: boolean;
  nextRecheckAt?: string;
  latestRecheckId?: string;
};
export type Candidate = {
  id: string;
  facts: Facts;
  sources: Source[];
  expiresAt: string;
  owner: string;
};
