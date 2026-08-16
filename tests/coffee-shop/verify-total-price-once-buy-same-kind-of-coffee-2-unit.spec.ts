import { test, expect } from '@playwright/test';

test.describe('Guest checkout pricing', () => {
  test('Verify the total price once buy the same kind of coffee 2 unit', async ({ page }) => {
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
