import { test, expect } from '@playwright/test';

test('Confirm page load', async ({ page }) => {
  await page.goto('http://localhost:3000');
});