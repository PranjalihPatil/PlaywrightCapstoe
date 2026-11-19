import { test, expect } from '../fixtures/base.fixture';

test.describe('Cart Operations', () => {
  test('should add products to cart and verify', async ({ productsPage, cartPage, page }) => {
    await productsPage.navigate();

    await productsPage.addProductToCart(0);
    await productsPage.clickContinueShopping();
    await productsPage.addProductToCart(1);
    await productsPage.clickViewCartInModal();

    const itemCount = await cartPage.getCartItemCount();
    expect(itemCount).toBe(2);
  });

  test('should remove a product from cart', async ({ productsPage, cartPage, page }) => {
    await productsPage.navigate();

    await productsPage.addProductToCart(0);
    await productsPage.clickViewCartInModal();

    const initialCount = await cartPage.getCartItemCount();
    expect(initialCount).toBe(1);

    await cartPage.removeProduct(0);
    await expect(cartPage.cartRows).toHaveCount(0);
    await expect(page.locator('#empty_cart')).toBeVisible({ timeout: 10000 });
  });
});
