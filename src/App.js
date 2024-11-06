import React, { useState } from 'react';
import Header from './Header';
import Section from './Section';
import ContactCard from './ContactCard';
import TestimonialCard from './TestimonialCard';
import Footer from './Footer';

// Importing images
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
    <div style={{ minHeight: '100vh', backgroundColor: '#f7fafc', fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <main style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
        
        <Section title="Welcome to Academic Assistance" subtitle="Get professional help with your academic needs." id="home">
          
        </Section>
        
        <Section title="About Me">
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
  );
}
