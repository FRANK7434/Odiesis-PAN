 import React from 'react';
import Logo from './assets/images/Add a subheading.jpg';

export default function Header() {
  return (
    <header style={{
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '1rem 0'
    }}>
      <nav style={{
        maxWidth: '800px',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem'
      }}>
        {/* Logo aligned to the left */}
        <img src={Logo} alt="Logo" style={{
          height: '400px', // Adjust height to fit well
          width: 'auto',
          objectFit: 'contain'
        }} />

        {/* Navigation Links */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '1.5rem',
          margin: 0,
          alignItems: 'center'
        }}>
          <li><a href="#home" style={{
            color: '#333',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer'  // Pointer cursor to indicate clickable link
          }}>Home</a></li>
          <li><a href="#about" style={{
            color: '#333',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer'
          }}>About Me</a></li>
        </ul>
      </nav>
    </header>
  );
}
