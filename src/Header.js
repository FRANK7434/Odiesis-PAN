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
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 1rem',
      }}>
        {/* Logo centered */}
        <img src={Logo} alt="Logo" style={{
          maxHeight: '350px',      // Sets a maximum height to prevent the image from getting too large
          maxWidth: '100%',        // Ensures the logo scales to fit within the container width
          width: '100%',           // Maintains the aspect ratio
          height: 'Auto',          // Maintains the aspect ratio
          marginBottom: '1rem',    // Adds spacing below the logo
        }} />

        {/* Navigation Links styled as buttons, displayed below the logo */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '1rem',
          margin: 0,
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
