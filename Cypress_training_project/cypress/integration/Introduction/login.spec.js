describe('Should load the webload and login' , () => {
    it('Should load the website' , () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    })

    it('Should login with invalid username' , () => {
        cy.get('#user_login').type("invalid username", {delay: 50})
    })

    it('Should login with invalid password' , () => {
        cy.get('#user_password').type("invalid password", {delay: 50})
    })

    it('Should click on signed in checkbox' , () => {
        cy.get('#user_remember_me').click()
    })

    it('Should click on sign in' , () => {
        cy.contains('Sign in').click()
        cy.get('.alert-error').should('be.visible')
    })
})