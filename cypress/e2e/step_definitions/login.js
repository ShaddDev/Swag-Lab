import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";

Given("the user is on the landing page and follows the prompt",()=>{
    loginPage.visitPage()
})

When("the user enters the correct credentials",()=>{
    loginPage.userName()
    loginPage.passWord()
    loginPage.submitBtn()
})

When("the user should be directed to the shop page",()=>{
    loginPage.assertView()
})