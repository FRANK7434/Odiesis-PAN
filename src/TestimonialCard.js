import React from 'react';

export default function TestimonialCard({ text }) {
  return (
    <div style={{
      border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', textAlign: 'center'
    }}>
      <img src="/placeholder.svg?height=200&width=300" alt="Testimonial" style={{
        width: '100%', height: 'auto', objectFit: 'cover', marginBottom: '1rem'
      }} />
      <p style={{ fontSize: '0.875rem', color: '#555' }}>{text}</p>
    </div>
  );
}
