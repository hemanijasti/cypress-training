export default class Loginpage {
    static login(username, password){
        cy.login(username, password)

    }
}