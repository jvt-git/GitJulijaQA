Feature: Shopping Cart

  Scenario: Add products to cart
    Given I am logged in as a standard user
    When I add all products to the cart
    Then the cart badge should show the correct number of products
  