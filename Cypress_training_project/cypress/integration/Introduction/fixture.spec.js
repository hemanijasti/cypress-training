describe('should login with fixtures data', () =>{
     /*it('should load the url and login with the data', () => {
         cy.visit('http://zero.webappsecurity.com/login.html')
         cy.fixture('user').then(user =>{

             const username = user.username
             const password = user.password

             cy.get('#user_login').type(username)
             cy.get('#user_password').type(password)
             cy.contains('Sign in').click()
         })
     })

     it('should load the url and keyboard enter search', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('just type search {enter}')
        })

    it('should select the particular element in dropdown', () =>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#preferred-interface').select('Both')
        cy.get('#preferred-interface').should('have.value','Both')
    })*/

    it('should scroll top to bottom' , () =>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.wait(5000)
        cy.get('#submit-button').scrollIntoView()
        cy.wait(5000)
        cy.get('header').scrollIntoView()
    })
})