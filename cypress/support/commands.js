// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password, totpSecret) => { 
    cy.visit('/')
    cy.get('[label="User ID"]').type(email)
    cy.wait(500)
    cy.get('#password').type(password, { log: false })
    cy.wait(700)
    cy.get('[type="submit"]').click()
    cy.wait(800)
    cy.task('generateOtp', totpSecret).then(token => {
        cy.get('[label="External TOTP"]').type(token)
    })
    // cy.contains('Continue ').click()
    cy.wait(600)
    cy.contains('I understand ').then(($el) => {
        if ($el.length) {
            $el.click()
        }
    })
    cy.wait(600)
 })