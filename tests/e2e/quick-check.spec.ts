import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const id = "11111111-1111-4111-8111-111111111111";
const facts = {
  name: "Brew Lane Cafe",
  city: "Portland",
  category: "Cafe",
  country: "United States",
  address: "",
  hours: "",
  knownFor: "",
  website: "",
  reviewUrl: "",
};
const questions = [
  "Best cafes in Portland",
  "Top rated cafes in Portland",
  "Cafes to try in Portland",
  "Popular cafes in Portland",
  "Which cafes would you recommend in Portland?",
];
const source = {
  id: 1,
  url: "https://example.com/cafes",
  domain: "example.com",
  title: "Local cafe guide",
  excerpt: "Brew Lane Cafe is listed in Portland.",
  fetchedAt: "2026-10-16T00:00:00.000Z",
};
test("quick check opens immediately, streams results while worker runs, and stays on the landing page", async ({
  page,
}, info) => {
  if (info.project.name === "mobile")
    await page.setViewportSize({ width: 375, height: 844 });
  let lookupCalls = 0,
    workStarted = 0,
    working = false;
  await page.route("**/api/resolve", async (route) => {
    lookupCalls++;
    await new Promise((resolve) => setTimeout(resolve, 700));
    await route.fulfill({ json: { id, facts, sources: [source] } });
  });
  await page.route("**/api/checks", async (route) => {
    expect(route.request().postDataJSON().mode).toBe("quick");
    await route.fulfill({ json: { id } });
  });
  await page.route(`**/api/checks/${id}`, async (route) => {
    const elapsed = workStarted ? Date.now() - workStarted : 0,
      done = elapsed > 3000 ? 5 : elapsed > 500 ? 2 : 0;
    await route.fulfill({
      json: {
        id,
        facts,
        owner: "",
        businessId: "test",
        sample: false,
        mode: "quick",
        status: done === 5 ? "complete" : done ? "runs" : "queued",
        progress: `${done} of 5 answers ready`,
        createdAt: new Date().toISOString(),
        sources: [source],
        findings: [],
        fixes: [],
        questions: questions.map((text, i) => ({
          id: `q${i}`,
          text,
          kind: "broad",
          status: "Needs your check",
          runs:
            i < done
              ? [
                  {
                    index: 0,
                    mentioned: i === 0,
                    answer:
                      i === 0
                        ? "Try Brew Lane Cafe, listed in the local guide."
                        : "This guide also lists other cafes.",
                    recommendations: i === 0 ? [facts.name] : ["Other Cafe"],
                    citationIds: [1],
                    model: "test-nemotron",
                  },
                ]
              : [],
        })),
      },
    });
  });
  await page.route(`**/api/checks/${id}/work`, async (route) => {
    working = true;
    workStarted = Date.now();
    await new Promise((resolve) => setTimeout(resolve, 4500));
    working = false;
    await route.fulfill({ json: { ok: true } });
  });
  await page.goto("/");
  const form = page.locator("#check");
  await form.getByLabel("Business name").fill(facts.name);
  await form.getByLabel("City", { exact: true }).fill(facts.city);
  await form.getByRole("button", { name: "Run free check" }).click();
  await expect(page.getByRole("dialog")).toBeVisible({ timeout: 500 });
  await expect(
    page.getByRole("heading", { name: "Finding your business" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Is this your business?" }),
  ).toBeVisible();
  expect(lookupCalls).toBe(1);
  await page.getByRole("button", { name: "Yes, that's my business" }).click();
  await expect(
    page.getByRole("status").filter({ hasText: "2 of 5 questions answered" }),
  ).toBeVisible();
  expect(working).toBe(true);
  await expect(
    page.getByText("You're mentioned", { exact: true }),
  ).toBeVisible();
  expect(new URL(page.url()).pathname).toBe("/");
  const audit = await new AxeBuilder({ page }).analyze();
  expect(audit.violations).toEqual([]);
  await expect(
    page.getByRole("heading", {
      name: "AI mentioned you in 1 of 5 searches.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "See what to do next" }),
  ).toHaveAttribute("href", `/check/${id}#fixes`);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.getByRole("dialog").screenshot({
    path: `test-results/${info.project.name}-quick-results.png`,
  });
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: /Continue Brew Lane Cafe/ }),
  ).toBeVisible();
  await expect(
    form.getByRole("button", { name: "Run free check" }),
  ).toBeFocused();
});
test("lookup failure offers recovery without dropping typed details", async ({
  page,
}) => {
  await page.route("**/api/resolve", (route) =>
    route.fulfill({
      status: 400,
      json: {
        error: "We could not identify this business. Try a more specific name.",
      },
    }),
  );
  await page.goto("/");
  const form = page.locator("#check");
  await form.getByLabel("Business name").fill("Unknown business");
  await form.getByLabel("City", { exact: true }).fill("Bhopal");
  await form.getByRole("button", { name: "Run free check" }).click();
  await expect(page.getByRole("dialog").getByRole("alert")).toContainText(
    "more specific name",
  );
  await expect(
    page.getByRole("button", { name: "Retry lookup" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Close check", exact: true }).click();
  await expect(form.getByLabel("Business name")).toHaveValue(
    "Unknown business",
  );
  await expect(form.getByLabel("City", { exact: true })).toHaveValue("Bhopal");
});
