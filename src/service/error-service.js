class ErrorService {
    constructor() {
        this.errorBox = document.querySelector('#error');
    }
    
    // Hide error
    hideError() {
        this.errorBox.classList.add('invisible');
       };

    // Show error
    showError() {
        this.errorBox.classList.remove('invisible');
    }

    // Custom Message
    // inputs = ['200','100','3']
    showErrorMessage(inputs, number) {
        const fullErrorMsg = inputs.reduce((msg, str, index) => {
            if (validateInputs(number[index])) {
                msg += '';
            } else {
                msg += `${str} is not a number. `;
            }
            return msg;
        }, '');
    
        // console.log(fullErrorMsg);
        this.errorBox.innerText = fullErrorMsg;
        this.showError();
    };
}