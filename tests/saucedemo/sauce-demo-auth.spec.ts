import { test, expect, type Page } from '@playwright/test';

const APP_URL = 'https://www.saucedemo.com/';
const VALID_USER = 'standard_user';
const VALID_PASSWORD = 'secret_sauce';

async function login(page: Page, username: string, password: string) {
  await page.goto(APP_URL);
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
}

test.describe('SauceDemo authentication flows', () => {
  test('Verify login with valid credentials', async ({ page }) => {
    await login(page, VALID_USER, VALID_PASSWORD);
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('Verify login with incorrect password', async ({ page }) => {
    await page.goto(APP_URL);
    await page.locator('[data-test="username"]').fill(VALID_USER);
    await page.locator('[data-test="password"]').fill('wrong_password');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText(/Username and password do not match any user/i);
    await expect(page).toHaveURL(/https:\/\/www\.saucedemo\.com\/?$/);
  });

  test('Verify logout functionality', async ({ page }) => {
    await login(page, VALID_USER, VALID_PASSWORD);
    await expect(page).toHaveURL(/\/inventory\.html$/);

    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();

    await expect(page).toHaveURL(/https:\/\/www\.saucedemo\.com\/?$/);
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });

  test('Verify login for locked out user', async ({ page }) => {
    await page.goto(APP_URL);
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill(VALID_PASSWORD);
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText(/locked out/i);
    await expect(page).toHaveURL(/https:\/\/www\.saucedemo\.com\/?$/);
  });
});
