export class StepPage {
    constructor(page) {
        this.page = page;

    }
   async clickCSS (selector) {
      var buttonFirst = this.page.locator(selector).first().click();
    }
}