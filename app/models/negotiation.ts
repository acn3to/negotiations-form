export class Negotiation {
  #date;
  #amount;
  #value;

  constructor(date, amount, value) {
    this.#date = date;
    this.#amount = amount;
    this.#value = value;
  }

  get date() {
    return this.#date;
  }

  get amount() {
    return this.#amount;
  }

  get value() {
    return this.#value;
  }

  get volume() {
    return this.#amount * this.#value;
  }
}
