export class LoginPage {
    constructor(page) {
        this.page = page;

        this.userName = page.locator('#user-name');
        this.userPassword = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }


    userLoginWithPassword = async (userName, userPassword) => {
        await this.page.goto('https://www.saucedemo.com/');

        await this.userName.fill(userName);

        await this.userPassword.fill(userPassword);

        await this.loginButton.click();

        await this.page.waitForURL(
            'https://www.saucedemo.com/inventory.html'
        );
    }
}