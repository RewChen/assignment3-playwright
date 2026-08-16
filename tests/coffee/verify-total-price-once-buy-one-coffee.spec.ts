import { test, expect } from '@playwright/test';

// spec: specs/guest-checkout-plan.md
// seed: seed.spec.ts

test.describe('Guest checkout pricing', () => {
  test('Verify the total price once buy one coffee', async ({ page }) => {
    // 1. Open the Coffee Cart page at https://seleniumbase.io/coffee/ from a fresh browser state.
    await page.goto('https://seleniumbase.io/coffee/');
    await expect(page.locator('body')).toContainText('Total: $0.00');

    // 2. Click the Buy Item button for Cafe Latte.
    await page.locator('[data-test="Cafe_Latte"]').click();

    // 3. Click Cart.
    await page.locator('a[href="/coffee/cart"]').click();

    // 4. Verify the total price for the cart.
    await expect(page.locator('body')).toContainText('Cafe Latte');
    await expect(page.locator('body')).toContainText('Total: $16.00');
    await expect(page.locator('body')).toContainText('$16.00 x 1');
  });
});
