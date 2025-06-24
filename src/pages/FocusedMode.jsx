import { useState } from 'react';

export default function FocusedMode() {
  const content = [
    {
      id: 1,
      title: 'Atomic Habits (Audiobook)',
      desc: 'Tiny changes, remarkable results.',
      thumbnail: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=600&q=80',
      category: 'audiobook',
    },
    {
      id: 2,
      title: 'APJ Abdul Kalam Speech',
      desc: 'Dreams and dedication are a powerful combo.',
      thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      category: 'motivation',
    },
    {
      id: 3,
      title: 'The Power of Now',
      desc: 'Spiritual wisdom by Eckhart Tolle.',
      thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      category: 'selfhelp',
    },
    {
      id: 4,
      title: 'Deep Work',
      desc: 'Focused success in a distracted world.',
      thumbnail: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80',
      category: 'audiobook',
    },
  ];

  const [filter, setFilter] = useState('all'); // 'all' or category

  // Filtered content to show
  const filteredContent = filter === 'all' ? content : content.filter(item => item.category === filter);

  return (
    <div style={styles.layout}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>📂 Sections</h2>
        <ul style={styles.sidebarList}>
          <li
            style={filter === 'all' ? styles.activeLink : null}
            onClick={() => setFilter('all')}
          >
            <a href="#">All</a>
          </li>
          <li
            style={filter === 'audiobook' ? styles.activeLink : null}
            onClick={() => setFilter('audiobook')}
          >
            <a href="#">📘 Audiobooks</a>
          </li>
          <li
            style={filter === 'motivation' ? styles.activeLink : null}
            onClick={() => setFilter('motivation')}
          >
            <a href="#">🎤 Motivation</a>
          </li>
          <li
            style={filter === 'selfhelp' ? styles.activeLink : null}
            onClick={() => setFilter('selfhelp')}
          >
            <a href="#">📚 Self-help</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main style={styles.content}>
        <h1 style={styles.heading}>🎧 Focused Mode</h1>
        <p style={styles.subheading}>Curated content to sharpen your mind before screen time.</p>
        <div style={styles.grid}>
          {filteredContent.map(item => (
            <div key={item.id} style={styles.card}>
              <img src={item.thumbnail} alt={item.title} style={styles.image} />
              <div style={styles.cardContent}>
                <h2 style={styles.title}>{item.title}</h2>
                <p style={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

const styles = {
  layout: {
    display: 'flex',
  },
  sidebar: {
    width: '220px',
    backgroundColor: '#1a1a1a',
    padding: '2rem 1rem',
    height: '100vh',
    borderRight: '1px solid #333',
    position: 'sticky',
    top: '4.5rem',
  },
  sidebarTitle: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: 'var(--color-light)',
  },
  sidebarList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    cursor: 'pointer',
  },
  activeLink: {
    fontWeight: '700',
    color: 'var(--color-primary)',
  },
  content: {
    flex: 1,
    padding: '2rem',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subheading: {
    fontSize: '1rem',
    color: 'var(--color-muted)',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#1b1b1b',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '1rem',
  },
  title: {
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
    color: 'var(--color-light)',
  },
  desc: {
    fontSize: '0.9rem',
    color: 'var(--color-muted)',
  },
};
