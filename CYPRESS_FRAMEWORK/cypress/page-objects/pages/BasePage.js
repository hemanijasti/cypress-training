export default class BasePage{
    static pause(ms){
        cy.wait(ms)
    }

    static logInfo(message){
        cy.log(message)
    }
    static setMobileviewport(){
        cy.viewport('iphone-x')
    }

    static setTabletviewport(){
        cy.viewport('ipad-2')
    }

    static setDeaktopviewport(){
        cy.viewport('macbook-13')
    }

    static setLargeDesktopview(){
        cy.viewport(1980, 1080)
    }
    
}