import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("landing is accessible, responsive and has real arc canvas", async ({
  page,
}, info) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Does it say you?",
  );
  await expect(page.locator(".shader-frame canvas")).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  const audit = await new AxeBuilder({ page }).analyze();
  expect(audit.violations).toEqual([]);
  await page.screenshot({
    path: `test-results/${info.project.name}-landing.png`,
    fullPage: true,
  });
});
test("saved example, edit, fact lock, approve, public page and recheck", async ({
  page,
}, info) => {
  await page.goto("/examples/brew-lane");
  await expect(
    page.getByRole("heading", { name: "Brew Lane Cafe", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".question-row")).toHaveCount(8);
  await expect(
    page.getByText("Sample data", { exact: true }).first(),
  ).toBeVisible();
  await page
    .locator(".fix-item")
    .filter({ hasText: "Your AI-readable page" })
    .getByRole("link", { name: "Edit and approve" })
    .click();
  await expect(page.getByLabel("Draft content")).toBeVisible();
  const original = await page.getByLabel("Draft content").inputValue();
  await page.getByLabel("Draft content").fill(original + "\nOpen 24 hours.");
  await page.getByRole("button", { name: "Approve and publish" }).click();
  await expect(page.getByRole("alert").first()).toBeVisible();
  await expect(
    page.getByRole("link", { name: "View published page" }),
  ).toHaveCount(0);
  await page.getByLabel("Draft content").fill(original);
  await page.getByRole("button", { name: "Approve and publish" }).click();
  await expect(
    page.getByRole("button", { name: "Copy approved content" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "View published page" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Brew Lane Cafe",
  );
  await expect(
    page.getByText("Fictional business. Demonstration page only."),
  ).toBeVisible();
  await page.screenshot({
    path: `test-results/${info.project.name}-public-page.png`,
    fullPage: true,
  });
});
test("zero mentions still useful; keyboard navigation and reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".shader-frame canvas")).toHaveCount(0);
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.goto("/examples/spoke-studio");
  await expect(page.locator(".summary-count")).toContainText("0");
  await expect(
    page.getByText("In about 3 months", { exact: true }),
  ).toHaveCount(5);
  await page.getByRole("button", { name: "Recheck now" }).click();
  await expect(
    page.getByText("Up 0 since the previous check (0 of 40)."),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
});
test("session cannot read another session report", async ({
  page,
  browser,
}) => {
  await page.goto("/examples/atelier-moss");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Atelier Moss",
  );
  const id = new URL(page.url()).pathname.split("/").pop();
  const other = await browser.newContext();
  const response = await other.request.get(
    `http://localhost:3000/api/checks/${id}`,
  );
  expect(response.ok()).toBe(false);
  await other.close();
});
