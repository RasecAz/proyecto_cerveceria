import { ISubscriberRepository } from '../../domain/repositories/ISubscriberRepository';
import { Subscriber } from '../../domain/entities/Subscriber';
import { supabase } from '../supabase/supabaseClient';

export class SupabaseSubscriberRepository implements ISubscriberRepository {
  async save(subscriber: Subscriber): Promise<void> {
    const { error } = await supabase
      .from('subscribers')
      .insert([{ name: subscriber.name, email: subscriber.email, whatsapp: subscriber.whatsapp }]);

    if (error) throw new Error(error.message);
  }
}
