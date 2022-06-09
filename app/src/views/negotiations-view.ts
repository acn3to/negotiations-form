import { View } from './view.js';
import { Negotiations } from '../models/negotiations.js';
import { escape } from '../decorators/escape.js';

export class NegotiationsView extends View<Negotiations> {
  @escape
  protected template(model: Negotiations): string {
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
                <td>${this.format(negotiation.date)}</td>
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

  private format(date: Date): string {
    return new Intl.DateTimeFormat().format(date);
  }
}
