describe('getUsers API endpoint test', () => {
    it('get all the chat users', () => {
        cy.request('GET', '/getUsers').its('status').should('equal', 200);
        cy.api('GET', '/getUsers').its('status').should('equal', 200);
    })

    it('get all the chat users and check its body', () => {
        cy.api('GET', '/getUsers').its('body').then(body => {
            expect(body.length).to.equal(4);
        })
    })
})

describe('createUsers API endpoint test', () => {
    it('post a new chat users', () => {
        cy.api({
            method: 'POST',
            url: '/createUser',
            body: {
                username: 'Pablo'
            }
        });
    })
})