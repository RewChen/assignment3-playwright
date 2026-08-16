import { test, expect } from '@playwright/test';

test.describe('Coffee Shop guest checkout pricing', () => {
  test('Verify total price once buy one coffee', async ({ page }) => {
    await page.goto('https://seleniumbase.io/coffee/');
    await expect(page.locator('body')).toContainText('Total: $0.00');

    await page.locator('[data-test="Cafe_Latte"]').click();
    await page.locator('a[href="/coffee/cart"]').click();

    await expect(page.locator('body')).toContainText('Cafe Latte');
    await expect(page.locator('body')).toContainText('Total: $16.00');
    await expect(page.locator('body')).toContainText('$16.00 x 1');
  });

  test('Verify total price once buy three coffee', async ({ page }) => {
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

  test('Verify total price once buy the same kind of coffee 2 unit', async ({ page }) => {
    await page.goto('https://seleniumbase.io/coffee/');
    await expect(page.locator('body')).toContainText('Total: $0.00');

    await page.locator('[data-test="Americano"]').click();
    await page.locator('a[href="/coffee/cart"]').click();

    await expect(page.locator('body')).toContainText('Americano');
    await expect(page.locator('body')).toContainText('$7.00 x 1');

    await page.getByRole('button', { name: 'Add one Americano' }).click();

    await expect(page.locator('body')).toContainText('Total: $14.00');
    await expect(page.locator('body')).toContainText('$7.00 x 2');
  });
});
