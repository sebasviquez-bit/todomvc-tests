/// <reference types= "cypress" />

it('adds student firstName', () => {
    cy.request('POST', 'http://thetestingworldapi.com/api/studentsDetails', 
    { first_name: 'Sebastian' }).then((response) => {
    // response.body is automatically serialized into JSON
    expect(response.body).to.have.property('first_name', 'Sebastian')
  }
)
  })

  
  it('confirms body page content', () => {
    cy.request('https://shop.akc.org/').its('body').should('include', 'shop')
    //it's quicker to test the contents of a page rather than cy.visit() and wait for the page to load
  })

  
  it('deletes studentID', () => {
    cy.request('DELETE', 'http://thetestingworldapi.com/Help/Api/DELETE-api-studentsDetails-id')
  })

