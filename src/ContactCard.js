import React from 'react';

export default function ContactCard({ icon, text, buttonText, onClick }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '1px solid #ddd',
      padding: '1rem',
      borderRadius: '8px',
      marginBottom: '0.5rem'
    }}>
      <p style={{ margin: 0 }}>{text}</p>
      <button onClick={onClick} style={{
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '0.5rem 1rem',
        cursor: 'pointer'
      }}>
        {buttonText}
      </button>
    </div>
  );
}
