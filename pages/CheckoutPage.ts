import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  readonly addressDetails: Locator;
  readonly orderTable: Locator;
  readonly commentArea: Locator;
  readonly placeOrderButton: Locator;

  readonly nameOnCard: Locator;
  readonly cardNumber: Locator;
  readonly cvc: Locator;
  readonly expiryMonth: Locator;
  readonly expiryYear: Locator;
  readonly payButton: Locator;
  readonly orderConfirmation: Locator;

  constructor(page: Page) {
    super(page);
    this.addressDetails = page.locator('#address_delivery');
    this.orderTable = page.locator('#cart_info');
    this.commentArea = page.locator('textarea.form-control');
    this.placeOrderButton = page.locator('a:has-text("Place Order")');

    this.nameOnCard = page.locator('[data-qa="name-on-card"]');
    this.cardNumber = page.locator('[data-qa="card-number"]');
    this.cvc = page.locator('[data-qa="cvc"]');
    this.expiryMonth = page.locator('[data-qa="expiry-month"]');
    this.expiryYear = page.locator('[data-qa="expiry-year"]');
    this.payButton = page.locator('[data-qa="pay-button"]');
    this.orderConfirmation = page.locator('[data-qa="order-placed"]');
  }

  async verifyAddressVisible(): Promise<boolean> {
    return this.addressDetails.isVisible();
  }

  async addComment(comment: string) {
    await this.commentArea.fill(comment);
  }

  async clickPlaceOrder() {
    await this.placeOrderButton.click();
  }

  async fillPaymentDetails(payment: {
    nameOnCard: string;
    cardNumber: string;
    cvc: string;
    expiryMonth: string;
    expiryYear: string;
  }) {
    await this.nameOnCard.fill(payment.nameOnCard);
    await this.cardNumber.fill(payment.cardNumber);
    await this.cvc.fill(payment.cvc);
    await this.expiryMonth.fill(payment.expiryMonth);
    await this.expiryYear.fill(payment.expiryYear);
    await this.payButton.click();
  }
}
