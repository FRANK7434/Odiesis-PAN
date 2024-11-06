import React from 'react';

export default function ContactCard({ icon, text, buttonText, onClick }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: '1rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '0.5rem' }}>{icon}</span>
        <span>{text}</span>
      </div>
      <button onClick={onClick} style={{
        backgroundColor: '#3182ce', color: '#fff', border: 'none', padding: '0.5rem 1rem',
        borderRadius: '4px', cursor: 'pointer'
      }}>
        {buttonText}
      </button>
    </div>
  );
}
