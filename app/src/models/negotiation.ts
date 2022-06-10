export class Negotiation {
  constructor(private _date: Date, public readonly amount: number, public readonly value: number) {}

  public static createFrom(
    dateString: string,
    amountString: string,
    valueString: string,
  ): Negotiation {
    const re = /-/g;
    const date = new Date(dateString.replace(re, ','));
    const amount = parseInt(amountString);
    const value = parseFloat(valueString);
    return new Negotiation(date, amount, value);
  }

  get volume(): number {
    return this.amount * this.value;
  }

  get date(): Date {
    return new Date(this._date.getTime());
  }

  public toText(): string {
    return `
    Date: ${this.date},
    Amount: ${this.amount},
    Value: ${this.value}`;
  }
}
