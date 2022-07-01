import BasePage from "./basePage"

export default class Loginpage extends BasePage{
    static login(username, password){
        cy.login(username, password)
    }

    static clickForgotPasswordLink(){
        cy.contains('Forgot your password ?').click()
    }

    static displayErrorMessage(){
        //cy.get('.alert-error').should('be.visible')
        cy.isVisible('.alert-error')
    }
}