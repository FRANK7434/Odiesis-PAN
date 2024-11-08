 import React, { useState, useEffect } from 'react';
import Header from './Header';
import Section from './Section';
import ContactCard from './ContactCard';
import Footer from './Footer';

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
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
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
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        width: '100%',
        maxWidth: '800px',
        padding: '2rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px'
      }}>
        <Header />
        <main style={{ padding: '2rem 0' }}>
          <Section id="home" title="Welcome to Academic Assistance" subtitle="Get professional help with your academic needs." />
          
          <Section id="about" title="About Me">
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
            {/* Carousel Container */}
            <div style={{
              position: 'relative',
              width: 'auto',
              height: '500px',
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}>
              {/* Slide Image */}
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

              {/* Testimonial Text Overlay */}
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

              {/* Prev and Next Buttons */}
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
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li><strong>Personalized Support</strong> – I tailor my assistance to each student's unique needs, ensuring relevant and focused help.</li>
              <li><strong>Expert Knowledge</strong> – With expertise in essays, assignments, quizzes, exams, and online classes, I provide high-quality guidance.</li>
              <li><strong>Confidentiality & Integrity</strong> – Your privacy and trust are priorities, ensuring a respectful and secure experience.</li>
              <li><strong>Flexible Approach</strong> – I adapt to your schedule and learning pace, making it easier to balance academic responsibilities.</li>
              <li><strong>Student Success Focused</strong> – I'm committed to being a reliable partner in your academic journey, dedicated to helping you excel.</li>
            </ul>
          </Section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
