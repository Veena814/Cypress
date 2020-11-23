
class LoginPage
{

visit()
{
    cy.visit('https://sandbox01.demo.jadu.net/student01/jadu/')
}

enterUsername(value)
{
    const username=cy.get('[id=username]')
    username.clear()
    username.type(value)
    return this
}

enterPassword(value)
{
    const password=cy.get('[id=password]')
    password.clear()
    password.type(value)
    return this
}

signIn()
{
    const button=cy.get('[name=signin-submit]')
    button.click()
}

}

export default LoginPage