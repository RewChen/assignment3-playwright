# Guest checkout pricing validation

## Application Overview

Guest checkout pricing validation for the Coffee Cart site, covering single-item, multi-item, and quantity-based total calculations without requiring a registered account.

## Test Scenarios

### 1. Guest checkout pricing

**Seed:** `seed.spec.ts`

#### 1.1. Verify the total price once buy one coffee

**File:** `tests/coffee/verify-total-price-once-buy-one-coffee.spec.ts`

**Steps:**
  1. Open the Coffee Cart page at https://seleniumbase.io/coffee/ from a fresh browser state.
    - expect: The coffee menu is displayed and the cart is empty.
    - expect: The checkout summary shows a total of $0.00.
  2. Click the Buy Item button for Cafe Latte.
    - expect: The item is added to the cart.
    - expect: The cart count increases to reflect the selected item.
  3. Click Cart.
    - expect: The cart page opens with the selected Cafe Latte item visible.
  4. Verify the total price for the cart.
    - expect: The total price matches the Cafe Latte item price exactly.
    - expect: The calculation is correct for a single-unit purchase.

#### 1.2. Verify the total price once buy three coffee

**File:** `tests/coffee/verify-total-price-once-buy-three-coffee.spec.ts`

**Steps:**
  1. Open the Coffee Cart page from a fresh browser state.
    - expect: The menu is loaded and no products are in the cart.
  2. Click Buy Item for Mocha.
    - expect: The Mocha item is added to the cart.
  3. Click Buy Item for Flat White.
    - expect: The Flat White item is added to the cart.
  4. Click Buy Item for Cappuccino.
    - expect: The Cappuccino item is added to the cart.
  5. Click Cart.
    - expect: The cart page shows all three coffee items and their quantities.
  6. Verify the total price for the three items.
    - expect: The total price equals the sum of the Mocha, Flat White, and Cappuccino prices.
    - expect: No item is missing from the total and no discount or quantity error is applied.

#### 1.3. Verify the total price once buy the same kind of coffee 2 unit

**File:** `tests/coffee/verify-total-price-once-buy-same-kind-of-coffee-2-unit.spec.ts`

**Steps:**
  1. Open the Coffee Cart page from a fresh browser state.
    - expect: The coffee menu is displayed and the cart is empty.
  2. Click Buy Item for Americano once to add it to the cart.
    - expect: The Americano item is added to the cart.
  3. Click Cart.
    - expect: The cart page opens showing the Americano item with quantity 1.
  4. Click the Plus button next to the Americano item to increase quantity to 2.
    - expect: The quantity changes from 1 to 2.
    - expect: The cart updates without resetting or duplicating the item.
  5. Verify the total price.
    - expect: The total price is exactly double the single Americano price.
    - expect: The total reflects the quantity increase correctly for two units of the same item.
