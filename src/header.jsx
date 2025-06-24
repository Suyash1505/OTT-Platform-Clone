import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>MyOTT</Link>
      <nav className={styles.nav}>
        <Link to="/mood" className={styles.link}>Mood</Link>
        <Link to="/focused" className={styles.link}>Focus</Link>
        <Link to="/entertain" className={styles.link}>Entertain</Link>
        <Link to="/spiritual" className={styles.link}>Spiritual</Link>
      </nav>
    </header>
  );
}
