export class Negotiations {
    constructor() {
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
    isEqual(negotiations) {
        return JSON.stringify(this.negotiations) === JSON.stringify(negotiations.list());
    }
}
