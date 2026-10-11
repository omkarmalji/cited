import { chromium, expect } from "@playwright/test";
import { execFileSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
async function main() {
  const baseURL = process.env.CITED_DEMO_URL || "http://localhost:3000";
  const directory = "artifacts/demo";
  await mkdir(directory, { recursive: true });
  const scenes = JSON.parse(
    await readFile("docs/DEMO_NARRATION.json", "utf8"),
  ) as { id: string; text: string }[];
  const durations = scenes.map(
    (s) =>
      Number(
        execFileSync(
          "ffprobe",
          [
            "-v",
            "error",
            "-show_entries",
            "format=duration",
            "-of",
            "default=noprint_wrappers=1:nokey=1",
            `${directory}/${s.id}.wav`,
          ],
          { encoding: "utf8" },
        ).trim(),
      ) + 2,
  );
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  try {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      recordVideo: { dir: directory, size: { width: 1440, height: 900 } },
    });
    const page = await context.newPage();
    const wait = async (seconds: number) => page.waitForTimeout(seconds * 1000);
    await page.goto(baseURL);
    await page.locator(".shader-frame canvas").waitFor();
    let checkId = "";
    let original = "";
    for (let i = 0; i < scenes.length; i++) {
      const started = Date.now();
      console.log(`Recording ${scenes[i].id}.`);
      if (i === 1) {
        await page.locator("#examples").scrollIntoViewIfNeeded();
        await wait(5);
        await page
          .locator("#examples")
          .getByRole("link")
          .filter({ hasText: "Brew Lane Cafe" })
          .click();
        await expect(
          page.getByRole("heading", { name: "Brew Lane Cafe", exact: true }),
        ).toBeVisible();
        checkId = new URL(page.url()).pathname.split("/").pop()!;
      }
      if (i === 2) {
        await page.locator(".question-row").nth(3).scrollIntoViewIfNeeded();
        await wait(3);
        await page.locator(".question-row").nth(3).locator("summary").click();
        await wait(6);
        await page.locator(".question-row").nth(3).locator("summary").click();
      }
      if (i === 3) {
        await page
          .getByRole("heading", { name: "Why Juniper Coffee wins." })
          .scrollIntoViewIfNeeded();
        await wait(6);
        const source = page
          .getByRole("link", {
            name: "Source 2: Juniper Coffee: fictional sample source",
          })
          .first();
        const href = await source.getAttribute("href");
        await page.goto(href!);
        await wait(7);
        await page.goto(`${baseURL}/check/${checkId}`);
        await page
          .getByRole("heading", { name: "Your fix pack." })
          .scrollIntoViewIfNeeded();
      }
      if (i === 4) {
        await page
          .locator(".fix-item")
          .filter({ hasText: "Your AI-readable page" })
          .getByRole("link", { name: "Edit and approve" })
          .click();
        await expect(page.getByLabel("Draft content")).toBeVisible();
        original = await page.getByLabel("Draft content").inputValue();
        await wait(3);
        await page
          .getByLabel("Draft content")
          .fill(original + "\nOpen 24 hours.");
        await page.getByRole("button", { name: "Approve and publish" }).click();
        await page.getByRole("alert").first().scrollIntoViewIfNeeded();
        await wait(6);
        await page.getByLabel("Draft content").fill(original);
        await page.getByRole("button", { name: "Approve and publish" }).click();
        await expect(
          page.getByRole("link", { name: "View published page" }),
        ).toBeVisible();
      }
      if (i === 5) {
        await page.getByRole("link", { name: "View published page" }).click();
        await expect(page.getByRole("heading", { level: 1 })).toHaveText(
          "Brew Lane Cafe",
        );
      }
      if (i === 6) {
        await page.goto(baseURL);
        await page.locator(".shader-frame canvas").waitFor();
      }
      await wait(Math.max(0, durations[i] - (Date.now() - started) / 1000));
    }
    const video = page.video()!;
    await context.close();
    const path = await video.path();
    await browser.close();
    await writeFile(
      `${directory}/timeline.json`,
      JSON.stringify(
        {
          video: path,
          scenes: scenes.map((s, i) => ({ ...s, duration: durations[i] })),
        },
        null,
        2,
      ),
    );
    console.log(`Recording ready: ${path}`);
  } finally {
    await browser.close();
  }
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
