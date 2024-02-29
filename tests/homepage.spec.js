import { firefox, test, expect } from "@playwright/test";

test("React Demo page test", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/dist");

  const counterButton = page.locator("text=Counter");
  await expect(counterButton).toBeVisible();
  await counterButton.click();

  const postsButton = page.locator("text=Posts");
  await expect(postsButton).toBeVisible();
  await postsButton.click();
});

test("Google page test", async () => {
  const browsers = await firefox.launch();
  const page = await browsers.newPage();
  await page.goto("https://google.com");
  const searchInput = await page.$('input[name="q"]');
  await searchInput?.type("Playwright testing");
  await page.keyboard.press("Enter");

  await page.screenshot({ path: `google.png` });
});