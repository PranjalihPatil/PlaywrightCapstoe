import { test, expect } from '@playwright/test';

test.describe('Login Page - Basic Validations', () => {

  test('should navigate to home page and validate title and URL', async ({ page }) => {
    await page.goto('https://automationexercise.com');

    await expect(page).toHaveURL('https://automationexercise.com/');
    await expect(page).toHaveTitle('Automation Exercise');
  });

  test('should navigate to login page and validate title and URL', async ({ page }) => {
    await page.goto('https://automationexercise.com');

    await page.getByRole('link', { name: 'Signup / Login' }).click();

    await expect(page).toHaveURL('https://automationexercise.com/login');
    await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
  });

  test('should display Login to your account heading on login page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');

    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
  });

  test('should display New User Signup heading on login page', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');

    await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
  });

  test('should display login form fields and button', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');

    await expect(page.getByPlaceholder('Email Address').first()).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });

  test('should display signup form fields and button', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');

    await expect(page.getByPlaceholder('Name')).toBeVisible();
    await expect(page.getByPlaceholder('Email Address').last()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Signup' })).toBeVisible();
  });

});
