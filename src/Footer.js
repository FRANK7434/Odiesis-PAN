 
import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#556b2F',
      color: '#F0E68C',
      padding: '1rem',
      textAlign: 'center',
      marginTop: '2rem',
      position: 'relative',
    }}>
      <p>&copy; 2024 Academic Assistance. All rights reserved.</p>
      
      <a 
        href="https://wa.me/19099097204" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: '#ff007f',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '25px',
          marginTop: '1rem',
          cursor: 'pointer',
          fontSize: '0.9rem',
          textDecoration: 'none',
          justifyContent: 'center'
        }}
      >
        <img 
          src="https://img.icons8.com/ios-filled/24/ffffff/whatsapp.png" 
          alt="WhatsApp Icon" 
          style={{ marginRight: '8px' }}
        />
        <span>Chat Support is active 24x7</span>
      </a>
    </footer>
  );
}
