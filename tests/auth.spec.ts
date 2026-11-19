import { test, expect } from '../fixtures/base.fixture';
import users from '../testdata/users.json';
import { generateRandomEmail } from '../utils/helpers';

test.describe.serial('User Registration, Login and Logout', () => {
  const testEmail = generateRandomEmail();

  test('should register a new user and verify account creation', async ({ loginPage, page }) => {
    await loginPage.navigate();
    await loginPage.signup(users.validUser.name, testEmail);
    await loginPage.fillRegistrationForm(users.validUser);

    await expect(page.locator('[data-qa="account-created"]')).toBeVisible();
    await page.locator('[data-qa="continue-button"]').click();
    await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();
  });

  test('should login with valid credentials', async ({ loginPage, page }) => {
    await loginPage.navigate();
    await loginPage.login(testEmail, users.validUser.password);

    await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();
  });

  test('should logout successfully', async ({ loginPage, homePage, page }) => {
    await loginPage.navigate();
    await loginPage.login(testEmail, users.validUser.password);
    await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();

    await homePage.clickLogout();
    await expect(loginPage.loginEmail).toBeVisible();
  });

  // // Data-driven test for invalid login
  // users.invalidLogins.forEach((data) => {
  //   test(`should show error for ${data.description}`, async ({ loginPage }) => {
  //     await loginPage.navigate();
  //     await loginPage.login(data.email, data.password);
  //
  //     await expect(loginPage.loginErrorMessage).toBeVisible();
  //   });
  // });
});
