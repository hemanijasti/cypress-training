import {name, email, subject,message} from "../../../config"

export default class FeedbackPage{
    static formFilling(){
        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#subject').type(subject)
        cy.get('#comment').type(message)
    }

    static clickOnSendMessage(){
        cy.get('.btn-signin').click()
    }

    /*static verifyFeedbackSuccess(){
        cy.url().should('include','sendFeedback.html')
        cy.get('#feedback-title').contains('Feedback')
        cy.get('.offset3').should('be.visible').and('contain','Thank you for your comments, mani. They will be reviewed by our Customer Service staff and given the full attention that they deserve.')
    }*/
}