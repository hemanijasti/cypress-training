import { name,country,city,year,month,credit } from "../../support/Constants"
export default class Cartpage{
    static placeorder()
    {
        cy.wait(3000)
        cy.get('.nav-link').contains('Cart').click()
        cy.url().should('include','cart.html')
        cy.wait(4000)
        cy.get('.col-lg-8 h2').should('have.text','Products')
        cy.get('.col-lg-1 h2').should('have.text','Total')
        cy.screenshot({capture:'fullPage'})
        cy.get('.btn-success').should('have.text','Place Order').click()
    }

    static placeorderformfilling()
    {
        cy.get('#name').type(name)
        cy.get('#country').type(country)
        cy.get('#city').type(city)
        cy.get('#card').type(credit)
        cy.get('#month').type(month)
        cy.get('#year').type(year)
        cy.wait(2000)
        cy.screenshot({capture:'fullPage'})
        cy.get('.btn-primary').contains('Purchase').click()
    }
}