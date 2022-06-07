import { DaysOfWeek } from './../enums/days-of-week.js';
import { MessageView } from './../views/message-view.js';
import { NegotiationsView } from './../views/negotiations-view.js';
import { Negotiation } from '../models/negotiation.js';
import { Negotiations } from '../models/negotiations.js';

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView('#negotiationsView', true);
  private messageView = new MessageView('#messageView');

  constructor() {
    this.inputDate = document.querySelector('#date');
    this.inputAmount = document.querySelector('#amount');
    this.inputValue = document.querySelector('#value');
    this.negotiationsView.update(this.negotiations);
  }

  public add(): void {
    const negotiation = Negotiation.createFrom(
      this.inputDate.value,
      this.inputAmount.value,
      this.inputValue.value,
    );
    if (!this.isBusinessDay(negotiation.date)) {
      this.messageView.update('Only business day trades are accepted');

      return;
    }

    this.negotiations.add(negotiation);
    this.clearForm();
    this.updateView();
  }

  private isBusinessDay(date: Date) {
    return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
  }

  private clearForm(): void {
    this.inputDate.value = '';
    this.inputAmount.value = '1';
    this.inputValue.value = '0.0';
    this.inputDate.focus();
  }

  private updateView(): void {
    this.negotiationsView.update(this.negotiations);
    this.messageView.update('Negotiation added successfully!');
  }
}
