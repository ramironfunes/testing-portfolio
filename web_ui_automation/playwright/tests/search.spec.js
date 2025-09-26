import { test, expect } from '@playwright/test';

test('search on DuckDuckGo (robust)', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.fill('input[name="q"]', 'Playwright testing');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000); // wait a bit for results
  const content = await page.content();
  expect(content).toContain('Playwright');
});
