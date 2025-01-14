class CartPage{
    verifyProductCount(expectedCount) {
        cy.get('.cart_item').should('have.length', expectedCount);  // Verify product count
      }
}

export const cartPage = new CartPage()