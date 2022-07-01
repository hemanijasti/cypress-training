describe('should read write data into Json/txt files', () => {
    it('should write data into JSON file', () => {
        cy.writeFile('log.json', {name:"srinu", age: 28, location:"bangalore"})
    })

    it('should write data into text file', () => {
        cy.writeFile('log.txt', 'Hello worrld!!!')
    })

    it('should read data from JSON file', () => {
        cy.readFile('log.json').its('age').should('eq',28)
    })

    it('should read data from JSON file', () => {
        cy.readFile('log.txt').should('eq','Hello worrld!!!')
    })

    it('should read and verify the browser document content', () =>{
        cy.visit('http://example.com/')
        cy.document().its('contentType').should('eq','text/html')
        cy.document().should('have.property','charset').and('eq','UTF-8')
    })
})