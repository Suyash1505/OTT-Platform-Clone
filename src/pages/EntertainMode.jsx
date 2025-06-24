import { useRef } from 'react';

export default function EntertainMode() {
  const categories = [
    {
      id: 'trending',
      title: '🔥 Trending Now',
      items: [
        { id: 1, title: 'Stranger Things', thumbnail: 'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg' },
        { id: 2, title: 'The Witcher', thumbnail: 'https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg' },
        { id: 3, title: 'Money Heist', thumbnail: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg' },
        // Add more
      ],
    },
    {
      id: 'anime',
      title: '🎌 Anime',
      items: [
        { id: 4, title: 'Attack on Titan', thumbnail: 'https://image.tmdb.org/t/p/w500/aiy35Evcofzl7hASZZvsFgltHTX.jpg' },
        { id: 5, title: 'Naruto', thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
        { id: 6, title: 'Demon Slayer', thumbnail: 'https://image.tmdb.org/t/p/w500/rr7E0QHSneAKJQssH9C2gRZfFSZ.jpg' },
      ],
    },
    {
      id: 'webseries',
      title: '📺 Web Series',
      items: [
        { id: 7, title: 'Sacred Games', thumbnail: 'https://image.tmdb.org/t/p/w500/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg' },
        { id: 8, title: 'Mirzapur', thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Mirzapur_2_Poster.jpg' },
        { id: 9, title: 'The Family Man', thumbnail: 'https://image.tmdb.org/t/p/w500/i0QJGqFegZ7ZSblLYzqP9yyL0oI.jpg' },
      ],
    },
  ];

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.pageTitle}>🍿 Entertain Mode</h1>
      {categories.map(cat => (
        <CategoryRow key={cat.id} title={cat.title} items={cat.items} />
      ))}
    </div>
  );
}

function CategoryRow({ title, items }) {
  const rowRef = useRef();

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };
  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section style={styles.categorySection}>
      <h2 style={styles.categoryTitle}>{title}</h2>
      <div style={styles.carouselContainer}>
        <button onClick={scrollLeft} style={styles.navButton}>{'‹'}</button>
        <div style={styles.carousel} ref={rowRef}>
          {items.map(item => (
            <div key={item.id} style={styles.card}>
              <img src={item.thumbnail} alt={item.title} style={styles.cardImage} />
              <p style={styles.cardTitle}>{item.title}</p>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} style={styles.navButton}>{'›'}</button>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    padding: '2rem',
    backgroundColor: 'var(--color-secondary)',
    color: 'var(--color-light)',
    minHeight: '100vh',
  },
  pageTitle: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  categorySection: {
    marginBottom: '2.5rem',
  },
  categoryTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  carouselContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  navButton: {
    backgroundColor: 'rgba(20, 20, 20, 0.7)',
    border: 'none',
    color: 'var(--color-light)',
    fontSize: '2rem',
    cursor: 'pointer',
    padding: '0 10px',
    userSelect: 'none',
    borderRadius: '4px',
    zIndex: 10,
  },
  carousel: {
    display: 'flex',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    gap: '1rem',
    padding: '0.5rem 0',
    scrollbarWidth: 'none', // Firefox
  },
  card: {
    flex: '0 0 auto',
    width: '160px',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#222',
    boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
    cursor: 'pointer',
  },
  cardImage: {
    width: '100%',
    height: '240px',
    objectFit: 'cover',
  },
  cardTitle: {
    padding: '0.5rem',
    fontSize: '1rem',
    textAlign: 'center',
    color: 'var(--color-light)',
  },
};
