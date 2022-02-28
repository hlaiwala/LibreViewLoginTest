
class localeSelect {
    // page locators
    get dropdownCountry() { return await $('#country-select')};
    get dropdownLanguage() {return await $('#language-select')};
    get btnSubmit() {return await $('#submit-button')};

    //page actions
    performLocaleSelection(country, language){
        this.dropdownCountry.waitForDisplayed()
        this.dropdownCountry.selectByVisibleText(country)
        this.dropdownLanguage.selectByVisibleText(language)
        this.btnSubmit.click()
    }

}

module.exports = new localeSelect();