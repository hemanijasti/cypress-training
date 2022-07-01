export default class successpage {

    static ordersuccess() {
        cy.screenshot({capture:'fullPage'})
        cy.get('h2').contains('Thank you for your purchase!')
        cy.get('.sa-confirm-button-container').contains('OK').click()
        cy.wait(3000)
        }

    static logout(){
        cy.get('#logout2').contains('Log out').click()
    }
}