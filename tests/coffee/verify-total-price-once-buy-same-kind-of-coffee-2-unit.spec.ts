import { test, expect } from '@playwright/test';

// spec: specs/guest-checkout-plan.md
// seed: seed.spec.ts

test.describe('Guest checkout pricing', () => {
  test('Verify the total price once buy the same kind of coffee 2 unit', async ({ page }) => {
    // 1. Open the Coffee Cart page from a fresh browser state.
    await page.goto('https://seleniumbase.io/coffee/');
    await expect(page.locator('body')).toContainText('Total: $0.00');

    // 2. Click Buy Item for Americano once to add it to the cart.
    await page.locator('[data-test="Americano"]').click();

    // 3. Click Cart.
    await page.locator('a[href="/coffee/cart"]').click();
    await expect(page.locator('body')).toContainText('Americano');
    await expect(page.locator('body')).toContainText('$7.00 x 1');

    // 4. Click the Plus button next to the Americano item to increase quantity to 2.
    await page.getByRole('button', { name: 'Add one Americano' }).click();

    // 5. Verify the total price.
    await expect(page.locator('body')).toContainText('$14.00');
    await expect(page.locator('body')).toContainText('$7.00 x 2');
  });
});
