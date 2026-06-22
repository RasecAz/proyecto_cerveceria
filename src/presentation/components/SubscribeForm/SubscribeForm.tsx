import { useSubscribeForm } from '../../hooks/useSubscribeForm';
import styles from './SubscribeForm.module.css';

export function SubscribeForm() {
  const { name, setName, email, setEmail, whatsapp, setWhatsapp, status, loading, handleSubmit } = useSubscribeForm();

  return (
    <section id="contacto" className={styles.wrapper}>
      <div className={styles.title}>Únete al club Wajira</div>
      <p className={styles.subtitle}>Recibe lanzamientos, promos y eventos exclusivos.</p>

      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="tel"
          placeholder="WhatsApp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          required
        />
        <button className={styles.submit} type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Registrarme'}
        </button>
      </form>

      {status.type !== 'idle' && (
        <div className={status.type === 'success' ? styles.success : styles.errorMsg}>
          {status.message}
        </div>
      )}
    </section>
  );
}
