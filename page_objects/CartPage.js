export class CartPage {
    constructor(page) {
        this.page = page;

        this.itemOne = page.locator('#add-to-cart-sauce-labs-backpack');
        this.shoppingChat = page.locator('.shopping_cart_link');
    }
    userAddToChat = async (item, cart) => {
        await this.itemOne.click();
        await this.shoppingChat.click();
        await this.page.waitForURL('https://www.saucedemo.com/cart.html');
        await this.page.pause();
    }
}
