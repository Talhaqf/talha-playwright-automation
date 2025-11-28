const { test, expect } = require('@playwright/test');

test('@api get example post', async ({ request }) => {
  const res = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.id).toBe(1);
});
