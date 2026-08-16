import { test, expect } from '@playwright/test';

test.describe('Guest checkout pricing', () => {
  test('Verify the total price once buy one coffee', async ({ page }) => {
    await page.goto('https://seleniumbase.io/coffee/');
    await expect(page.locator('body')).toContainText('Total: $0.00');

    await page.locator('[data-test="Cafe_Latte"]').click();
    await page.locator('a[href="/coffee/cart"]').click();

    await expect(page.locator('body')).toContainText('Cafe Latte');
    await expect(page.locator('body')).toContainText('Total: $16.00');
    await expect(page.locator('body')).toContainText('$16.00 x 1');
  });
});
