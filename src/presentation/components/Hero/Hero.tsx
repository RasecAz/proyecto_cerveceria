import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Cerveza artesanal<br />
        con <span className={styles.highlight}>alma wayuu</span>
      </h1>
      <p className={styles.subtitle}>
        Inspirada en las montañas, los colores y las tradiciones de La Guajira.
        Hecha a mano, lote por lote.
      </p>
      <div className={styles.ctaRow}>
        <a href="#cervezas" className={styles.ctaPrimary}>Ver cervezas</a>
        <a href="#contacto" className={styles.ctaSecondary}>Dónde comprar</a>
      </div>
    </section>
  );
}
