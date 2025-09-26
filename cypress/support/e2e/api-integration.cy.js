describe('API Integration Test', () => {
  it('validates DummyJSON API', () => {
    cy.request('https://dummyjson.com/products/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
      expect(response.body).to.have.property('title');
    });
  });
});
