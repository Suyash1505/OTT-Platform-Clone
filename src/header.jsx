import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>MyOTT</h2>
      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/browse">Browse</Link>
        <Link style={styles.link} to="/watch">Watch</Link>
        <Link style={styles.link} to="/login">Login</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#111',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
  },
  logo: {
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
