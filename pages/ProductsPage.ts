import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly productList: Locator;
  readonly searchedProductsTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.productList = page.locator('.features_items .productinfo');
    this.searchedProductsTitle = page.locator('h2:has-text("Searched Products")');
  }

  async navigate() {
    await this.navigateTo('/products');
  }

  async searchProduct(term: string) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }

  async getProductCount(): Promise<number> {
    return this.productList.count();
  }

  async addProductToCart(index: number) {
    const addToCartButtons = this.page.locator('.features_items .productinfo .add-to-cart');
    await addToCartButtons.nth(index).scrollIntoViewIfNeeded();
    await addToCartButtons.nth(index).click();
  }

  async clickContinueShopping() {
    await this.page.locator('button:has-text("Continue Shopping")').click();
  }

  async clickViewCartInModal() {
    await this.page.locator('#cartModal a[href="/view_cart"]').click();
  }
}
