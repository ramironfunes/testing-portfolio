describe('DuckDuckGo Search', () => {
  it('searches for Playwright testing', () => {
    cy.visit('https://duckduckgo.com/');
    cy.get('input[name="q"]').type('Playwright testing{enter}');
    cy.get('#links').should('contain.text', 'Playwright');
  });
});
