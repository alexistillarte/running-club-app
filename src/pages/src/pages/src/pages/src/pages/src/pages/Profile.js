import React from 'react';

function Profile() {
  const achievements = [
    { icon: '🥇', title: 'Primer 10K', date: 'Marzo 2026' },
    { icon: '🔥', title: '30 días seguidos', date: 'Febrero 2026' },
    { icon: '⚡', title: 'Pace bajo 5:00', date: 'Enero 2026' },
    { icon: '🏅', title: 'Top 3 del mes', date: 'Diciembre 2025' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.profileHeader}>
        <div style={styles.avatar}>🏃</div>
        <h1 style={styles.name}>Alex Istillarte</h1>
        <p style={styles.role}>🟠 Admin — Running Club Orlando</p>
        <div style={styles.membershipBadge}>
          ✅ Membresía Activa — $15/mes
        </div>
      </div>

      <div style={styles.statsRow}>
        <div style={styles.statBox}>
          <p style={styles.statNum}>347</p>
          <p style={styles.statLbl}>km totales</p>
        </div>
        <div style={styles.statBox}>
          <p style={styles.statNum}>89</p>
          <p style={styles.statLbl}>carreras</p>
        </div>
        <div style={styles.statBox}>
          <p style={styles.statNum}>5:34</p>
          <p style={styles.statLbl}>pace avg</p>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🎯 Meta actual</h2>
        <div style={styles.goalCard}>
          <p style={styles.goalText}>10K en menos de 55:00</p>
          <p style={styles.goalSub}>Carrera: 7 de Marzo 2026</p>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: '75%' }} />
          </div>
          <p style={styles.progressText}>75% del entrenamiento completado</p>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🏆 Logros</h2>
        <div style={styles.achievementsGrid}>
          {achievements.map((a, i) => (
            <div key={i} style={styles.achievementCard}>
              <span style={styles.achievementIcon}>{a.icon}</span>
              <p style={styles.achievementTitle}>{a.title}</p>
              <p style={styles.achievementDate}>{a.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🔗 Conexiones</h2>
        <div style={styles.connectCard}>
          <span>🟠 Strava</span>
          <button style={styles.connectBtn}>Conectar</button>
        </div>
        <div style={styles.connectCard}>
          <span>⚫ Garmin</span>
          <button style={styles.connectBtn}>Conectar</button>
        </div>
      </div>

      <div style={styles.nav}>
        <a href="/" style={styles.navBtn}>🏠 Inicio</a>
        <a href="/dashboard" style={styles.navBtn}>📊 Dashboard</a>
        <a href="/feed" style={styles.navBtn}>📸 Feed</a>
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
  profileHeader: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  avatar: {
    fontSize: '4rem',
    background: 'rgba(255,107,53,0.2)',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
  },
  name: {
    fontSize: '1.8rem',
    fontWeight: '800',
    margin: '0 0 8px',
  },
  role: {
    opacity: 0.7,
    margin: '0 0 12px',
  },
  membershipBadge: {
    display: 'inline-block',
    background: 'rgba(0,200,100,0.2)',
    border: '1px solid rgba(0,200,100,0.4)',
    borderRadius: '50px',
    padding: '6px 16px',
    fontSize: '0.85rem',
    color: '#00c864',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'space-around',
    background: 'rgba(255,255,255,0.07)',
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '32px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  statBox: {
    textAlign: 'center',
  },
  statNum: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: '#FF6B35',
    margin: '0 0 4px',
  },
  statLbl: {
    fontSize: '0.8rem',
    opacity: 0.6,
    margin: 0,
  },
  section: {
    marginBottom: '28px',
  },
  sectionTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    marginBottom: '12px',
  },
  goalCard: {
    background: 'rgba(255,255,255,0.07)',
    borderRadius: '16px',
    padding: '20px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  goalText: {
    fontWeight: '700',
    fontSize: '1.1rem',
    margin: '0 0 4px',
  },
  goalSub: {
    opacity: 0.6,
    fontSize: '0.9rem',
    margin: '0 0 16px',
  },
  progressBar: {
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '50px',
    height: '8px',
    overflow: 'hidden',
  },
  progressFill: {
    background: 'linear-gradient(90deg, #FF6B35, #FFD700)',
    height: '100%',
    borderRadius: '50px',
  },
  progressText: {
    fontSize: '0.8rem',
    opacity: 0.6,
    margin: '8px 0 0',
  },
  achievementsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
  },
  achievementCard: {
    background: 'rgba(255,255,255,0.07)',
    borderRadius: '12px',
    padding: '16px',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  achievementIcon: {
    fontSize: '2rem',
  },
  achievementTitle: {
    fontWeight: '600',
    fontSize: '0.9rem',
    margin: '8px 0 4px',
  },
  achievementDate: {
    opacity: 0.6,
    fontSize: '0.75rem',
    margin: 0,
  },
  connectCard: {
    background: 'rgba(255,255,255,0.07)',
    borderRadius: '12px',
    padding: '16px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    border: '1px solid rgba(255,255,255,0.1)',
    fontWeight: '600',
  },
  connectBtn: {
    background: 'linear-gradient(90deg, #FF6B35, #FF8C42)',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    padding: '8px 20px',
    cursor: 'pointer',
    fontWeight: '700',
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

export default Profile;