import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.pocketsmith.com/
  await page.goto('https://www.pocketsmith.com/');

  // Click text=SIGN IN >> nth=1
  await page.locator('text=SIGN IN').nth(1).click();
  await expect(page).toHaveURL('https://my.pocketsmith.com/login');

  // Click [placeholder="Username or Email"]
  await page.locator('[placeholder="Username or Email"]').click();

  // Click [placeholder="Username or Email"]
  await page.locator('[placeholder="Username or Email"]').click();

  // Fill [placeholder="Username or Email"]
  await page.locator('[placeholder="Username or Email"]').fill('delightfuljon');

  // Press Tab
  await page.locator('[placeholder="Username or Email"]').press('Tab');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('pMake-things-better8');

  // Check input[type="checkbox"]
  await page.locator('input[type="checkbox"]').check();

  // Click input:has-text("SIGN IN")
  await page.locator('input:has-text("SIGN IN")').click();
  const balance = await expect(page).toHaveURL('https://my.pocketsmith.com/dashboard')
  {
    await page.locator('text=Total balance').click();
    console.log("I connected to Pocketsmith, yay");  
  }

  
});