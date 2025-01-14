import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { checkoutPage } from "@pages/CheckoutPage";

Then('the user should be able to checkout successfully',()=>{
    checkoutPage.checkoutbtn()
    checkoutPage.firstName()
    checkoutPage.lastName()
    checkoutPage.postalCode()
    checkoutPage.continue()
    checkoutPage.submitBtn()
    checkoutPage.assertion()
})