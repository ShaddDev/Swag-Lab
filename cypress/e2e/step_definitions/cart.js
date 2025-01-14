import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

  
  When('the user adds multiple products to the cart', () => {
    const products = [
      { name: 'Sauce Labs Bike Light', selector: '[data-test="add-to-cart-sauce-labs-bike-light"]' },
    { name: 'Sauce Labs Backpack', selector: '[data-test="add-to-cart-sauce-labs-backpack"]' }
  ];

  products.forEach((product) => {
    cy.get(product.selector).click();  
  });
});

Then('the user should see all the products in the cart', () => {
  cy.get('.shopping_cart_link').click(); 
  cy.get('.cart_item').should('have.length', 2);  
});
  