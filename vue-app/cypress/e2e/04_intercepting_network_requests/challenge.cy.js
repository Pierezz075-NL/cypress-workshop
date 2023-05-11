// challenge #1: go to the chat user overview page and use .intercept() command
// for watching the http get request for getting the chat users
// test the response status code and some of the attributes 
it('should go to overview page and intercept the http get call', () => {

  // First do the intercept
  // Tip also use an alias with the intercept


  // Then visit the page and wait for the alias. 
  // and check for statusCode 200
  // and check if the body content contains the number of users you have setup

});

// challenge 2: go to the chat user overview page and use .intercept() command
// for watching the http get request for getting the chat users
// use a mocked data file to represent your own data
it('should go to overview page and intercept the http get call', () => {

  // First do the intercept
  // Tip also use an alias with the intercept


  // Then visit the page and wait for the alias. 

});

// challenge 3: This challenge can be done in two ways:
// [3.1] - By navigating to the homepage fill in the username click on enter and check the response of the POST CALL
// [3.2] - Stay on the overview page and just make a request via Cypress to the POST API 
// ---> First Option 3.1
it('should go to main page and fill in the user details', () => {

  // First do the intercept
  // Tip also use an alias with the intercept


  // Then visit the page and wait for the alias. 


  // Then when you are on the users page check if the last user that has been added 
  // has the name Miranda


});

// challenge 3: This challenge can be done in two ways:
// [3.1] - By navigating to the homepage fill in the username click on enter and check the response of the POST CALL
// [3.2] - Stay on the overview page and just make a request via Cypress to the POST API 
// ---> First Option 3.2
it.only('should go to the overview page and make a request via Cypress to POST a new user', () => {

  // First do the POST CALL - use the cy.request param for that
  // Tip: use the full url path: http://localhost:3001/createUser


  // Second intercept the GET Call
  

  // Third visit the page and check if the new user has been added
  
});