Feature: Add to Cart

As a user, I want to add items to my cart and successfully proceed to checkout on the Swag Labs app

Scenario: Successful login with valid credentials and adding to cart
    Given the user is on the landing page and follows the prompt
    When the user enters the correct credentials
    And the user should be directed to the shop page
    And the user adds multiple products to the cart
    Then the user should see all the products in the cart
    

#   Scenario: Adding items to the cart and completing checkout
#     # Given the user selects an item and adds it to the cart
#     When the user adds multiple products to the cart
#     # And the user views the cart and proceeds to the checkout page
#     # And the user enters valid shipping and payment information
#     Then the user should see all the products in the cart