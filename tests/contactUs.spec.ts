import { test, expect } from '../fixtures/base.fixture';
import contactData from '../testdata/contactUs.json';

test.describe('Contact Us Form', () => {
  test('should submit contact us form and verify success', async ({ contactUsPage, page }) => {
    await contactUsPage.navigate();
    await contactUsPage.fillForm(contactData);

    // Handle the browser confirm dialog on submit
    page.on('dialog', (dialog) => dialog.accept());

    await contactUsPage.submitForm();

    await expect(contactUsPage.successMessage).toBeVisible();
  });
});
