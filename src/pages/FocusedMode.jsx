import { useState } from 'react';
import styles from './FocusedMode.module.css';
import Modal from '../Modal.jsx';
import '../Modal.css';

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
    {
    id: 5,
    title: 'Steve Jobs Stanford Speech',
    desc: 'One of the most inspiring speeches ever.',
    category: 'motivation',
    thumbnail: 'https://img.youtube.com/vi/UF8uR6Z6KLc/hqdefault.jpg',
    }
  ];

  const trailerLinks = {
  1: 'https://www.youtube.com/embed/b9EkMc79ZSU',
  2: 'https://www.youtube.com/embed/ndl1W4ltcmg',
  3: 'https://www.youtube.com/embed/KBXbAe-MH6I',
  4: 'https://www.youtube.com/embed/MGRm4IzK1SQ',
  5: 'https://www.youtube.com/embed/8Qn_spdM5Zg',
  6: 'https://www.youtube.com/embed/VQGCKyvzIM4',
};

  const [filter, setFilter] = useState('all'); // 'all' or category
  const [selectedItem, setSelectedItem] = useState(null);

  // Filtered content to show
  const filteredContent = filter === 'all' ? content : content.filter(item => item.category === filter);

  function getTrailerLink(id) {
    return trailerLinks[id] || ''; // fallback trailer 😄
  }

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>📂 Sections</h2>
          <ul className={styles.sidebarList}>
          <li onClick={() => setFilter('all')} className={filter === 'all' ? styles.activeLink : ''}>All</li>
          <li onClick={() => setFilter('audiobook')} className={filter === 'audiobook' ? styles.activeLink : ''}>📘 Audiobooks</li>
          <li onClick={() => setFilter('motivation')} className={filter === 'motivation' ? styles.activeLink : ''}>🎤 Motivation</li>
          <li onClick={() => setFilter('selfhelp')} className={filter === 'selfhelp' ? styles.activeLink : ''}>📚 Self-help</li>
          </ul>
      </aside>

      <main className={styles.content}>
        <h1 className={styles.heading}>🎧 Focused Mode</h1>
        <p className={styles.subheading}>Curated content to sharpen your mind before screen time.</p>

        <div className={styles.grid}>
          {filteredContent.map(item => (
            <div key={item.id} className={styles.card} onClick={() => setSelectedItem(item)}>
              <div className={styles.imageContainer}>
                <img src={item.thumbnail} alt={item.title} className={styles.image} />

                {/* Overlay Play Button */}
                <div className={styles.cardOverlay}>
                  <span className={styles.overlayIcon}>▶</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      {selectedItem && (
        <Modal onClose={() => setSelectedItem(null)}>
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.desc}</p>

          {/* Optionally add video or audio */}
          <iframe
            width="100%"
            height="400"
            src={getTrailerLink(selectedItem.id)} // We'll create this function next
            title="Preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </Modal>
      )}
    </div>

  );
}
