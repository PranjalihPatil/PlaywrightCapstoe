import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ContactUsPage } from '../pages/ContactUsPage';

type PageFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  contactUsPage: ContactUsPage;
};

export const test = base.extend<PageFixtures>({
  page: async ({ page }, use) => {
    await page.route(
      /google(ads|syndication|tagservices|adservices)|doubleclick|adservice|googlesyndication|adsbygoogle|pagead|googleads|aswift_|partner\.googleadservices/,
      (route) => route.abort()
    );
    await page.addInitScript(() => {
      const style = document.createElement('style');
      style.textContent = 'ins.adsbygoogle, iframe[id^="aswift_"], iframe[title="Advertisement"], #google-ads-iframe, .adsbygoogle { display: none !important; height: 0 !important; visibility: hidden !important; pointer-events: none !important; }';
      document.head.appendChild(style);
    });
    await use(page);
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  },
});

export { expect } from '@playwright/test';
