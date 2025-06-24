import React, { useState, useRef } from 'react';
import styles from './EntertainMode.module.css';
import Modal from '../Modal.jsx';
import '../Modal.css';


export default function EntertainMode() {
  const [trailerUrl, setTrailerUrl] = useState(null);

  const categories = [
    {
      id: 'trending',
      title: '🔥 Trending Now',
      items: [
        { id: 1, title: 'Stranger Things', thumbnail: 'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg' },
        { id: 2, title: 'The Witcher', thumbnail: 'https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg' },
        { id: 3, title: 'Money Heist', thumbnail: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg' },
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

  // Trailer URLs mapped by item id
  const trailerLinks = {
    1: 'https://www.youtube.com/embed/b9EkMc79ZSU',
    2: 'https://www.youtube.com/embed/ndl1W4ltcmg',
    3: 'https://www.youtube.com/embed/KBXbAe-MH6I',
    4: 'https://www.youtube.com/embed/MGRm4IzK1SQ',
    5: 'https://www.youtube.com/embed/8Qn_spdM5Zg',
    6: 'https://www.youtube.com/embed/VQGCKyvzIM4',
    7: 'https://www.youtube.com/embed/2JSQIuxpvEE',
    8: 'https://www.youtube.com/embed/5p1rUsERbRs',
    9: 'https://www.youtube.com/embed/cf4zGRWvlJc',
  };

  function onCardClick(id) {
    setTrailerUrl(trailerLinks[id] || null);
  }

  function closeModal() {
    setTrailerUrl(null);
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.pageTitle}>🍿 Entertain Mode</h1>
      {categories.map(cat => (
        <CategoryRow
          key={cat.id}
          title={cat.title}
          items={cat.items}
          onCardClick={onCardClick}
        />
      ))}

      {trailerUrl && (
        <Modal onClose={closeModal}>
          <iframe
            width="100%"
            height="450"
            src={trailerUrl}
            title="Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Modal>
      )}
    </div>
  );
}

function CategoryRow({ title, items, onCardClick }) {
  const rowRef = useRef();

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };
  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className={styles.categorySection}>
      <h2 className={styles.categoryTitle}>{title}</h2>
      <div className={styles.carouselContainer}>
        <button onClick={scrollLeft} className={styles.navButton}>{'‹'}</button>
        <div className={styles.carousel} ref={rowRef}>
          {items.map(item => (
            <div
              key={item.id}
              className={styles.card}
              onClick={() => onCardClick(item.id)}
            >
              <img src={item.thumbnail} alt={item.title} className={styles.cardImage} />

              {/* Play overlay */}
              <div className={styles.overlay}>
                <span className={styles.playIcon}>▶</span>
              </div>

              <p className={styles.cardTitle}>{item.title}</p>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className={styles.navButton}>{'›'}</button>
      </div>
    </section>
  );
}
