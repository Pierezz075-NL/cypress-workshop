it('opening the chat application', () => {

  // SOLUTION EXPLANATION: challenge #1

  // this works once you define "baseUrl" 
  // inside your cypress.config.js file:
  //
  /// module.exports = defineConfig({
  ///   e2e: {
  ///     baseUrl: 'http://localhost:5173/', <<< like this
  ///   },
  /// })
  cy.visit('/')

});