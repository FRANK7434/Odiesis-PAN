import React from "react";
 import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Scoreline Writers</h3>
          <p>Your trusted academic success partner for essays, assignments, quizzes, classes, and exams.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#about-us" className="hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <p>Email: <a href="mailto:scorelinewriters54@gmail.com" className="hover:text-white">scorelinewriters54@gmail.com</a></p>
          <p>Phone: <a href="tel:+1(909)909-7204" className="hover:text-white">+1 (909) 909-7204</a></p>
          <p>Whatsapp: <a href='https://wa.me/+1(909)909-7204'>+1 (909) 909-7204</a></p>
          {/* <p>Location: Nairobi, Kenya</p> */}
        </div>
        {/* Social Media */}
        {/* <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div> */}
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Scoreline Writers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
