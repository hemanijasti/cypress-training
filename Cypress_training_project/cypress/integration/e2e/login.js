const { it } = require("mocha")

describe('Should load the webload and login' , () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','index.html')
        cy.contains('Sign in').click()
    
    })

    it('Should click on sign in' , () => {
       cy.fixture('user').then(user =>{
           const username = user.id
           const password = user.pwd
           cy.login(username,password)
       })
    })

    it('should logout from application',() => {
        
    })
})