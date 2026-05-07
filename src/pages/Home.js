import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>🏃 Running Club</h1>
        <p style={styles.subtitle}>Corre más lejos. Llega más lejos.</p>
        <div style={styles.buttons}>
          <a href="/login" style={styles.btnPrimary}>Unirme al club</a>
          <a href="/dashboard" style={styles.btnSecondary}>Ver mi dashboard</a>
        </div>
      </div>
      <div style={styles.features}>
        <div style={styles.card}>
          <span style={styles.icon}>📊</span>
          <h3>Tus métricas</h3>
          <p>Conecta Garmin o Strava y ve tu progreso en tiempo real</p>
        </div>
        <div style={styles.card}>
          <span style={styles.icon}>🎯</span>
          <h3>Tus metas</h3>
          <p>Define tus objetivos y celebra cada PR con el grupo</p>
        </div>
        <div style={styles.card}>
          <span style={styles.icon}>👥</span>
          <h3>Tu comunidad</h3>
          <p>Feed de fotos, chat y retos con tu grupo de running</p>
        </div>
        <div style={styles.card}>
          <span style={styles.icon}>💳</span>
          <h3>Membresía simple</h3>
          <p>$10 o $15 al mes, cobro automático sin complicaciones</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    color: 'white',
  },
  hero: {
    textAlign: 'center',
    padding: '80px 20px 60px',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '800',
    margin: '0 0 16px',
    background: 'linear-gradient(90deg, #FF6B35, #FFD700)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '1.3rem',
    opacity: 0.8,
    marginBottom: '40px',
  },
  buttons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    background: 'linear-gradient(90deg, #FF6B35, #FF8C42)',
    color: 'white',
    padding: '14px 32px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1rem',
  },
  btnSecondary: {
    background: 'transparent',
    color: 'white',
    padding: '14px 32px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1rem',
    border: '2px solid white',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px',
    padding: '0 40px 80px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    background: 'rgba(255,255,255,0.07)',
    borderRadius: '16px',
    padding: '32px 24px',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  icon: {
    fontSize: '2.5rem',
  },
};

export default Home;