import React from 'react';

function Dashboard() {
  const stats = [
    { label: 'Distancia este mes', value: '47.3 km', icon: '🏃' },
    { label: 'Tiempo total', value: '4h 23m', icon: '⏱️' },
    { label: 'Pace promedio', value: '5:34 /km', icon: '⚡' },
    { label: 'Carreras completadas', value: '12', icon: '✅' },
  ];

  const goals = [
    { name: 'Meta 10K — Marzo', progress: 75, target: '55:00', current: '57:30' },
    { name: 'Distancia mensual', progress: 60, target: '80 km', current: '47.3 km' },
    { name: 'Carreras por semana', progress: 85, target: '4/semana', current: '3.4/semana' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>👋 Hola, Alex</h1>
        <p style={styles.subtitle}>Mayo 2026 — Sigue así, vas fuerte 💪</p>
      </div>

      <div style={styles.statsGrid}>
        {stats.map((s, i) => (
          <div key={i} style={styles.statCard}>
            <span style={styles.statIcon}>{s.icon}</span>
            <p style={styles.statValue}>{s.value}</p>
            <p style={styles.statLabel}>{s.label}</p>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🎯 Mis Metas</h2>
        {goals.map((g, i) => (
          <div key={i} style={styles.goalCard}>
            <div style={styles.goalHeader}>
              <span style={styles.goalName}>{g.name}</span>
              <span style={styles.goalStats}>{g.current} / {g.target}</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: `${g.progress}%` }} />
            </div>
            <p style={styles.progressText}>{g.progress}% completado</p>
          </div>
        ))}
      </div>

      <div style={styles.nav}>
        <a href="/" style={styles.navBtn}>🏠 Inicio</a>
        <a href="/feed" style={styles.navBtn}>📸 Feed</a>
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
    marginBottom: '32px',
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
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    marginBottom: '32px',
  },
  statCard: {
    background: 'rgba(255,255,255,0.07)',
    borderRadius: '16px',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  statIcon: {
    fontSize: '2rem',
  },
  statValue: {
    fontSize: '1.5rem',
    fontWeight: '800',
    margin: '8px 0 4px',
    color: '#FF6B35',
  },
  statLabel: {
    fontSize: '0.8rem',
    opacity: 0.7,
    margin: 0,
  },
  section: {
    marginBottom: '32px',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    marginBottom: '16px',
  },
  goalCard: {
    background: 'rgba(255,255,255,0.07)',
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  goalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  goalName: {
    fontWeight: '600',
  },
  goalStats: {
    opacity: 0.7,
    fontSize: '0.9rem',
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
    transition: 'width 0.5s ease',
  },
  progressText: {
    fontSize: '0.8rem',
    opacity: 0.6,
    margin: '8px 0 0',
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

export default Dashboard;