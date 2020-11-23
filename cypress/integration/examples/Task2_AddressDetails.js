
/// <reference types="cypress" />

import Publishing from '../PageObject/PublishingPage'

describe ('Address Details', function() 
{
    it ('Add/update the address details',function()
    {
        const publish =new Publishing()
        publish.logindetails()
         
        //Navigating to Page
        cy.get('#aria-main-nav > div> ul > li.nav-item.t-nav-item.icon-bodge-1> button').click()
        cy.get('#publishing > ul > li:nth-child(1) > a').click()

        //Adding address details
        cy.get('[id=addressDetails]').clear().type("Leicester")
        cy.get('[id=telephone]').clear().type("123456789")
        cy.get('[id=fax]').clear().type("12345")
        cy.get('[id=email]').clear().type("test@test.com")
        cy.get(".btn--primary[value='Save Address Details']").click()

        cy.get('.flash--success').contains('Address has been saved')
        cy.get('.close >.icon-remove').click()
        
        //update address
        cy.get('[id=addressDetails]').clear()
        cy.get('[id=addressDetails]').type("London")
        cy.get(".btn--primary[value='Save Address Details']").click()
        
        cy.get('.flash--success').contains('Address has been saved')
        cy.get('.close >.icon-remove').click()
        cy.get('[id=addressDetails]').contains("London")
        
    })

    

})