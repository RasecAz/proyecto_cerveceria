import styles from './WhatsAppButton.module.css';

const WHATSAPP_NUMBER = '573000000000';
const MESSAGE = encodeURIComponent('Hola, quiero hacer un pedido de cervezas Wajira');

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
    >
      💬 Pedir por WhatsApp
    </a>
  );
}
