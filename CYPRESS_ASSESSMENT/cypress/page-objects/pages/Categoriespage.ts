import {name,value,text,desc} from "../../support/Constants"

export default class Categories{
    static categorySelection(cate_name){
        cy.wait(3000)
        cy.get('.list-group-item').contains('CATEGORIES')
        cy.screenshot({capture:'fullPage'})
        cy.contains(cate_name).scrollIntoView()
        cy.contains(cate_name).click()
    }

    static itemSelection(item_header){
        cy.wait(2000)
        cy.get('.card-block').its('length').should('eq',6)
        cy.contains(item_header).click()
    }

    static itemDetails(){
        cy.url().should('include','prod.html')
        cy.wait(3000)
        cy.get('.name').should('have.text',name)
        cy.get('.price-container').should('have.text',value)
        cy.get('strong').should('have.text',text)
        cy.get('#more-information p').contains(desc)
        cy.screenshot({capture:'fullPage'})
    }

    static addtocart() {
        cy.contains('Add to cart').click()
    }
}