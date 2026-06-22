import { Subscriber } from '../entities/Subscriber';

export interface ISubscriberRepository {
  save(subscriber: Subscriber): Promise<void>;
}
