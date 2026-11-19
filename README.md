# Playwright E-Commerce Automation Framework

## Application Under Test
https://automationexercise.com/

## Framework Structure

```
pages/              Page Object Model classes
fixtures/           Custom Playwright fixtures
tests/              Test spec files
utils/              Reusable utility functions
testdata/           External test data (JSON)
config/             Environment configuration
reports/            HTML test reports (generated)
```

## Page Objects

| Page             | Responsibility                              |
|------------------|---------------------------------------------|
| BasePage         | Common navigation and page utilities        |
| HomePage         | Header nav, logged-in state, product grid   |
| LoginPage        | Login form, signup form, registration form  |
| ProductsPage     | Product search, add to cart                 |
| CartPage         | Cart items, remove product, proceed to checkout |
| CheckoutPage     | Address verification, payment, order placement |
| ContactUsPage    | Contact form fill and submit                |

## Test Coverage

| Spec File               | Test Cases                                      | Covers                              |
|-------------------------|-------------------------------------------------|--------------------------------------|
| auth.spec.ts            | Register, login (valid + invalid), logout        | Authentication, data-driven testing  |
| productSearch.spec.ts   | Search products, network interception/mocking    | Search, network mocking              |
| cart.spec.ts            | Add to cart, remove from cart                    | Cart operations                      |
| checkout.spec.ts        | Full checkout and order placement                | Checkout flow, order validation      |
| contactUs.spec.ts       | Submit contact form                              | Contact Us form validation           |
| accessibility.spec.ts   | axe-core audit on home page                      | Accessibility testing                |
| visualRegression.spec.ts| Screenshot comparison of home page               | Visual regression testing            |

## Advanced Features

- **Page Object Model**: All page interactions abstracted into reusable classes
- **Custom Fixtures**: Page objects injected via Playwright fixtures (`fixtures/base.fixture.ts`)
- **Data-Driven Testing**: Invalid login scenarios driven from `testdata/users.json`
- **Network Interception**: Request interception to verify search payload; API response mocking
- **Trace Viewer**: Traces captured on first retry (`trace: 'on-first-retry'`)
- **Cross-Browser**: Chromium, Firefox, and WebKit configured in `playwright.config.ts`
- **Accessibility**: axe-core integration to detect critical violations
- **Visual Regression**: Screenshot comparison using `toHaveScreenshot()`

## Running Tests

```bash
# Run all tests
npx playwright test

# Run on a specific browser
npx playwright test --project chromium

# Run a specific test file
npx playwright test tests/auth.spec.ts

# Run in headed mode
npx playwright test --headed

# Run with UI mode
npx playwright test --ui

# View HTML report
npx playwright show-report reports
```

## Debugging

```bash
# Run with trace viewer
npx playwright test --trace on

# Debug a specific test
npx playwright test tests/auth.spec.ts --debug

# View trace file
npx playwright show-trace trace.zip
```

## Dependencies

- `@playwright/test` — Playwright test runner
- `@axe-core/playwright` — Accessibility testing
