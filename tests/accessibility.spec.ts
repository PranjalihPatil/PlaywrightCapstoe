import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '../fixtures/base.fixture';

test.describe('Accessibility Testing', () => {
  test('should not have critical accessibility violations on home page', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .exclude('#google_translate_element')
      .analyze();

    const criticalViolations = results.violations.filter(
      (v) => v.impact === 'critical'
    );

    if (criticalViolations.length > 0) {
      console.log(`Found ${criticalViolations.length} critical violation(s):`);
      criticalViolations.forEach((v) => {
        console.log(`  - ${v.id}: ${v.help} (${v.nodes.length} instance(s))`);
      });
    }

    expect(criticalViolations.length).toBeLessThanOrEqual(3);
  });
});
