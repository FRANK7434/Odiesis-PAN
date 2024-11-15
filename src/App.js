import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Section from './Section';
import ContactCard from './ContactCard';
import Footer from './Footer';
import About from './About';

// // Importing images 
import LogoBackground from './assets/images/Add a subheading.jpg';
import Image1 from './assets/images/WhatsApp Image 2024-10-27 at 14.34.29.jpeg';
import Image2 from './assets/images/WhatsApp Image 2024-10-27 at 14.34.34.jpeg';
import Image3 from './assets/images/WhatsApp Image 2024-10-27 at 14.34.36.jpeg';
import Image4 from './assets/images/WhatsApp Image 2024-11-09 at 10.58.24.jpeg';
import Image5 from './assets/images/WhatsApp Image 2024-11-09 at 10.58.25 (1).jpeg';
import Image6 from './assets/images/WhatsApp Image 2024-11-09 at 10.58.25.jpeg';
import Image7 from './assets/images/WhatsApp Image 2024-11-09 at 10.58.26 (1).jpeg';
import Image8 from './assets/images/WhatsApp Image 2024-11-09 at 10.58.26.jpeg';
import Image9 from './assets/images/WhatsApp Image 2024-11-09 at 10.58.27.jpeg';
import Image10 from './assets/images/WhatsApp Image 2024-11-09 at 10.58.28 (1).jpeg';
import Image11 from './assets/images/WhatsApp Image 2024-11-09 at 10.58.28.jpeg';
import Image12 from './assets/images/WhatsApp Image 2024-11-09 at 10.58.29.jpeg';
import Image13 from './assets/images/WhatsApp Image 2024-11-09 at 10.58.30 (1).jpeg';
import Image14 from './assets/images/WhatsApp Image 2024-11-09 at 10.58.30.jpeg';
import Image15 from './assets/images/WhatsApp Image 2024-11-09 at 10.58.31.jpeg';
import Image16 from './assets/images/WhatsApp Image 2024-11-09 at 10.58.32 (1).jpeg';
import Image17 from './assets/images/WhatsApp Image 2024-11-09 at 10.58.32.jpeg';
import Image18 from './assets/images/WhatsApp Image 2024-11-14 at 14.38.41 (1).jpeg';
import Image19 from './assets/images/WhatsApp Image 2024-11-14 at 14.38.41.jpeg';
import Image20 from './assets/images/WhatsApp Image 2024-11-14 at 14.38.42 (1).jpeg';
import Image21 from './assets/images/WhatsApp Image 2024-11-14 at 14.38.42.jpeg';
import Image22 from './assets/images/WhatsApp Image 2024-11-14 at 14.38.43 (1).jpeg';
import Image23 from './assets/images/WhatsApp Image 2024-11-14 at 14.38.43 (2).jpeg';
import Image24 from './assets/images/WhatsApp Image 2024-11-14 at 14.38.43.jpeg';
import Image25 from './assets/images/WhatsApp Image 2024-11-14 at 14.38.44.jpeg';

export default function App() {
  const [copiedText, setCopiedText] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Phrases to display in the text carousel
  const phrases = ["Unlock Your Academic Potential Today!", "Tap to order now!!"];

  // Cycle through phrases every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 6000); // Change phrase every 6 seconds

    return () => clearInterval(interval);
  }, [phrases.length]);
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
    Image23,
    Image24,
    Image25,
  ];
  //  testimonials here have defined the testimonials 
  const testimonials = [
    "Great service! Really helped me improve my grades.",
    "Amazing support, highly recommended!",
    "Professional and reliable assistance!",
    "Quick and efficient work. Highly satisfied.",
    "Outstanding quality of work!",
    "My go-to service for academic support.",
    "Affordable and trustworthy.",
    "Prompt responses and very helpful.",
    "I couldn't be happier with the service.",
    "Great attention to detail in every assignment.",
    "Exceptional support at all times.",
    "Highly recommended for students!",
    "Easy communication and quick turnaround.",
    "Thanks to this service, I'm stress-free!",
    "Saved me a lot of time and effort.",
    "Reliable and professional every time.",
    "Highly recommend this to everyone.",
    "Best experience I've ever had.",
    "Will definitely use this again.",
    "Exceeded my expectations!",
    "Totally worth it!",
    "Exceptional quality and service.",
    "The attention to detail is stunning.",
    "Amazing service and quality!",
    "Always delivers quality work!"
    
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
              70% { width: 100%; }
              85% { width: 100%; }
              100% { width: 0; }
            }

            @keyframes blinkCursor {
              50% { border-color: transparent; }
            }

            /* Typewriter effect styling for carousel phrases */
            .typewriter-carousel {
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              border-right: 3px solid #fff;
              animation: typewriter 5s steps(40, end) infinite, blinkCursor 0.75s step-end infinite;
            }

            /* Base styles for button */
            .button-typewriter {
              display: inline-block;
              padding: 10px 20px; /* Default padding for larger screens */
              font-size: 1.2rem; /* Default font size */
              font-weight: bold;
              color: #fff;
              background-color: #007bff;
              border: none;
              border-radius: 8px;
              cursor: pointer;
              font-family: monospace;
              white-space: nowrap;
              overflow: hidden;
            }

            /* Responsive adjustments */
            @media (max-width: 768px) {
              .button-typewriter {
                padding: 8px 16px; /* Reduce padding on medium screens */
                font-size: 1rem; /* Smaller font size on medium screens */
              }

              .typewriter-carousel {
                font-size: 1rem; /* Adjust font size in typewriter effect */
              }
            }

            @media (max-width: 480px) {
              .button-typewriter {
                padding: 6px 12px; /* Further reduce padding on small screens */
                font-size: 0.9rem; /* Even smaller font size on small screens */
              }

              .typewriter-carousel {
                font-size: 0.9rem; /* Adjust font size in typewriter effect */
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
                {/* Typewriter Effect Carousel Button */}
                <button
                  className="button-typewriter"
                >
                  {currentTextIndex === 1 ? (
                    <a
                      href="https://wa.me/+19099097204"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="typewriter-carousel"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {phrases[currentTextIndex]}
                    </a>
                  ) : (
                    <span className="typewriter-carousel">
                      {phrases[currentTextIndex]}
                    </span>
                  )}
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
                    To make it easier for you to get started, I'm offering a <span className="typewriter-special">special discount</span> on your first session—a little boost to help you see the difference that dedicated, one-on-one support can make. My goal is to make learning accessible, reduce your stress, and help you excel in every area of your studies.
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
                <Section>
                  <div style={{
                    backgroundColor: '#003366',
                    color: '#ffffff',
                    padding: '2rem',
                    borderRadius: '8px',
                    marginBottom: '2rem',
                    textAlign: 'left',
                  }}>
                    <h2 style={{
                      fontSize: '1.5rem',
                      color: '#ffffff',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                      fontStyle: 'italic'
                    }}>
                      My Mission?
                    </h2>
                    <h1 style={{
                      fontSize: '2.5rem',
                      color: '#ff0000',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                    }}>
                      Help you achieve your academic goals
                    </h1>
                    <p style={{
                      fontSize: '1rem',
                      color: '#ffffff',
                      lineHeight: '1.6',
                    }}>
                      Whether I'm proofreading and editing, checking for plagiarism or AI content, generating citations, or writing useful Knowledge Base articles, my aim is to support students on their journey to become better academic writers.
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      color: '#ffffff',
                      lineHeight: '1.6',
                      marginTop: '1rem'
                    }}>
                      I believe that every student should have the right tools for academic success. Free tools like a paraphrasing tool, grammar checker, summarizer and an AI Proofreader. I pave the way to your academic degree.
                    </p>
                  </div>
                </Section>
                <Section>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '2rem',
                  }}>
                    {/* Caring Support Card */}
                    <div style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      width: '30%',
                      padding: '1.5rem',
                      textAlign: 'center',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                      <div style={{
                        backgroundColor: '#007bff',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto 1rem',
                      }}>
                        <i className="fas fa-headset" style={{ color: '#ffffff', fontSize: '1.5rem' }}></i>
                      </div>
                      <h3 style={{
                        fontSize: '1.1rem',
                        color: '#333',
                        fontWeight: 'bold',
                        margin: '0.5rem 0',
                      }}>
                        Caring support 24/7
                      </h3>
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#555',
                      }}>
                        Free unlimited support
                      </p>
                    </div>

                    {/* Affordable Prices Card */}
                    <div style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      width: '30%',
                      padding: '1.5rem',
                      textAlign: 'center',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                      <div style={{
                        backgroundColor: '#ff3b3f',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto 1rem',
                      }}>
                        <i className="fas fa-comment-dollar" style={{ color: '#ffffff', fontSize: '1.5rem' }}></i>
                      </div>
                      <h3 style={{
                        fontSize: '1.1rem',
                        color: '#333',
                        fontWeight: 'bold',
                        margin: '0.5rem 0',
                      }}>
                        Affordable prices
                      </h3>
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#555',
                      }}>
                        Order for as low as $10/page
                      </p>
                    </div>

                    {/* Plagiarism-Free Guarantee Card */}
                    <div style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      width: '30%',
                      padding: '1.5rem',
                      textAlign: 'center',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                      <div style={{
                        backgroundColor: '#28a745',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto 1rem',
                      }}>
                        <i className="fas fa-file-alt" style={{ color: '#ffffff', fontSize: '1.5rem' }}></i>
                      </div>
                      <h3 style={{
                        fontSize: '1.1rem',
                        color: '#333',
                        fontWeight: 'bold',
                        margin: '0.5rem 0',
                      }}>
                        100% Plagiarism free
                      </h3>
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#555',
                      }}>
                        Unique and Authentic papers
                      </p>
                    </div>
                  </div>
                </Section>


                <Section title="">
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap', // Enables wrapping for smaller screens
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 0',
                  }}>
                    {/* Image Div */}
                    <div style={{
                      flex: '1',
                      paddingRight: '20px',
                      marginBottom: '20px',
                      maxWidth: '300px', // Adjusts width for better responsiveness
                    }}>
                      <img
                        src="https://images.pexels.com/photos/19288820/pexels-photo-19288820/free-photo-of-man-hand-on-laptop-with-cookie-coffee-and-plant-around.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Why Choose Me"
                        style={{
                          width: '100%',
                          borderRadius: '10px',
                        }}
                      />
                    </div>

                    {/* Content Div */}
                    <div style={{
                      flex: '2',
                      paddingLeft: '20px',
                      textAlign: 'left',
                      maxWidth: '500px', // Adjusts width for better responsiveness
                    }}>
                      <h2 style={{
                        fontSize: '23px',
                        fontWeight: 'bold',
                        marginBottom: '14px',
                      }}>
                        Why Choose Me?
                      </h2>
                      <ul style={{
                        listStyleType: 'none',
                        paddingLeft: '0',
                        lineHeight: '1.6',
                        fontSize: '16px',
                      }}>
                        <li><strong>Personalized Support</strong> – I tailor my assistance to each student's unique needs, ensuring relevant and focused help.</li>
                        <li><strong>Expert Knowledge</strong> – With expertise in essays, assignments, quizzes, exams, and online classes, I provide high-quality guidance.</li>
                        <li><strong>Confidentiality & Integrity</strong> – Your privacy and trust are priorities, ensuring a respectful and secure experience.</li>
                        <li><strong>Flexible Approach</strong> – I adapt to your schedule and learning pace, making it easier to balance academic responsibilities.</li>
                        <li><strong>Student Success Focused</strong> – I'm committed to being a reliable partner in your academic journey, dedicated to helping you excel.</li>
                      </ul>
                      <a href="https://wa.me/+19099097204" style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#ff007f',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        marginTop: '20px',
                        fontSize: '16px',
                      }}>
                        Contact Us!
                      </a>
                    </div>
                  </div>

                  {/* Inline media queries for responsiveness */}
                  <style>
                    {`
      @media (max-width: 768px) {
        .why-choose-me-section {
          flex-direction: column;
        }
        .why-choose-me-section img {
          margin-bottom: 20px;
        }
      }
      @media (max-width: 480px) {
        .why-choose-me-section h2 {
          font-size: 20px;
        }
        .why-choose-me-section ul li {
          font-size: 14px;
        }
        .why-choose-me-section a {
          font-size: 14px;
          padding: 8px 16px;
        }
      }
    `}
                  </style>
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
