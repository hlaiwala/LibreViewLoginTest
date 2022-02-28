const loginpage = require("../pages/login.page");
const localePage = require("../pages/localeSelect.page");
const meterPage =  require("../pages/meter.page");
const { assert } = require("chai");

describe("Login to LibreView", async() => {
    it("I am able to login successfully using 2FA", function(){
        browser.url('/');
        browser.maximizeWindow();
        browser.pause(10000);
        localePage.actions.doLocaleSelection("United States", "English");
        loginpage.actions.doLogin("foolbrothersinvest@gmail.com","P@ssword2468");
        loginpage.actions.doSendCode(1234);
        loginpage.actions.doVerifyAndLogin();
        assert.equal(true, meterPage.actions.isUploadButtonExists(),'Upload button is not displayed')
    });

})