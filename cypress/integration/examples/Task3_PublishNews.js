/// <reference types="cypress" />


import Publishing from '../PageObject/PublishingPage'

describe ('Publishing News', function() 
{
    beforeEach(function() {
        
        const publish =new Publishing()
        publish.logindetails()
        
    })

    it ('Creating News Article',function()
    {
        const publish =new Publishing()

        //Navigating to Page
        cy.get('#aria-main-nav > div> ul > li.nav-item.t-nav-item.icon-bodge-1> button').click()
        cy.get('#publishing > ul > li:nth-child(8) > a').click()

        //Creating News
        cy.get('.not_yet > h3 > a').click()
        cy.get('[id=name]').type('Coronavirus: All children in England "back to school in September"')
        publish.assignCategories()
        publish.assignMetadata()

        cy.get("#mainForm > div > table > tbody > tr:nth-child(4) > td.generic_action > img").click()
        cy.get("#calendar_body > tr:nth-child(4) > td:nth-child(3) > a").click()
        cy.get('[id=newsTime]').clear().type('23:56')      
        cy.get('#summary').type('All pupils in all year groups in England will go back to school full-time in September, Education Secretary Gavin Williamson has announced.')
        publish.ifreame()

        cy.get('.ckBeforeSave').click()
        cy.get('.flash--success').contains('News item saved')

        //News Approval
        publish.approval()
        cy.get('.flash--success').contains('News Item has been approved')
    })

    it ('Deleting News Article',function()
    {  
        const publish =new Publishing()

        //Navigating to Page
        cy.get('#aria-main-nav > div> ul > li.nav-item.t-nav-item.icon-bodge-1> button').click()
        cy.get('#publishing > ul > li:nth-child(8) > a').click()
        publish.delete()
        cy.get('.flash--success').contains('News item has been deleted')

    })

})