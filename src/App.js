import React, { useState } from 'react';
import Header from './Header';
import Section from './Section';
import ContactCard from './ContactCard';
import TestimonialCard from './TestimonialCard';
import Footer from './Footer';

// Importing images
import LogoBackground from './assets/images/Add a subheading.jpg';
import Image1 from './assets/images/WhatsApp Image 2024-10-27 at 14.34.29.jpeg';
import Image2 from './assets/images/WhatsApp Image 2024-10-27 at 14.34.34.jpeg';
import Image3 from './assets/images/WhatsApp Image 2024-10-27 at 14.34.36.jpeg';

export default function App() {
  const [copiedText, setCopiedText] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
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
          </Section>

          <Section title="Client Testimonials">
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <TestimonialCard text="Great service! Really helped me improve my grades." image={Image1} />
              <TestimonialCard text="Amazing support, highly recommended!" image={Image2} />
              <TestimonialCard text="Professional and reliable assistance!" image={Image3} />
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
