// DOM = Inputs
const priceInput = document.querySelector('#product-price');
const quantityInput = document.querySelector('#product-quantity');
const shippingInput = document.querySelector('#product-shipping');

// DOM = Show results
const errorBox = document.querySelector('#error');
const resultBox = document.querySelector('#result');
// DOM = Event handler
const totalBtn = document.querySelector('#total-btn');

// Utility function for change string into numbers
// '500','2','100', '600' => [500,2,100,600]
const parseInput = (...inputs) => {
    return inputs.map((str) => Number(str));
};

// Utility function for validate inputs
// check input whether is number
const validateInputs = (...inputs) => {
    return inputs.every((el) => typeof el === 'number' && !isNaN(el));
}


// Hide error
const hideError = () => {
 errorBox.classList.add('invisible');
};
hideError();

// Show error
const showError = () => {
    errorBox.classList.remove('invisible');
}

// Custom Message
// inputs = ['200','100','3']
const showErrorMessage = (inputs, number) => {
    const fullErrorMsg = inputs.reduce((msg, str, index) => {
        if (validateInputs(number[index])) {
            msg += '';
        } else {
            msg += `${str} is not a number. `;
        }
        return msg;
    }, '');

    // console.log(fullErrorMsg);
    errorBox.innerText = fullErrorMsg;
    showError();
};

// callTotal
const calTotal = () => {
    // automatic hide previous error before calculate total
    hideError();

    // Parseinputs
    const inputs = [priceInput.value, quantityInput.value,shippingInput.value];
    // console.log(inputs);
    const numberInputs = parseInput(...inputs);

    // Validate
    const valid = validateInputs(...numberInputs);

    // Pass: total
    // Fail: show error
    if (valid) {
        const [price,quantity,shipping] = numberInputs;
        const totalPrice = price * quantity + shipping;
        console.log(totalPrice);
        resultBox.innerText = totalPrice;
    } else {
        showErrorMessage(inputs,numberInputs);
    } 
}

totalBtn.addEventListener('click',calTotal);