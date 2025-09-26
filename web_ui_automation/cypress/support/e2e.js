// cypress/support/e2e.js

// Runs before every test
beforeEach(() => {
  // Podés meter hooks globales acá si querés
  cy.log('Starting test...');
});

// Example: ignore uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
