const { test, expect } = require('@playwright/test');

test('@smoke homepage loads', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
