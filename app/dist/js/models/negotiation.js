export class Negotiation {
    constructor(_date, amount, value) {
        this._date = _date;
        this.amount = amount;
        this.value = value;
    }
    get volume() {
        return this.amount * this.value;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    static createFrom(dateString, amountString, valueString) {
        const re = /-/g;
        const date = new Date(dateString.replace(re, ','));
        const amount = parseInt(amountString);
        const value = parseFloat(valueString);
        return new Negotiation(date, amount, value);
    }
}
