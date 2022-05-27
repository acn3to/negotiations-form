export class Negotiation {
  private _date;
  private _amount;
  private _value;

  constructor(date, amount, value) {
    this._date = date;
    this._amount = amount;
    this._value = value;
  }

  get date() {
    return this._date;
  }

  get amount() {
    return this._amount;
  }

  get value() {
    return this._value;
  }

  get volume() {
    return this.amount * this.value;
  }
}
