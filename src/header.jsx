import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <Link to="/" style={styles.logo}>MyOTT</Link>
      </div>
      <nav style={styles.nav}>
        <Link to="/mood" style={styles.navLink}>Modes</Link>
        <Link to="/entertain" style={styles.navLink}>Entertainment</Link>
        <Link to="/focused" style={styles.navLink}>Focus</Link>
        <Link to="/spiritual" style={styles.navLink}>Spiritual</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#0f0f0f',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #333',
  },
  left: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  logo: {
    color: 'var(--color-primary)',
    textDecoration: 'none',
    fontSize: '1.6rem',
    letterSpacing: '0.5px',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  navLink: {
    color: 'var(--color-light)',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.2s ease',
  },
};
