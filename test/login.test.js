const loginpage = require("../pages/login.page");
const localeSelect = require("../pages/localeSelect.page")

describe("Login to LibreView", async() => {
    it("I am able to login successfully using 2FA", function(){
        browser.url('/')
        browser.maximizeWindow()
        browser.pause(10000)
        localeSelect.performLocaleSelection("United States", "English")
        loginpage.performLoginAction("foolbrothersinvest@gmail.com","P@ssword2468") 


    });

})