import { Printable } from '../utils/printable.js';
export class Negotiations extends Printable {
    constructor() {
        super(...arguments);
        this.negotiations = [];
    }
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    list() {
        return this.negotiations;
    }
    toText() {
        return JSON.stringify(this.negotiations, null, 2);
    }
}
