describe('verify the test cases fail or pass', () =>{
    it('browser the url' , () => {
        cy.visit("https://books.toscrape.com/index.html")
        cy.url().should('incluse', 'index.html')
        cy.log('Before reload')
        cy.reload()
        cy.log('After reload!')
        cy.wait(5000)
    })

    it('Check all products' , () => {
        cy.get('h1').contains('All products')
    })

    it('Check if 20 results are loaded' , () => {
        cy.get('.product_pod').its('length').should('eq',20)
     })

    it('click on any category on LHS' , () => {
        cy.get('a').contains('Sequential Art').click()
    })

    it('Check if 20 results are loaded' , () => {
        cy.get('.product_pod').its('length').should('eq',20)
     })
})