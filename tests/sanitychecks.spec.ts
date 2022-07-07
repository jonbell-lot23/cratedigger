import { test, expect } from '@playwright/test';

test('Does the page load', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = page.locator('TITLE');
  await expect(title).toHaveText('Crate Diggah');
});