class LoginPage {
    elements = {
        visit:()=> cy.visit("/"),
        user:()=> cy.get('#user-name'),
        pass:()=> cy.get('#password'),
        submit:()=> cy.get('#login-button'),
        assert:()=> cy.get('.app_logo')
    }


    visitPage(){
        this.elements.visit()
    }

    userName(){
        this.elements.user().type(Cypress.env('user'))
    }

    passWord(){
        this.elements.pass().type(Cypress.env('pass'))
    }

    submitBtn(){
        this.elements.submit().click()
    }
    
    assertView(){
        this.elements.assert().should("be.visible")
    }

}

export const loginPage = new LoginPage();