import logo from "../../../assets/Logo.png";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img
          src={logo}
          alt="Wajira Logo"
          className={styles.logo}
        />

        <h1 className={styles.brand}>Wajira</h1>
      </div>

      <ul className={styles.navLinks}>
        <li>Cervezas</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}