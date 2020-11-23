
import Publishing from '../PageObject/PublishingPage'


describe ('JADU Galaxies CMS Login', function() 
{
    it ('Log in to the Jadu CMS',function()
    {
        const publish =new Publishing()
        publish.logindetails()
        cy.contains('Hello again, Administrator.')
       
    })

})