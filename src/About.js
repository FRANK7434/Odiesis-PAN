import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // Navigate back to the homepage
  };

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: 'auto',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1>About Me</h1>
      <p>
        Welcome! I'm here to support students in achieving their academic goals with confidence and success. With expertise across a range of educational needs, I provide personalized assistance in:
      </p>
      <ul style={{ paddingLeft: '1.5rem' }}>
        <li><strong>Essay writing</strong></li>
        <li><strong>Assignment help</strong></li>
        <li><strong>Quizzes</strong></li>
        <li><strong>Exams</strong></li>
        <li><strong>Online classes</strong></li>
      </ul>
      <p>
        My approach is to make learning accessible, reduce stress, and help you excel with tailored support. Whether you're looking to improve your writing skills, understand complex concepts, or prepare for an upcoming test, I offer reliable guidance every step of the way. I believe that every student deserves a helping hand to navigate their academic journey smoothly.
      </p>
      <p>
        Feel free to reach out for assistance in your studies—I'm dedicated to helping you achieve excellence!
      </p>

      <button onClick={handleGoBack} style={{
        marginTop: '2rem',
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}>
        Click Here to Return to Home Page
      </button>
    </div>
  );
}
