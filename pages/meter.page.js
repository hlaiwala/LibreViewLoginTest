
const elements = {
    btnUpload: async () => $('#meterUpload-linkedUpload-pat-button')
};

const actions = {
    isUploadButtonExists: async () =>{
        btnUpload().waitForDisplayed();
        return btnUpload().isDisplayed();
    }

};

module.exports = { elements, actions};