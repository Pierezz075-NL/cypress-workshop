// challenge #1: Go the main page and look if within the form an input field is visible, 
it('should have an input field available in the form', () => {

  cy.visit('/');
  cy.get('form input');

});

// challenge #2: type in the input field a new name
it('should type a name in the input field', () => {

  cy.visit('/');
  cy.get('form input').type('Danny');

});

// challenge #3: should process the entered name
it('should press enter when name is added and url should be adjusted', () => {

  cy.visit('/');
  cy.get('form input').type('Danny');
  cy.get('.auth-button').click();

});

// challenge #4: should process a new user and check if the urls has changed
it('should check if user has been added an the url changed', () => {

  cy.visit('/');
  cy.get('form input').type('Miranda');
  cy.get('.auth-button').click();
  cy.url().should('include', '/users');
})
