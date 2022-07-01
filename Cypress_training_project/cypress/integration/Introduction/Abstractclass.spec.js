class baseClass{
    static loadURL(){
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number){
        cy.wait(number)
    }
}

class childClass extends baseClass {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop(){
        cy.get('header').scrollIntoView()
    }
}

describe('Abstraction Classess', () =>{
    it('Should scroll down and up on the page', () =>{

        childClass.loadURL()
        childClass.wait(10000)
        childClass.scrollToBottom()
        childClass.wait(5000)
        childClass.scrollToTop()
    })
})