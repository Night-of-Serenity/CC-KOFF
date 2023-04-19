// Utility function for validate inputs
// check input whether is number
const validateInputs = (...inputs) => {
    return inputs.every((el) => typeof el === 'number' && !isNaN(el));
}