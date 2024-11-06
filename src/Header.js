import React from 'react';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <nav style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
          <li><a href="#home" style={{ color: '#333', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#about" style={{ color: '#333', textDecoration: 'none' }}>About Me</a></li>
        </ul>
      </nav>
    </header>
  );
}
