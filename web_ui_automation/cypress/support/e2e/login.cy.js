describe('Login Tests', () => {
  it('valid login', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type=submit]').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('invalid login', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('invalid');
    cy.get('#password').type('invalid');
    cy.get('button[type=submit]').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });
});
