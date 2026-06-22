import { Subscriber } from '../../domain/entities/Subscriber';
import { ISubscriberRepository } from '../../domain/repositories/ISubscriberRepository';

export class RegisterSubscriber {
  constructor(private repository: ISubscriberRepository) {}

  async execute(data: Subscriber): Promise<{ success: boolean; message: string }> {
    if (!data.name || !data.email || !data.whatsapp) {
      return { success: false, message: 'Todos los campos son obligatorios.' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { success: false, message: 'El correo electrónico no es válido.' };
    }

    try {
      await this.repository.save(data);
      return { success: true, message: '¡Te has unido al club Wajira!' };
    } catch (error) {
      return { success: false, message: 'Hubo un error al registrarte. Intenta nuevamente.' };
    }
  }
}
