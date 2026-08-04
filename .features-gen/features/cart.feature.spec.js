// Generated from: features\cart.feature
import { test } from "playwright-bdd";

test.describe('Shopping Cart', () => {

  test('Add products to cart', async ({ Given, When, Then, page }) => { 
    await Given('I am logged in as a standard user', null, { page }); 
    await When('I add all products to the cart', null, { page }); 
    await Then('the cart badge should show the correct number of products', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am logged in as a standard user","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I add all products to the cart","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then the cart badge should show the correct number of products","stepMatchArguments":[]}]},
]; // bdd-data-end