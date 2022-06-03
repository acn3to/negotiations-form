import { Negotiations } from '../models/negotiations.js';

export class NegotiationsView {
  private element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  template(model: Negotiations): string {
    return `
    <table class="table table-hover table-bordered"
        <thead>
            <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
          ${model
            .list()
            .map((negotiation) => {
              return `
              <tr>
                <td>${new Intl.DateTimeFormat().format(negotiation.date)}</td>
                <td>${negotiation.amount}</td>
                <td>${negotiation.value}</td>
              </tr>
            `;
            })
            .join('')}
        </tbody>
    </table>
    `;
  }

  update(model: Negotiations): void {
    const template = this.template(model);
    console.log(template);
    this.element.innerHTML = template;
  }
}
