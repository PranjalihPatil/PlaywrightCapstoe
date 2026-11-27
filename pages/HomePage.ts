import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly signupLoginLink: Locator;
  readonly loggedInUser: Locator;
  readonly logoutLink: Locator;
  readonly deleteAccountLink: Locator;
  readonly productCards: Locator;
  readonly cartLink: Locator;
  readonly contactUsLink: Locator;

  constructor(page: Page) {
    super(page);
    this.signupLoginLink = page.locator('a[href="/login"]');
    this.loggedInUser = page.locator('a:has-text("Logged in as")');
    this.logoutLink = page.locator('a[href="/logout"]');
    this.deleteAccountLink = page.locator('a[href="/delete_account"]');
    this.productCards = page.locator('.features_items .col-sm-4');
    this.cartLink = page.locator('a[href="/view_cart"]').first();
    this.contactUsLink = page.locator('a[href="/contact_us"]');
  }

  async navigate() {
    await this.navigateTo('/');
  }

  async getLoggedInUsername(): Promise<string> {
    const text = await this.loggedInUser.innerText();
    return text.replace('Logged in as ', '').trim();
  }

  async clickSignupLogin() {
    await this.signupLoginLink.click();
  }

  async clickLogout() {
    await this.logoutLink.click();
  }

  async clickCart() {
    await this.cartLink.click();
  }

  async clickDeleteAccount() {
    await this.deleteAccountLink.click();
  }
}
