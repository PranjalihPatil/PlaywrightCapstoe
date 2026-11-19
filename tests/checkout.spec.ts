import { test, expect } from '../fixtures/base.fixture';
import users from '../testdata/users.json';
import { generateRandomEmail } from '../utils/helpers';

test.describe('Checkout and Order Placement', () => {
  const testEmail = generateRandomEmail();

  test.beforeEach(async ({ loginPage }) => {
    // Register a new user for checkout
    await loginPage.navigate();
    await loginPage.signup(users.validUser.name, testEmail + Math.random().toString(36).slice(2));
    await loginPage.fillRegistrationForm(users.validUser);
    await loginPage.page.locator('[data-qa="continue-button"]').click();
  });

  test('should complete checkout flow and place order', async ({
    productsPage,
    cartPage,
    checkoutPage,
    page,
  }) => {
    await productsPage.navigate();
    await productsPage.addProductToCart(0);
    await productsPage.clickViewCartInModal();

    await cartPage.clickProceedToCheckout();

    const addressVisible = await checkoutPage.verifyAddressVisible();
    expect(addressVisible).toBe(true);

    await checkoutPage.addComment('Please deliver between 9 AM and 5 PM.');
    await checkoutPage.clickPlaceOrder();

    await checkoutPage.fillPaymentDetails({
      nameOnCard: 'Test User',
      cardNumber: '4111111111111111',
      cvc: '123',
      expiryMonth: '12',
      expiryYear: '2026',
    });

    await expect(
      page.locator('p:has-text("Congratulations! Your order has been confirmed!")')
    ).toBeVisible();
  });
});
