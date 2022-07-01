import {url} from "../../../config"
import Navbar from "../../page-objects/components/Navbar"
import FeedbackPage from "../../page-objects/pages/FeedbackPage"

describe('Submit feedback form', () =>{
    before(function() {
        cy.visit(url)
        Navbar.clickFeedabck()
    })

    it('Should enter the required details', () =>{
        FeedbackPage.formFilling()
        FeedbackPage.clickOnSendMessage()
        //FeedbackPage.verifyFeedbackSuccess()
    })
})