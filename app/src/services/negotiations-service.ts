import { TodayNegotiations } from '../interfaces/today-negotiations.js';
import { Negotiation } from '../models/negotiation.js';

export class NegotiationsService {
  public getTodayNegotiations(): Promise<Negotiation[]> {
    return fetch('http://localhost:8080/data')
      .then((res) => res.json())
      .then((data: TodayNegotiations[]) => {
        return data.map((todayData) => {
          return new Negotiation(new Date(), todayData.times, todayData.amount);
        });
      });
  }
}
