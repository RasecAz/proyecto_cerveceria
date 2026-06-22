import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>W</div>
        <span className={styles.logoText}>Wajira</span>
      </div>
      <div className={styles.links}>
        <a href="#cervezas">Cervezas</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}
