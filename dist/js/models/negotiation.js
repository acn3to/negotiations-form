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
}
