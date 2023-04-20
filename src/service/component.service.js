export class ComponentService {
    constructor() {
        this.priceInput = document.querySelector('#product-price');
        this.quantityInput = document.querySelector('#product-quantity');
        this.shippingInput = document.querySelector('#product-shipping');
        this.totalBtn = document.querySelector('#total-btn');
        this.resultBox = document.querySelector('#result');
    }

    getInputs() {
        let price = this.priceInput.value;
        let quantity = this.quantityInput.value;
        let shipping = this.shippingInput.value;
        return [price, quantity, shipping];
    }

    setPrice(price) {
        this.resultBox.innerHTML = price;
    }

    onClick(callback) {
        this.totalBtn.addEventListener('click', callback);
    }
}