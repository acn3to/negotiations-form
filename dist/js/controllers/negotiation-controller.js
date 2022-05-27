import { Negotiation } from '../models/negotiation.js';
export class NegotiationController {
    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector('#value');
    }
    add() {
        const negotiation = this.createNegotiation();
        console.log(negotiation);
        this.clearForm();
    }
    createNegotiation() {
        const re = /-/g;
        const date = new Date(this.inputDate.value.replace(re, ','));
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, amount, value);
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputAmount.value = '1';
        this.inputValue.value = '0.0';
        this.inputDate.focus();
    }
}
