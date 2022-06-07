import { DaysOfWeek } from './../enums/days-of-week.js';
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
        const negotiation = Negotiation.createFrom(this.inputDate.value, this.inputAmount.value, this.inputValue.value);
        if (!this.isBusinessDay(negotiation.date)) {
            this.messageView.update('Only business day trades are accepted');
            return;
        }
        this.negotiations.add(negotiation);
        this.clearForm();
        this.updateView();
    }
    isBusinessDay(date) {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
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
