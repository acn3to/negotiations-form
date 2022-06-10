import { Negotiation } from './negotiation.js';
import { Printable } from '../utils/printable.js';

export class Negotiations implements Printable {
  private negotiations: Negotiation[] = [];

  public add(negotiation: Negotiation) {
    this.negotiations.push(negotiation);
  }

  public list(): readonly Negotiation[] {
    return this.negotiations;
  }

  public toText(): string {
    return JSON.stringify(this.negotiations, null, 2);
  }
}
