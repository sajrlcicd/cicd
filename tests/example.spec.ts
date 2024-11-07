import { test, expect } from '@playwright/test';

test('should display home page correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = await page.title();
  expect(title).toBe('Acme Dashboard'); // Byt till förväntad titel på din app
});
