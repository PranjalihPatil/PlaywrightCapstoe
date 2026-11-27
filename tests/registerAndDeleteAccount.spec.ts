import { test, expect } from '../fixtures/base.fixture';
import users from '../testdata/users.json';
import { generateRandomEmail } from '../utils/helpers';

test.describe('Register User and Delete Account', () => {
  test('should register a new user and delete the account', async ({ homePage, loginPage, page }) => {
    const userName = users.validUser.name;
    const userEmail = generateRandomEmail();

    await homePage.navigate();
    await expect(page).toHaveTitle(/Automation Exercise/);

    await homePage.clickSignupLogin();
    await expect(loginPage.newUserSignupHeading).toBeVisible();

    await loginPage.signup(userName, userEmail);
    await expect(loginPage.enterAccountInfoHeading).toBeVisible();

    await loginPage.fillRegistrationForm(users.validUser);

    await expect(page.locator('[data-qa="account-created"]')).toBeVisible();
    await page.locator('[data-qa="continue-button"]').click();

    await expect(page.locator('a:has-text("Logged in as")')).toContainText(userName);

    await homePage.clickDeleteAccount();

    await expect(page.getByText('Account Deleted!')).toBeVisible();
    await page.locator('[data-qa="continue-button"]').click();
  });
});
