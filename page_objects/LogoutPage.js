export class LogoutPage {
    constructor(page) {
        this.page = page;

        this.meniuButton = page.locator('#react-burger-menu-btn');
        this.meniuButtonLogout = page.locator('#logout_sidebar_link');
    }
    userLogout = async (userName, userPassword) => {
        await this.meniuButton.click();
        await this.meniuButtonLogout.click();
        await this.page.waitForURL('https://www.saucedemo.com/');
        await this.page.pause();
    }
}