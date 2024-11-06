import React from 'react';

export default function Section({ title, subtitle, children }) {
  return (
    <section style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '0.5rem' }}>{title}</h2>
      {subtitle && <p style={{ color: '#666', marginBottom: '1rem' }}>{subtitle}</p>}
      {children}
    </section>
  );
}
