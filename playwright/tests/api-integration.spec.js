import { test, expect } from '@playwright/test';

test('API integration with DummyJSON', async ({ request }) => {
  const response = await request.get('https://dummyjson.com/products/1');
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data).toHaveProperty('id', 1);
  expect(data).toHaveProperty('title');
});
