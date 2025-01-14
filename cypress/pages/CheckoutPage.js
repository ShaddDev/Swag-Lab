class CheckoutPage{
    checkoutForm = {
        check: ()=> cy.get('#checkout'),
        first: ()=> cy.get('#first-name'),
        last: ()=> cy.get('#last-name'),
        postal: ()=> cy.get('#postal-code'),
        cont: ()=> cy.get('#continue'),
        finish: ()=> cy.get('#finish'),
        assert: ()=> cy.contains('Thank you for your order!')
    }

    checkoutbtn(){
        this.checkoutForm.check().click()
    }

    firstName(){
        this.checkoutForm.first().type("Ayo")
    }

    lastName(){
        this.checkoutForm.last().type("Tunde")
    }

    postalCode(){
        this.checkoutForm.postal().type("100001")
    }

    continue(){
        this.checkoutForm.cont().click()
    }

    submitBtn(){
        this.checkoutForm.finish().click()
    }

    assertion(){
        this.checkoutForm.assert().should('be.visible')
    }

}

export const checkoutPage = new CheckoutPage