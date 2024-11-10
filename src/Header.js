import React from 'react';
import { Link } from 'react-router-dom';
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

        {/* Navigation Links styled as buttons */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '1.5rem',
          margin: 0,
          alignItems: 'center'
        }}>
          <li>
            <Link to="/" style={{
              color: '#fff',
              backgroundColor: '#007bff',
              padding: '10px 20px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'inline-block'
            }}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={{
              color: '#fff',
              backgroundColor: '#007bff',
              padding: '10px 20px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'inline-block'
            }}>About Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
