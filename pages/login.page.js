const elements = {
    txtFieldUsername: async () => $('#loginForm-email-input'),
    txtFieldPassword: async () =>  $('#loginForm-password-input'),
    btnLogin: async () => $('#loginForm-submit-button'),
    btnSendCode: async () => $('#twoFactor-step1-next-button'),
    inputCodeField: async () => $('#twoFactor-step2-code-input'),
    btnVerifyAndLogin: async () => $('#twoFactor-step2-next-button')
};

const actions = {
    doLogin: async (email, pass) => {
        await elements.txtFieldUsername().waitForDisplayed();
        await elements.txtFieldUsername().setValue(email);
        await elements.txtFieldPassword().setValue(pass);
        await elements.btnLogin().click();
    },
    doSendCode: async(code) => {
        await elements.btnSendCode().waitForDisplayed();
        await elements.inputCodeField().setValue(code);
        await elements.btnSendCode().click();
    },
    doVerifyAndLogin: async () => {
        await elements.btnVerifyAndLogin().waitForDisplayed();
        await elements.btnVerifyAndLogin().click();
    }


};
module.exports = {elements , actions};


/* class LoginPage {

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

module.exports = new LoginPage(); */