import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <div>
      <Navbar />
      <div  className="smooth-scroll">
      <section id='home'>
      <Hero />
      </section>
      <section id='about-us'>
      <About />
      </section>
      <section id='our-services'>
      <Services />
      </section>
      <section id='pricing'>
      <Pricing />
      </section>
      <section id='testimonial'>
      <Testimonials />
      </section>
      <section id='contact-us'>
      <ContactForm />
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;