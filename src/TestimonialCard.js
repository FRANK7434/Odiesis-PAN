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
          width: '100%',              // Make the image take the full width of the container
          height: '150px',            // Set a fixed height for a uniform look
          objectFit: 'contain',       // Ensure the entire image fits without cropping
          marginBottom: '1rem',
          borderRadius: '8px',        // Square format with slightly rounded corners
          border: '1px solid #ddd',   // Add a subtle border for clarity
        }} 
      />
      <p style={{ fontStyle: 'italic', color: '#555', fontSize: '0.95rem' }}>{text}</p>
    </div>
  );
}
