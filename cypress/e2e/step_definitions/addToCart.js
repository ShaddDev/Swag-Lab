import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { addToCartPage } from "@pages/AddToCartPage";
import { cartPage } from "@pages/CartPage";
  
  When('the user adds multiple products to the cart', () => {
    const products = [
      { name: 'Sauce Labs Bike Light', selector: '[data-test="add-to-cart-sauce-labs-bike-light"]' },
      { name: 'Sauce Labs Backpack', selector: '[data-test="add-to-cart-sauce-labs-backpack"]' }
    ];
  
    products.forEach((product) => {
      addToCartPage.addToCart(product.selector);
    });
  });
  
  Then('the user should see all the products in the cart', () => {
    cy.get('.shopping_cart_link').click()
    cartPage.verifyProductCount(2); 
  });