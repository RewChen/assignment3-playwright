import { test, expect } from '@playwright/test';

test.describe('Guest checkout pricing', () => {
  test('Verify the total price once buy three coffee', async ({ page }) => {
    await page.goto('https://seleniumbase.io/coffee/');
    await expect(page.locator('body')).toContainText('Total: $0.00');

    await page.locator('[data-test="Mocha"]').click();
    await page.locator('[data-test="Flat_White"]').click();
    await page.locator('[data-test="Cappuccino"]').click();

    await page.locator('a[href="/coffee/cart"]').click();

    await expect(page.locator('body')).toContainText('Mocha');
    await expect(page.locator('body')).toContainText('Flat White');
    await expect(page.locator('body')).toContainText('Cappuccino');
    await expect(page.locator('body')).toContainText('Total: $45.00');
  });
});
