const elements = {
    dropdownCountry: async () => $('#country-select'),
    dropdownLanguage: async () => $('#language-select'),
    btnSubmit: async () => $('#submit-button'),
  };
  
const actions = {
    doLocaleSelection: async (country, language) => {
      await elements.dropdownCountry().waitForDisplayed();
      await elements.dropdownCountry().selectByVisibleTest(country);
      await elements.dropdownLanguage().selectByVisibleText(language);
      await elements.btnSubmit().click();
    }
  };
  
  module.exports = { elements, actions };


/* class localeSelect {
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

module.exports = new localeSelect(); */