import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_objects/LoginPage';
import { CartPage } from '../page_objects/CartPage';
import { CheckoutPageOne } from '../page_objects/CheckoutPageOne';
import { CheckoutPageTwo } from '../page_objects/CheckoutPageTwo';
import { LogoutPage } from '../page_objects/LogoutPage';
import { StepPage } from '../page_objects/StepPage';

//??? kaip paleisti atskiram browseryje ka daro kodas???  >   npx playwright test --headed --debug
// const browser = await chromium.launch({
//   headless: false
// });

test.only('pirmas testas', async ({ page }) => {
// await page.goto('https://www.saucedemo.com/');
const loginPage = new LoginPage(page);
const stepPage = new StepPage(page);

await loginPage.userLoginWithPassword('standard_user', 'secret_sauce');

for( let i=0; i<6; i++){
await stepPage.clickCSS('.btn.btn_primary.btn_small.btn_inventory');
await page.pause();
}
});











    // id is inspecto #user-name

    // const userName = page.locator('#user-name');
    // const loginButton = page.locator('#login-button');
    // const userPassword = page.locator('#password');


    // await userName.fill('standard_user');
    // await userPassword.fill('secret_sauce');
    // await loginButton.click();

    // const meniuButton = page.locator('#react-burger-menu-btn');
    // const meniuButtonLogout = page.locator('#logout_sidebar_link');
    // await page.waitForURL('https://www.saucedemo.com/inventory.html');


    // const loginPage = new LoginPage(page);
    // loginPage.userName.fill('secret_sauce');



    // await meniuButton.click();
    // await meniuButtonLogout.click();

    // await page.waitForURL('https://www.saucedemo.com/');
    // . yra klase

    // const bagAddToChatButton = page.locator('#add-to-cart-sauce-labs-backpack');
    // const shoppingChatButton = page.locator('.shopping_cart_link');
    // await bagAddToChatButton.click();
    // await shoppingChatButton.click();
    // await page.waitForURL('https://www.saucedemo.com/cart.html');


//     const checkoutButton = page.locator('#checkout');
//     await checkoutButton.click();
//     await page.waitForURL('https://www.saucedemo.com/checkout-step-one.html');




//     const firstName = page.locator('#first-name');
//     const lastName = page.locator('#last-name');
//     const zipCode = page.locator('#postal-code');
//     const continueButton = page.locator('#continue');

//     const finishButton = page.locator('#finish');

//     await firstName.fill('Testas');
//     await lastName.fill('Testavičius');
//     await zipCode.fill('LT12345');
//     await continueButton.click();
//     await page.waitForURL('https://www.saucedemo.com/checkout-step-two.html');
//     await finishButton.click();
//     await page.waitForURL('https://www.saucedemo.com/checkout-complete.html');
    
    
//     await meniuButton.click();
//     await meniuButtonLogout.click();
//     await page.waitForURL('https://www.saucedemo.com/');

//     await page.pause();



// });
