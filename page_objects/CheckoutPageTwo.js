export class CheckoutPageTwo {
    constructor(page) {
        this.page = page;

        this.finishButton = page.locator('#finish');
    }
    userFinishCheckout = async () => {
        await this.finishButton.click();
        await this.page.waitForURL('https://www.saucedemo.com/checkout-complete.html');
        await this.page.pause();
    }
}    
