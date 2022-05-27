var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Negotiation_date, _Negotiation_amount, _Negotiation_value;
export class Negotiation {
    constructor(date, amount, value) {
        _Negotiation_date.set(this, void 0);
        _Negotiation_amount.set(this, void 0);
        _Negotiation_value.set(this, void 0);
        __classPrivateFieldSet(this, _Negotiation_date, date, "f");
        __classPrivateFieldSet(this, _Negotiation_amount, amount, "f");
        __classPrivateFieldSet(this, _Negotiation_value, value, "f");
    }
    get date() {
        return __classPrivateFieldGet(this, _Negotiation_date, "f");
    }
    get amount() {
        return __classPrivateFieldGet(this, _Negotiation_amount, "f");
    }
    get value() {
        return __classPrivateFieldGet(this, _Negotiation_value, "f");
    }
    get volume() {
        return __classPrivateFieldGet(this, _Negotiation_amount, "f") * __classPrivateFieldGet(this, _Negotiation_value, "f");
    }
}
_Negotiation_date = new WeakMap(), _Negotiation_amount = new WeakMap(), _Negotiation_value = new WeakMap();
