/// <reference types="cypress" />


import Publishing from '../PageObject/PublishingPage'

describe ('Publishing Document', function() 
{
    beforeEach(function() {
        
        const publish =new Publishing()
        publish.logindetails()
        
    })

    it ('Creating News Document',function()
    {
        const publish =new Publishing()

        //Navigating to Page
        cy.get('#aria-main-nav > div> ul > li.nav-item.t-nav-item.icon-bodge-1> button').click()
        cy.get('#publishing > ul > li:nth-child(2) > a').click()

        //Creating New Document
        cy.get('#deleteForm > div > h3 > a').click()
        cy.get('[id=documentTitle]').type('Test Document"')
        publish.assignCategories()
        publish.assignMetadata()

        cy.get('#enablePassword').select('Yes')
        cy.get('#newPassword').type('Password')
        cy.get('#accessLevel').select('3')
        cy.get('[name=saveDocumentHeader]').click()
        cy.get('.flash--success').contains('Document saved')

        //Edit/updating document
        cy.get('#lockIcon > a').click()
        cy.get('[id=documentTitle]').clear().type('Test Document Title')
        cy.get('[name=saveDocumentHeader]').click()
        cy.get('.flash--success').contains('Document saved')

        //Adding pages to document
        cy.get('#deleteForm > div > h4 > a').click()
        cy.get('#title').type('Page Title')
        cy.get('#savePage').click()

        //Document approving
        publish.approval()
        cy.get('.flash--success').contains('Document has been approved')
  
    })

    it ('Deleting Document',function()
    {  
        const publish =new Publishing()

        //Navigating to Page
        cy.get('#aria-main-nav > div> ul > li.nav-item.t-nav-item.icon-bodge-1> button').click()
        cy.get('#publishing > ul > li:nth-child(2) > a').click()
        publish.delete()
        cy.get('.flash--success').contains('Document has been deleted')

    })

})