import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});

test('complete the challenge', async ({ page }) => {
	await page.goto('/');
	await page.locator('[id="name"]').fill('Name LastName');
	await page.locator('[id="telephone"]').fill('+123456789012');
	await page.locator('[id="email"]').fill('example@email.com');
})