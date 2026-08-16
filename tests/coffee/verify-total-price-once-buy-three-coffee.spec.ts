import { test, expect } from '@playwright/test';

// spec: specs/guest-checkout-plan.md
// seed: seed.spec.ts

test.describe('Guest checkout pricing', () => {
  test('Verify the total price once buy three coffee', async ({ page }) => {
    // 1. Open the Coffee Cart page from a fresh browser state.
    await page.goto('https://seleniumbase.io/coffee/');
    await expect(page.locator('body')).toContainText('Total: $0.00');

    // 2. Click Buy Item for Mocha.
    await page.locator('[data-test="Mocha"]').click();

    // 3. Click Buy Item for Flat White.
    await page.locator('[data-test="Flat_White"]').click();

    // 4. Click Buy Item for Cappuccino.
    await page.locator('[data-test="Cappuccino"]').click();

    // 5. Click Cart.
    await page.locator('a[href="/coffee/cart"]').click();

    // 6. Verify the total price for the three items.
    await expect(page.locator('body')).toContainText('Mocha');
    await expect(page.locator('body')).toContainText('Flat White');
    await expect(page.locator('body')).toContainText('Cappuccino');
    await expect(page.locator('body')).toContainText('Total: $45.00');
  });
});
