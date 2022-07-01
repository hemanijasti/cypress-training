import {url} from "../../../config"
import Navbar from "../../page-objects/components/navbar"
import Loginpage from "../../page-objects/pages/LoginPage"

describe('Login failed to test', () =>{
    before(function() {
        cy.visit(url)
        Navbar.clickSignIn()
    })

     it('Should try to login with invalid credentials', function(){
         Loginpage.login('invalid username', 'invalid password')
     })

     it('Should display error message', function() {
         Loginpage.displayErrorMessage()
     })
})

describe('Login success test:', () =>{
    before(function(){
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it("should login into the application ", function(){
        Loginpage.login('login_username', 'login_password')
    })

    //it('Should ')

})