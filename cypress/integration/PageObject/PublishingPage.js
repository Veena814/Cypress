
import LoginPage from '../PageObject/LoginPage'
class Publishing
{

logindetails()
{
    const login =new LoginPage()
    login.visit()
    login.enterUsername('admin123')
    login.enterPassword('admin123')
    login.signIn()
            
}

assignCategories()
{
    cy.get('[id=assignCategories]').click()
    cy.get('#ac_category_list > ul>li:nth-child(1)>a').click()
    cy.get('.btn--primary[value="Add: Example Category A"]').click()
    cy.get('.btn--primary[value="Apply Categories"]').click()
}

assignMetadata()
{
    cy.get('[id=assignMetadata]').click()
    cy.get('[id=description]').type('Test')
    cy.get('[name=save]').click()
}

ifreame()
{
    cy.get('#cke_1_contents > iframe').then(function($iframe){
    const $iframeContent =$iframe.contents().find('body')

    cy.wrap($iframeContent).type('Hello')

    })
}

approval()
{
    cy.get('.linkSubmit').click()
    cy.get('#workflow_task_comment').type('Test')
    cy.get('#workflow_submit > div > div > div.modal__footer > div > button').click()
    cy.get('.panel__actions > .btn--success').click()
    cy.get('#workflow_task_comment').type('Approved', {force: true})
    cy.get('#workflow_approve > div > div > div.modal__footer > div > button').click()
    
}

delete()
{
    cy.get('[name="deleteIDs[]"]').check().should('be.checked')
    cy.get('[value=Delete]').click()

    cy.on('window.alert',(str)=>
    {
        expect(str).to.equal('Are you sure you want to delete?')
    })
}

}

export default Publishing