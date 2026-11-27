import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly loginEmail: Locator;
  readonly loginPassword: Locator;
  readonly loginButton: Locator;
  readonly loginErrorMessage: Locator;

  readonly signupName: Locator;
  readonly signupEmail: Locator;
  readonly signupButton: Locator;
  readonly newUserSignupHeading: Locator;
  readonly enterAccountInfoHeading: Locator;
  readonly newsletterCheckbox: Locator;
  readonly specialOffersCheckbox: Locator;

  constructor(page: Page) {
    super(page);
    this.loginEmail = page.locator('[data-qa="login-email"]');
    this.loginPassword = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.loginErrorMessage = page.locator('p:has-text("Your email or password is incorrect!")');

    this.signupName = page.locator('[data-qa="signup-name"]');
    this.signupEmail = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
    this.newUserSignupHeading = page.getByText('New User Signup!');
    this.enterAccountInfoHeading = page.getByText('Enter Account Information');
    this.newsletterCheckbox = page.locator('#newsletter');
    this.specialOffersCheckbox = page.locator('#optin');
  }

  async navigate() {
    await this.navigateTo('/login');
  }

  async login(email: string, password: string) {
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
  }

  async signup(name: string, email: string) {
    await this.signupName.fill(name);
    await this.signupEmail.fill(email);
    await this.signupButton.click();
  }

  async fillRegistrationForm(userData: {
    password: string;
    firstName: string;
    lastName: string;
    company: string;
    address: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
  }) {
    await this.page.locator('#id_gender1').check();
    await this.page.locator('[data-qa="password"]').fill(userData.password);
    await this.page.locator('[data-qa="days"]').selectOption('10');
    await this.page.locator('[data-qa="months"]').selectOption('June');
    await this.page.locator('[data-qa="years"]').selectOption('1990');
    await this.newsletterCheckbox.check();
    await this.specialOffersCheckbox.check();
    await this.page.locator('[data-qa="first_name"]').fill(userData.firstName);
    await this.page.locator('[data-qa="last_name"]').fill(userData.lastName);
    await this.page.locator('[data-qa="company"]').fill(userData.company);
    await this.page.locator('[data-qa="address"]').fill(userData.address);
    await this.page.locator('[data-qa="address2"]').fill(userData.address2);
    await this.page.locator('[data-qa="country"]').selectOption(userData.country);
    await this.page.locator('[data-qa="state"]').fill(userData.state);
    await this.page.locator('[data-qa="city"]').fill(userData.city);
    await this.page.locator('[data-qa="zipcode"]').fill(userData.zipcode);
    await this.page.locator('[data-qa="mobile_number"]').fill(userData.mobileNumber);
    await this.page.locator('[data-qa="create-account"]').click();
  }
}
