const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');

const { LoginPage } = require('../page_objects/LoginPage');
const { CartPage } = require('../page_objects/CartPage');

const { Given, When, Then } = createBdd();

Given('I am logged in as a standard user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.userLoginWithPassword(
        'standard_user',
        'secret_sauce'
    );
});

When('I add all products to the cart', async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.userAddToCart();
});

Then('the cart badge should show the correct number of products', async ({ page }) => {
    const cartPage = new CartPage(page);

    const badgeText = await cartPage.getCartBadgeText();
    const itemCount = await cartPage.addToCartButtons.count();

    expect(badgeText).toBe(itemCount.toString());
});

