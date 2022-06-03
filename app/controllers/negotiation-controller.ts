import { NegotiationsView } from './../views/negotiations-view.js';
import { Negotiation } from '../models/negotiation.js';
import { Negotiations } from '../models/negotiations.js';

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView('#negotiationsView');

  constructor() {
    this.inputDate = document.querySelector('#date');
    this.inputAmount = document.querySelector('#amount');
    this.inputValue = document.querySelector('#value');
    this.negotiationsView.update(this.negotiations);
  }

  add(): void {
    const negotiation = this.createNegotiation();
    this.negotiations.add(negotiation);
    this.negotiationsView.update(this.negotiations);
    console.log(this.negotiations.list());
    this.clearForm();
  }

  createNegotiation(): Negotiation {
    const re = /-/g;
    const date = new Date(this.inputDate.value.replace(re, ','));
    const amount = parseInt(this.inputAmount.value);
    const value = parseFloat(this.inputValue.value);
    return new Negotiation(date, amount, value);
  }

  clearForm(): void {
    this.inputDate.value = '';
    this.inputAmount.value = '1';
    this.inputValue.value = '0.0';
    this.inputDate.focus();
  }
}
