describe('Capturing the Screenshots' , () =>{
    it('screenshot for full page', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({capture: 'fullPage'})
    })

    it('screenshot for header element', () => {
        cy.get('header').screenshot()
        cy.get('#populate').screenshot()
    })
})