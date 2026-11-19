import { test, expect } from '../fixtures/base.fixture';

test.describe('Product Search', () => {
  test('should search for a product and display relevant results', async ({ productsPage }) => {
    await productsPage.navigate();
    await productsPage.searchProduct('top');

    await expect(productsPage.searchedProductsTitle).toBeVisible();
    const count = await productsPage.getProductCount();
    expect(count).toBeGreaterThan(0);
  });

  // Network interception: intercept search and verify request
  test('should intercept product search network request', async ({ productsPage, page }) => {
    await productsPage.navigate();

    let capturedSearchUrl = '';
    page.on('request', (request) => {
      if (request.url().includes('/products') && request.url().includes('search=')) {
        capturedSearchUrl = request.url();
      }
    });

    await productsPage.searchProduct('tshirt');
    await expect(productsPage.searchedProductsTitle).toBeVisible();

    expect(capturedSearchUrl).toContain('search=tshirt');
  });
});

test.describe('Network Mocking', () => {
  test('should mock product list API response', async ({ page }) => {
    const mockResponse = {
      responseCode: 200,
      products: [
        {
          id: 1,
          name: 'Mock Product',
          price: 'Rs. 500',
          brand: 'MockBrand',
          category: { category: 'Tops' },
        },
      ],
    };

    await page.route('**/api/productsList', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockResponse),
      });
    });

    await page.goto('/');

    const body = await page.evaluate(async () => {
      const res = await fetch('/api/productsList');
      return res.json();
    });

    expect(body.responseCode).toBe(200);
    expect(body.products).toHaveLength(1);
    expect(body.products[0].name).toBe('Mock Product');
  });
});
