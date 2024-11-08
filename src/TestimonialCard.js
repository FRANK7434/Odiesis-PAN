 
import React from 'react';

export default function TestimonialCard({ text, image }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '1.5rem',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    }}>
      <img 
        src={image} 
        alt="Client testimonial" 
        style={{
          width: '100%',              // Take full width of the container
          height: '250px',            // Set a fixed height for consistency
          objectFit: 'contain',       // Ensure the entire image fits without cropping
          marginBottom: '1rem',
          borderRadius: '8px',        // Slight rounding for a polished look
          border: '1px solid #ddd',   // Subtle border for visual clarity
          backgroundColor: '#f0f0f0', // Light background to fill empty space if needed
        }} 
      />
      <p style={{ fontStyle: 'italic', color: '#555', fontSize: '0.95rem' }}>{text}</p>
    </div>
  );
}
