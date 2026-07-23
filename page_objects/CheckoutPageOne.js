export class CheckoutPageOne {
    constructor(page) {
        this.page = page;

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.zipCode = page.locator('#postal-code');
        this.checkoutButton = page.locator('#checkout');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
    }
    userAddToChat = async (item, cart) => {
        await this.checkoutButton.click();
        await this.page.waitForURL('https://www.saucedemo.com/checkout-step-one.html');
        await this.firstName.fill('Testas')
        await this.lastName.fill('Testavičius');
        await this.zipCode.fill('LT12345');
        await this.continueButton.click();
        await this.page.waitForURL('https://www.saucedemo.com/checkout-step-two.html');
        await this.page.pause();
    }
}