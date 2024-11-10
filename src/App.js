import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Section from './Section';
import ContactCard from './ContactCard';
import Footer from './Footer';
import About from './About';

// Importing images
import LogoBackground from './assets/images/Add a subheading.jpg';
import Image1 from './assets/images/WhatsApp Image 2024-10-27 at 14.34.29.jpeg';
import Image2 from './assets/images/WhatsApp Image 2024-10-27 at 14.34.34.jpeg';
import Image3 from './assets/images/WhatsApp Image 2024-10-27 at 14.34.36.jpeg';

export default function App() {
  const [copiedText, setCopiedText] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [Image1, Image2, Image3];
  const testimonials = [
    "Great service! Really helped me improve my grades.",
    "Amazing support, highly recommended!",
    "Professional and reliable assistance!"
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        backgroundImage: `url(${LogoBackground})`,
        backgroundSize: '200px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#f0f0f0',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}>
        <style>
          {`
            @keyframes typewriter {
              0% { width: 0; }
              70% { width: 100%; } /* Typing animation complete */
              85% { width: 100%; } /* Pause to allow reading */
              100% { width: 0; } /* Reset typing effect */
            }

            @keyframes blinkCursor {
              50% { border-color: transparent; }
            }

            /* Typewriter text styling */
            .typewriter-text {
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              border-right: 3px solid #fff;
              animation: typewriter 5s steps(40, end) infinite, blinkCursor 0.75s step-end infinite;
              font-size: 1.2rem;
            }

            /* Responsive adjustments */
            @media (max-width: 768px) {
              .button-typewriter {
                font-size: 1rem;
                padding: 6px 12px;
              }
              .typewriter-text {
                font-size: 1rem;
              }
            }

            @media (max-width: 480px) {
              .button-typewriter {
                font-size: 0.9rem;
                padding: 4px 10px;
              }
              .typewriter-text {
                font-size: 0.9rem;
              }
            }
          `}
        </style>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          width: '100%',
          maxWidth: '800px',
          padding: '2rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px'
        }}>
          <Header />
          <Routes>
            {/* Home Route */}
            <Route path="/" element={
              <main style={{ padding: '2rem 0' }}>
                {/* Typewriter Effect Button */}
                <button
                  className="button-typewriter"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px', // Default padding for larger screens
                    fontSize: '1.2rem', // Default font size
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontFamily: 'monospace',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                  }}
                >
                  <span className="typewriter-text">
                    Unlock Your Academic Potential Today!
                  </span>
                </button>

                <Section>
                  <p>Are you feeling overwhelmed with essays, assignments, quizzes, or exams? Don’t let academic stress hold you back from achieving your best! I'm here to provide personalized support for all your academic needs:</p>
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                    <li style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Essay Writing</li>
                    <li style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Assignment Help</li>
                    <li style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Quizzes</li>
                    <li style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Exams</li>
                    <li style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Online Classes</li>
                  </ul>
                  <p>
                    To make it easier for you to get started, I'm offering a <strong>special discount</strong> on your first session—a little boost to help you see the difference that dedicated, one-on-one support can make. My goal is to make learning accessible, reduce your stress, and help you excel in every area of your studies.
                  </p>
                  <p>Let’s work together to build your confidence and academic skills. Don’t wait—reach out today for more details!</p>
                </Section>

                <Section title="Contact Information">
                  <ContactCard
                    icon=""
                    text="+1 (909) 909-7204"
                    buttonText={copiedText === '+1 (909) 909-7204' ? 'Copied!' : 'Copy'}
                    onClick={() => copyToClipboard('+1 (909) 909-7204')}
                  />
                  <ContactCard
                    icon=""
                    text="scorelinewriters54@gmail.com"
                    buttonText={copiedText === 'scorelinewriters54@gmail.com' ? 'Copied!' : 'Copy Email'}
                    onClick={() => copyToClipboard('scorelinewriters54@gmail.com')}
                  />
                  <ContactCard
                    icon="whatsapp"
                    text="WhatsApp"
                    buttonText="Chat on WhatsApp"
                    onClick={() => window.open('https://wa.me/+19099097204', '_blank')}
                  />
                  <ContactCard
                    icon="discord"
                    text="Discord"
                    buttonText="Join Discord Server"
                    onClick={() => window.open('https://discord.gg/yMVerSGf', '_blank')}
                  />
                </Section>

                <Section title="Client Testimonials">
                  <div style={{
                    position: 'relative',
                    width: 'auto',
                    height: '500px',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                  }}>
                    <img 
                      src={images[currentSlide]} 
                      alt={`Slide ${currentSlide + 1}`} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        borderRadius: '8px',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      color: '#fff',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      maxWidth: '90%',
                      textAlign: 'center',
                    }}>
                      {testimonials[currentSlide]}
                    </div>
                    <button onClick={handlePrevSlide} style={{
                      position: 'absolute',
                      top: '50%',
                      left: '10px',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '50%',
                      width: '30px',
                      height: '30px',
                      cursor: 'pointer',
                    }}>‹</button>
                    <button onClick={handleNextSlide} style={{
                      position: 'absolute',
                      top: '50%',
                      right: '10px',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '50%',
                      width: '30px',
                      height: '30px',
                      cursor: 'pointer',
                    }}>›</button>
                  </div>
                </Section>

                <Section title="Why Choose Me?">
                  <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                    <li><strong>Personalized Support</strong> – I tailor my assistance to each student's unique needs, ensuring relevant and focused help.</li>
                    <li><strong>Expert Knowledge</strong> – With expertise in essays, assignments, quizzes, exams, and online classes, I provide high-quality guidance.</li>
                    <li><strong>Confidentiality & Integrity</strong> – Your privacy and trust are priorities, ensuring a respectful and secure experience.</li>
                    <li><strong>Flexible Approach</strong> – I adapt to your schedule and learning pace, making it easier to balance academic responsibilities.</li>
                    <li><strong>Student Success Focused</strong> – I'm committed to being a reliable partner in your academic journey, dedicated to helping you excel.</li>
                  </ul>
                </Section>
              </main>
            } />

            {/* About Route */}
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
