
const componentService = new ComponentService();
const errorService = new ErrorService();

const app = () => {
  // errorService.hideError();
  
  
  
  // callTotal
  const calTotal = () => {
      // automatic hide previous error before calculate total
      // hideError();
      errorService.hideError();
  
      // Parseinputs
      // const inputs = [priceInput.value, quantityInput.value,shippingInput.value];
      const inputs = componentService.getInputs();
      // console.log(inputs);
      const numberInputs = parseInput(...inputs);
  
      // Validate
      const valid = validateInputs(...numberInputs);
  
      // Pass: total
      // Fail: show error
      if (valid) {
          const [price,quantity,shipping] = numberInputs;
          const totalPrice = price * quantity + shipping;
          // console.log(totalPrice);
          // resultBox.innerText = totalPrice;
          componentService.setPrice(totalPrice);
      } else {
          errorService.showErrorMessage(inputs,numberInputs);
      } 
  }
  
  componentService.onClick(calTotal);
}
app();