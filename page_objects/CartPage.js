export class CartPage {
    constructor(page) {
        this.page = page;

        // this.itemOne = page.locator('#add-to-cart-sauce-labs-backpack');

        // Suranda visus "Add to cart" mygtukus
        this.addToCartButtons = page.locator('button[id^="add-to-cart"]');
        this.shoppingCartBadge = page.locator('span.shopping_cart_badge');
        this.shoppingCart = page.locator('.shopping_cart_link');
    }


    userAddToCart = async () => {

        const itemCount = await this.addToCartButtons.count();
        console.log(itemCount);

        //  ...... prideda tiek kiek yra.....
        for (let i = 0; i < itemCount; i++) {
            await this.addToCartButtons.first().click();
        }

        //  ...... patikrina ar badge rodo tokį pat skaičių kiek yra item.....
        return await this.shoppingCartBadge.textContent();


        // await this.itemOne.click();
        await this.shoppingCart.click();
        await this.page.waitForURL('https://www.saucedemo.com/cart.html');
       expect(await cartPage.getCartBadgeText()).toBe(itemCount.toString());
        await this.page.pause();
        
    }
}
