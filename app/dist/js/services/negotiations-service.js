import { Negotiation } from '../models/negotiation.js';
export class NegotiationsService {
    getTodayNegotiations() {
        return fetch('http://localhost:8080/data')
            .then((res) => res.json())
            .then((data) => {
            return data.map((todayData) => {
                return new Negotiation(new Date(), todayData.times, todayData.amount);
            });
        });
    }
}
