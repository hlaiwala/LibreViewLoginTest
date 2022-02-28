
class LoginPage {

    // Page locators
    get txtFieldUsername() { return $('#loginForm-email-input')}
    get txtFieldPassword(){ return $('#loginForm-password-input')}
    get Btnlogin() { return $('#loginForm-submit-button')}

    // page actions
    performLoginAction(email, pass){
        this.txtFieldUsername.waitForDisplayed()
        this.txtFieldUsername.setValue(email)
        this.txtFieldPassword.setValue(pass)
        this.Btnlogin.click()
    }
}

module.exports = new LoginPage();