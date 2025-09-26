import { test, expect } from '@playwright/test';

test('valid login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type=submit]');
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});

test('invalid login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'invalid');
  await page.fill('#password', 'invalid');
  await page.click('button[type=submit]');
  await expect(page.locator('#flash')).toContainText('Your username is invalid!');
});
