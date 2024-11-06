import React from 'react';

export default function Section({ title, subtitle, content, children, id }) {
  return (
    <section id={id} style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>{title}</h2>
      {subtitle && <p style={{ fontSize: '1.25rem' }}>{subtitle}</p>}
      {content && <p style={{ fontSize: '1rem', color: '#555' }}>{content}</p>}
      {children}
    </section>
  );
}
