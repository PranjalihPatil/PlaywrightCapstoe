import { test, expect } from '../fixtures/base.fixture';

test.describe('Visual Regression Testing', () => {
  test('should match home page visual snapshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.evaluate(() => {
      document.querySelectorAll('iframe, #slider-carousel, .carousel-inner').forEach(
        (el) => (el as HTMLElement).style.visibility = 'hidden'
      );
    });

    await expect(page).toHaveScreenshot('home-page.png', {
      maxDiffPixelRatio: 0.05,
      fullPage: false,
    });
  });
});
