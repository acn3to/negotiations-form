export class NegotiationController {
    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector('#value');
    }
    add() {
        console.log(this.inputDate);
        console.log(this.inputAmount);
        console.log(this.inputValue);
    }
}
