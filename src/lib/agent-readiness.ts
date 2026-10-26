import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import type { Facts } from "./types";

// Can AI agents actually read a business website? Cited runs a small,
// deterministic set of essentials an assistant needs, in plain language, and
// links Vercel's Is Agentic report for the full audit when one exists.

export type ReadinessItem = {
  id: string;
  label: string;
  pass: boolean;
  detail: string;
  fix: string;
};
export type AgentReadiness = {
  url: string;
  host: string;
  checkedAt: string;
  score: number;
  passed: number;
  total: number;
  items: ReadinessItem[];
  isAgentic:
    | { status: "report"; score: number; label: string; reportUrl: string }
    | { status: "none"; scanUrl: string };
  error?: string;
};

const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
];
const UA = "CitedBot/1.0 (+https://cited-dev.vercel.app; AI visibility check)";

export function normalizeUrl(input: string) {
  const raw = input.trim();
  if (!raw) return null;
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(raw) && !/^https?:\/\//i.test(raw))
    return null;
  try {
    const url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (!["http:", "https:"].includes(url.protocol)) return null;
    url.hash = "";
    return url;
  } catch {
    return null;
  }
}

function privateAddress(ip: string) {
  if (ip.includes(":")) {
    const v6 = ip.toLowerCase();
    return (
      v6 === "::1" ||
      v6 === "::" ||
      v6.startsWith("fc") ||
      v6.startsWith("fd") ||
      v6.startsWith("fe80") ||
      v6.startsWith("::ffff:127.") ||
      v6.startsWith("::ffff:10.") ||
      v6.startsWith("::ffff:192.168.")
    );
  }
  const [a, b] = ip.split(".").map(Number);
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    a >= 224
  );
}

// The website comes from user input, so never let the server fetch internal
// or private addresses (SSRF).
export async function assertPublicHost(host: string) {
  const name = host.replace(/^\[|\]$/g, "");
  if (/^(localhost|.*\.local|.*\.internal)$/i.test(name))
    throw new Error("That website address is not public.");
  const addresses = isIP(name)
    ? [{ address: name }]
    : await lookup(name, { all: true });
  if (!addresses.length || addresses.some((a) => privateAddress(a.address)))
    throw new Error("That website address is not public.");
}

async function get(url: URL, accept = "text/html,*/*;q=0.8") {
  let current = url;
  for (let hop = 0; hop < 4; hop++) {
    await assertPublicHost(current.hostname);
    const response = await fetch(current, {
      redirect: "manual",
      headers: { "User-Agent": UA, Accept: accept },
      signal: AbortSignal.timeout(8000),
    });
    const location = response.headers.get("location");
    if (response.status >= 300 && response.status < 400 && location) {
      current = new URL(location, current);
      continue;
    }
    const text = (await response.text()).slice(0, 600_000);
    return {
      status: response.status,
      url: current,
      text,
      type: response.headers.get("content-type") || "",
    };
  }
  throw new Error("Too many redirects.");
}

export function visibleText(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

export function schemaTypes(html: string) {
  const types: string[] = [];
  const blocks = html.match(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  );
  for (const block of blocks || []) {
    const body = block.replace(/^<script[^>]*>|<\/script>$/gi, "");
    try {
      const walk = (node: unknown) => {
        if (Array.isArray(node)) return node.forEach(walk);
        if (node && typeof node === "object") {
          const t = (node as Record<string, unknown>)["@type"];
          if (typeof t === "string") types.push(t);
          if (Array.isArray(t))
            t.forEach((x) => typeof x === "string" && types.push(x));
          Object.values(node).forEach(walk);
        }
      };
      walk(JSON.parse(body));
    } catch {
      /* Invalid JSON-LD is reported as missing below. */
    }
  }
  return types;
}

// True when robots.txt blocks every page for the given agent.
export function robotsBlocks(robots: string, agent: string) {
  const groups: { agents: string[]; rules: string[] }[] = [];
  let current: { agents: string[]; rules: string[] } | null = null;
  for (const raw of robots.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, "").trim();
    const [key, ...rest] = line.split(":");
    const value = rest.join(":").trim();
    if (!key) continue;
    if (/^user-agent$/i.test(key)) {
      if (!current || current.rules.length)
        groups.push((current = { agents: [], rules: [] }));
      current.agents.push(value.toLowerCase());
    } else if (current && /^(dis)?allow$/i.test(key)) {
      current.rules.push(`${key.toLowerCase()}:${value}`);
    }
  }
  const pick =
    groups.find((g) => g.agents.includes(agent.toLowerCase())) ||
    groups.find((g) => g.agents.includes("*"));
  if (!pick) return false;
  return (
    pick.rules.includes("disallow:/") &&
    !pick.rules.some((r) => r === "allow:/")
  );
}

export function analyzeSite(input: {
  homepage: { status: number; text: string; https: boolean };
  robots: string | null;
  llms: boolean;
  sitemap: boolean;
  facts: Pick<Facts, "name" | "city" | "address" | "hours">;
}): ReadinessItem[] {
  const { homepage, robots, facts } = input;
  const ok = homepage.status >= 200 && homepage.status < 300;
  const text = ok ? visibleText(homepage.text) : "";
  const lower = text.toLowerCase();
  const types = ok ? schemaTypes(homepage.text) : [];
  const title = /<title[^>]*>\s*[^<\s][^<]*<\/title>/i.test(homepage.text);
  const description =
    /<meta[^>]+name=["']description["'][^>]+content=["'][^"']{20,}/i.test(
      homepage.text,
    );
  const blocked = robots
    ? AI_BOTS.filter((bot) => robotsBlocks(robots, bot))
    : [];
  const businessSchema = types.some((t) =>
    /LocalBusiness|Organization|Restaurant|Store|Cafe|Bakery|Dentist|Salon|Shop|Hotel|FoodEstablishment|ProfessionalService/i.test(
      t,
    ),
  );
  const firstWord = (s: string) =>
    s
      .split(/[,\s]+/)
      .find((w) => w.length > 3)
      ?.toLowerCase() || "";
  const showsAddress =
    !!facts.address && lower.includes(firstWord(facts.address));
  const showsHours =
    /\b(open|hours|mon|tue|wed|thu|fri|sat|sun|am|pm)\b/i.test(text) &&
    /\d/.test(text);
  return [
    {
      id: "reachable",
      label: "AI can open your website",
      pass: ok && homepage.https,
      detail: ok
        ? homepage.https
          ? "Your homepage loads over a secure (https) connection."
          : "Your homepage loads, but not over a secure (https) connection."
        : `Your homepage did not load for us (status ${homepage.status}).`,
      fix: "Ask whoever runs your website to fix the address and turn on https.",
    },
    {
      id: "crawlers",
      label: "AI assistants are allowed in",
      pass: blocked.length === 0,
      detail: blocked.length
        ? `Your robots.txt file blocks ${blocked.join(", ")}.`
        : "Nothing on your site tells AI assistants to stay away.",
      fix: "Remove the AI assistant blocks from your robots.txt file.",
    },
    {
      id: "readable",
      label: "Your page has readable text",
      pass: text.length >= 400,
      detail:
        text.length >= 400
          ? "AI can read your page's words without running any code."
          : "Your page shows very little text until code runs, so many AI tools see an almost empty page.",
      fix: "Put a few clear sentences about what you sell, where and when on your homepage.",
    },
    {
      id: "basics",
      label: "Your page says what it is",
      pass: title && description,
      detail:
        title && description
          ? "Your homepage has a title and a short summary for search and AI."
          : "Your homepage is missing a title or a short summary (meta description).",
      fix: "Add a page title and a one-sentence description of your business.",
    },
    {
      id: "schema",
      label: "Business facts in a format AI understands",
      pass: businessSchema,
      detail: businessSchema
        ? "Your site includes structured business information (schema)."
        : "Your site has no structured business information, so AI has to guess your details.",
      fix: "Use the website code in your to-do list. Your Cited page already includes it.",
    },
    {
      id: "facts",
      label: "Your address and opening hours are on the page",
      pass: (showsAddress || !facts.address) && showsHours,
      detail:
        (showsAddress || !facts.address) && showsHours
          ? "AI can find where you are and when you are open."
          : "AI could not find your address or opening hours on your homepage.",
      fix: "Show your address and opening hours as plain text on your homepage.",
    },
    {
      id: "llms",
      label: "An AI summary file (llms.txt)",
      pass: input.llms,
      detail: input.llms
        ? "Your site offers a short summary written for AI tools."
        : "Your site has no llms.txt, a short file that tells AI tools what you do.",
      fix: "Your Cited page includes an AI summary file you can link to.",
    },
    {
      id: "sitemap",
      label: "A map of your pages (sitemap)",
      pass: input.sitemap,
      detail: input.sitemap
        ? "Your site lists its pages so AI tools can find them all."
        : "Your site has no sitemap, so AI tools may miss pages.",
      fix: "Most website builders can turn on a sitemap in their settings.",
    },
  ];
}

async function isAgenticReport(
  host: string,
): Promise<AgentReadiness["isAgentic"]> {
  try {
    const response = await fetch(
      `https://is-agentic.com/api/v1/report?url=${encodeURIComponent(host)}`,
      {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(6000),
      },
    );
    if (response.ok) {
      const data = await response.json();
      if (typeof data.score === "number")
        return {
          status: "report",
          score: data.score,
          label: String(data.score_label || ""),
          reportUrl: String(
            data.report_url || `https://is-agentic.com/scan/${host}`,
          ),
        };
    }
  } catch {
    /* Is Agentic is optional; fall back to the scan link. */
  }
  return { status: "none", scanUrl: `https://is-agentic.com/scan/${host}` };
}

export async function checkAgentReadiness(
  website: string,
  facts: Pick<Facts, "name" | "city" | "address" | "hours">,
): Promise<AgentReadiness> {
  const url = normalizeUrl(website);
  if (!url) throw new Error("That website address does not look right.");
  const origin = url.origin;
  const [homepage, robots, llms, sitemap, isAgentic] = await Promise.all([
    get(url).catch((e: Error) => ({
      status: 0,
      url,
      text: "",
      type: "",
      error: e.message,
    })),
    get(new URL("/robots.txt", origin), "text/plain").catch(() => null),
    get(new URL("/llms.txt", origin), "text/plain,text/markdown").catch(
      () => null,
    ),
    get(new URL("/sitemap.xml", origin), "application/xml,text/xml").catch(
      () => null,
    ),
    isAgenticReport(url.hostname),
  ]);
  const robotsText =
    robots && robots.status === 200 && !/<html/i.test(robots.text)
      ? robots.text
      : null;
  const items = analyzeSite({
    homepage: {
      status: homepage.status,
      text: homepage.text,
      https: homepage.url.protocol === "https:",
    },
    robots: robotsText,
    llms:
      !!llms &&
      llms.status === 200 &&
      llms.text.trim().length > 20 &&
      !/<html/i.test(llms.text),
    sitemap:
      (!!sitemap &&
        sitemap.status === 200 &&
        /<(urlset|sitemapindex)/i.test(sitemap.text)) ||
      /^\s*sitemap:/im.test(robotsText || ""),
    facts,
  });
  const passed = items.filter((i) => i.pass).length;
  return {
    url: url.toString(),
    host: url.hostname,
    checkedAt: new Date().toISOString(),
    score: Math.round((passed / items.length) * 100),
    passed,
    total: items.length,
    items,
    isAgentic,
    ...("error" in homepage && homepage.error ? { error: homepage.error } : {}),
  };
}
