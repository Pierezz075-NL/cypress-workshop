/// <reference types="cypress" />

// ⚠️ you can change "it" to "it.only" to run a single test
// challenge #1: select the square using class, circle using id, triangle, atribute and heading using text
it('class, id, attr', () => {

  cy.visit('/shapes');

  // select the square using class
  cy.get('.square');

  // select the circle by using the id
  cy.get('#circle');

  // select triangle based on attribute 
  cy.get('[data-cy="triangle"]');

  // select heading using text
  cy.contains('Shapes:');

})

// challenge #2: in this example, try to select a specific element by chaining off pre-written .get() command
it('cypress commands for traversing and filtering elements', () => {

  cy.visit('/rainbow');

  // select red element using .first() command
  cy.get('li').first()

  // select violet element using .last() command
  cy.get('li').last()

  // select yellow element using .eq() command
  cy.get('li').eq(2)

  // select blue element using .next() command
  cy.get('.green').next()

  // select yellow element using .prev() command
  cy.get('.green').prev()

  // filter out primary colors using .filter() command. all these colors have the class "primary"
  cy.get('li').filter('.primary')

  // filter out secondary colors using .not() command. all these colors DON’T have the class "primary"
  cy.get('li').not('.primary')

  // select green element using .find() command
  cy.get('.list').find('.green')

  // select the whole list (with the class "list") using .parent() command
  cy.get('.violet').parent('.list')

});