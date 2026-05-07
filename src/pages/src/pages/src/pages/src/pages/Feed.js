import React, { useState } from 'react';

const posts = [
  {
    id: 1,
    user: 'Carlos M.',
    avatar: '🏃',
    time: 'Hace 2 horas',
    activity: 'Carrera matutina — 8.5 km',
    pace: '5:22 /km',
    image: null,
    likes: 12,
    comment: '¡Arrancando la semana fuerte! 💪',
  },
  {
    id: 2,
    user: 'María G.',
    avatar: '👟',
    time: 'Hace 5 horas',
    activity: 'Tempo Run — 6 km',
    pace: '4:58 /km',
    image: null,
    likes: 18,
    comment: 'PR en pace! No me lo creo todavía 🔥',
  },
  {
    id: 3,
    user: 'Alex I.',
    avatar: '⚡',
    time: 'Ayer',
    activity: 'Long Run — 12 km',
    pace: '5:45 /km',
    image: null,
    likes: 24,
    comment: 'Preparando el 10K de marzo. Va tomando forma 🎯',
  },
];

function Feed() {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>📸 Feed del Club</h1>
        <p style={styles.subtitle}>Actividad reciente del grupo</p>
      </div>

      <div style={styles.posts}>
        {posts.map(post => (
          <div key={post.id} style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.avatar}>{post.avatar}</span>
              <div>
                <p style={styles.userName}>{post.user}</p>
                <p style={styles.time}>{post.time}</p>
              </div>
            </div>

            <div style={styles.activity}>
              <p style={styles.activityName}>🏃 {post.activity}</p>
              <p style={styles.pace}>⚡ Pace: {post.pace}</p>
            </div>

            <p style={styles.comment}>"{post.comment}"</p>

            <div style={styles.cardFooter}>
              <button
                style={styles.likeBtn}
                onClick={() => toggleLike(post.id)}
              >
                {liked[post.id] ? '❤️' : '🤍'} {post.likes + (liked[post.id] ? 1 : 0)}
              </button>
              <button style={styles.commentBtn}>💬 Comentar</button>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.nav}>
        <a href="/" style={styles.navBtn}>🏠 Inicio</a>
        <a href="/dashboard" style={styles.navBtn}>📊 Dashboard</a>
        <a href="/profile" style={styles.navBtn}>👤 Perfil</a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    fontFamily: "'Segoe UI', sans-serif",
    color: 'white',
    padding: '32px 20px 100px',
  },
  header: {
    marginBottom: '24px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '800',
    margin: '0 0 8px',
  },
  subtitle: {
    opacity: 0.7,
    margin: 0,
  },
  posts: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  card: {
    background: 'rgba(255,255,255,0.07)',
    borderRadius: '16px',
    padding: '20px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  avatar: {
    fontSize: '2rem',
    background: 'rgba(255,107,53,0.2)',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontWeight: '700',
    margin: 0,
  },
  time: {
    opacity: 0.6,
    fontSize: '0.8rem',
    margin: 0,
  },
  activity: {
    background: 'rgba(255,107,53,0.1)',
    borderRadius: '12px',
    padding: '12px',
    marginBottom: '12px',
  },
  activityName: {
    fontWeight: '600',
    margin: '0 0 4px',
  },
  pace: {
    opacity: 0.8,
    margin: 0,
    fontSize: '0.9rem',
  },
  comment: {
    opacity: 0.8,
    fontStyle: 'italic',
    marginBottom: '16px',
  },
  cardFooter: {
    display: 'flex',
    gap: '12px',
  },
  likeBtn: {
    background: 'rgba(255,255,255,0.1)',
    border: 'none',
    borderRadius: '50px',
    padding: '8px 16px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: '600',
  },
  commentBtn: {
    background: 'rgba(255,255,255,0.1)',
    border: 'none',
    borderRadius: '50px',
    padding: '8px 16px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: '600',
  },
  nav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(15,52,96,0.95)',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '16px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  navBtn: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
  },
};

export default Feed;