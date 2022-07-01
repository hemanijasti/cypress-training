export default class Navbar{

    static clickOnLogo(){
        cy.get('#nava').click()
    }

    static clickHome() {
        cy.contains('Home').click()
    }
    
    static clickContact() {
        cy.contains('Contact').click()
    }

    static clickAboutus(){
        cy.contains('About us').click()
    }

    static clickLogin(){
        cy.get('#login2').click()
        cy.wait(2000)
    }

    static clickSignIn(){
        cy.get('#signin2').click()
    }
    
}