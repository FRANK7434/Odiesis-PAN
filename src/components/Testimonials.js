import React from "react";
import testimonial1 from '../assets/testimonial1.jpeg';
import testimonial2 from '../assets/testimonial2.jpeg';
import testimonial3 from '../assets/testimonial3.jpeg';
import testimonial4 from '../assets/testimonial4.jpeg';
import testimonial5 from '../assets/testimonial5.jpeg';
import testimonial6 from '../assets/testimonial6.jpeg';
import testimonial7 from '../assets/testimonial7.jpeg';
import testimonial8 from '../assets/testimonial8.jpeg';
import testimonial9 from '../assets/testimonial9.jpeg';
import testimonial10 from '../assets/testimonial10.jpeg';
import testimonial11 from '../assets/testimonial11.jpeg';
import testimonial12 from '../assets/testimonial12.jpeg';
import testimonial13 from '../assets/testimonial13.jpeg';
import testimonial14 from '../assets/testimonial14.jpeg';
import testimonial15 from '../assets/testimonial15.jpeg';
import testimonial16 from '../assets/testimonial16.jpeg';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Correct import for Swiper modules
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  { id: 1, img: testimonial1, alt: "Testimonial 1", message: "Absolutely thrilled with the academic paper—meticulously researched and well-written!" },
  { id: 2, img: testimonial2, alt: "Testimonial 2", message: "Highly impressed by the clarity and depth of the work provided. Truly top-notch!" },
  { id: 3, img: testimonial3, alt: "Testimonial 3", message: "Delivered an exceptional paper that exceeded all my expectations. Thank you!" },
  { id: 4, img: testimonial4, alt: "Testimonial 4", message: "Outstanding attention to detail and adherence to guidelines. Brilliant work!" },
  { id: 5, img: testimonial5, alt: "Testimonial 5", message: "The writing quality is impeccable, and the arguments are well-supported. Amazing job!" },
  { id: 6, img: testimonial6, alt: "Testimonial 6", message: "I’m genuinely impressed by the professionalism and creativity in the academic content." },
  { id: 7, img: testimonial7, alt: "Testimonial 7", message: "This has to be one of the best academic pieces I’ve received. Exceptional quality!" },
  { id: 8, img: testimonial8, alt: "Testimonial 8", message: "The work was delivered on time and exceeded every expectation. Brilliant!" },
  { id: 9, img: testimonial9, alt: "Testimonial 9", message: "Phenomenal writing skills! The paper was thoroughly researched and compellingly written." },
  { id: 10, img: testimonial10, alt: "Testimonial 10", message: "A flawless execution of academic writing! I’m very pleased with the results." },
  { id: 11, img: testimonial11, alt: "Testimonial 11", message: "The structure, grammar, and citations were perfect. Great job!" },
  { id: 12, img: testimonial12, alt: "Testimonial 12", message: "Received my paper earlier than expected, and the quality was unmatched. Thank you!" },
  { id: 13, img: testimonial13, alt: "Testimonial 13", message: "This academic writing service is a game-changer! Stellar work every time." },
  { id: 14, img: testimonial14, alt: "Testimonial 14", message: "I couldn’t be happier with the insightful and thorough academic paper I received." },
  { id: 15, img: testimonial15, alt: "Testimonial 15", message: "The paper was a masterpiece—engaging and informative. Fantastic work!" },
  { id: 16, img: testimonial16, alt: "Testimonial 16", message: "Thank you for your exceptional writing. It’s always a pleasure to work with you!" },
];


const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
          What Our Clients Say
        </h2>

        {/* Swiper Slider */}
        <div className="pt-16">
        <Swiper
          navigation={true} // Enable navigation with buttons
          modules={[Navigation, Autoplay, Pagination]} // Include the Navigation module
          loop={true} // Allow looping of slides
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Show one slide at a time
          autoplay={{
            delay: 3000, // Autoplay every 3 seconds
            disableOnInteraction: false, // Allow autoplay to continue after interaction
          }}
          className="w-full max-w-4xl mx-auto"
        >
          {testimonials.map((testimonial) => (
  <SwiperSlide key={testimonial.id}>
  <div className="overflow-hidden rounded-lg shadow-lg">
    {/* Image Section */}
    <div className="relative">
      <img
        src={testimonial.img}
        alt={testimonial.alt}
        className="w-full h-80 object-cover"
      />
    </div>

    {/* Message Section Below Image */}
    <div className="bg-gray-800 text-white text-center p-2 mt-2">
      <p className="text-sm sm:text-base">{testimonial.message}</p>
    </div>
  </div>
</SwiperSlide>

))}
        </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;