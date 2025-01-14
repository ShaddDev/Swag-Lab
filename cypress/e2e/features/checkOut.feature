Feature: User Checkout

As a user, I want to add items to my cart and successfully proceed to checkout on the Swag Labs app

Scenario: Successful login with valid credentials and adding to cart
    Given the user is on the landing page and follows the prompt
    When the user enters the correct credentials
    And the user should be directed to the shop page
    And the user adds multiple products to the cart
    And the user should see all the products in the cart
    Then the user should be able to checkout successfully