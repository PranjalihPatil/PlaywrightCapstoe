import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly cartTable: Locator;
  readonly cartRows: Locator;
  readonly proceedToCheckout: Locator;
  readonly emptyCartMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.cartTable = page.locator('#cart_info_table');
    this.cartRows = page.locator('#cart_info_table tbody tr');
    this.proceedToCheckout = page.locator('.check_out');
    this.emptyCartMessage = page.locator('#empty_cart');
  }

  async navigate() {
    await this.navigateTo('/view_cart');
  }

  async getCartItemCount(): Promise<number> {
    return this.cartRows.count();
  }

  async removeProduct(index: number) {
    await this.cartRows.nth(index).locator('.cart_quantity_delete').click();
  }

  async getProductName(index: number): Promise<string> {
    return this.cartRows.nth(index).locator('.cart_description h4 a').innerText();
  }

  async clickProceedToCheckout() {
    await this.proceedToCheckout.click();
  }
}
