declare namespace Cypress{
    interface Chainable{
        /**
         * @param username - takes username or id
         * @param password - takes user password
         */
        login(username: string, password: string): Chainable<Element>
    }
}