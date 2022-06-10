import { domInjector } from '../decorators/dom-injector.js';
import { inspect } from '../decorators/inspect.js';
import { logRuntime } from '../decorators/log-runtime.js';
import { DaysOfWeek } from '../enums/days-of-week.js';
import { Negotiation } from '../models/negotiation.js';
import { Negotiations } from '../models/negotiations.js';
import { NegotiationsService } from '../services/negotiations-service.js';
import { print } from '../utils/print.js';
import { MessageView } from '../views/message-view.js';
import { NegotiationsView } from '../views/negotiations-view.js';

export class NegotiationController {
  @domInjector('#date')
  private inputDate: HTMLInputElement;
  @domInjector('#amount')
  private inputAmount: HTMLInputElement;
  @domInjector('#value')
  private inputValue: HTMLInputElement;

  private negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView('#negotiationsView');
  private messageView = new MessageView('#messageView');
  private negotiationsService = new NegotiationsService();

  constructor() {
    this.negotiationsView.update(this.negotiations);
  }

  @logRuntime(true)
  @inspect()
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
    print(negotiation, this.negotiations);
    this.clearForm();
    this.updateView();
  }

  importData(): void {
    this.negotiationsService.getTodayNegotiations().then((todayNegotiations) => {
      for (let negotiation of todayNegotiations) {
        this.negotiations.add(negotiation);
      }
      this.negotiationsView.update(this.negotiations);
    });
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
