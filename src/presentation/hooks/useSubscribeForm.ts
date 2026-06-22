import { useState } from 'react';
import { RegisterSubscriber } from '../../application/use-cases/RegisterSubscriber';
import { SupabaseSubscriberRepository } from '../../infrastructure/repositories/SupabaseSubscriberRepository';

const repository = new SupabaseSubscriberRepository();
const registerSubscriber = new RegisterSubscriber(repository);

export function useSubscribeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    const result = await registerSubscriber.execute({ name, email, whatsapp });

    if (result.success) {
      setStatus({ type: 'success', message: result.message });
      setName('');
      setEmail('');
      setWhatsapp('');
    } else {
      setStatus({ type: 'error', message: result.message });
    }

    setLoading(false);
  };

  return { name, setName, email, setEmail, whatsapp, setWhatsapp, status, loading, handleSubmit };
}
