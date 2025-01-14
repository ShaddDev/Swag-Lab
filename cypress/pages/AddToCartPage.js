class AddToCartPage{
    addToCart(selector) {
        cy.get(selector).click();  // Clicking the add-to-cart button using the selector
      }
}
export const addToCartPage = new AddToCartPage()