import { test, expect } from '@playwright/test';

test.describe('Smoke - mobile device', () => {
  test('mobile header nav and primary CTA stay accessible on home', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header nav')).toBeVisible();
    await expect(page.getByRole('link', { name: /give/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /watch live/i })).toBeVisible();
  });

  test('visit page loads key content and CTA', async ({ page }) => {
    await page.goto('/visit');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('main')).toContainText(/parking|directions|address/i);
    await expect(page.getByRole('link', { name: /give/i })).toBeVisible();
  });
});
