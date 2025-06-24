import { useNavigate } from 'react-router-dom';

export default function MoodSelector() {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Choose Your Mood</h1>
      <div style={styles.cards}>
        <div style={{ ...styles.card, backgroundColor: '#1e1e1e' }} onClick={() => navigate('/focused')}>
          <h2>🎧 Focused</h2>
          <p>Listen to audiobooks, speeches, and self-help content.</p>
        </div>
        <div style={{ ...styles.card, backgroundColor: '#2e1e1e' }} onClick={() => navigate('/entertain')}>
          <h2>🍿 Entertain</h2>
          <p>Watch movies, anime, and web series.</p>
        </div>
        <div style={{ ...styles.card, backgroundColor: '#1e2e1e' }} onClick={() => navigate('/spiritual')}>
          <h2>🕉️ Spiritual</h2>
          <p>Explore meditations, mantras, and spiritual teachings.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  card: {
    flex: '1 1 300px',
    padding: '2rem',
    borderRadius: '10px',
    color: 'white',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
};
