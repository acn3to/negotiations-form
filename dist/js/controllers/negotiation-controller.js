import { MessageView } from './../views/message-view.js';
import { NegotiationsView } from './../views/negotiations-view.js';
import { Negotiation } from '../models/negotiation.js';
import { Negotiations } from '../models/negotiations.js';
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView('#negotiationsView');
        this.messageView = new MessageView('#messageView');
        this.inputDate = document.querySelector('#date');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector('#value');
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = this.createNegotiation();
        this.negotiations.add(negotiation);
        console.log(this.negotiations.list());
        this.clearForm();
        this.updateView();
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
    updateView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('Negotiation added successfully!');
    }
}
