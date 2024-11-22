import React, { useState } from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
        {/* Left Section: Logo and Branding */}
        <div className="flex items-center space-x-3">
          <img
            src={logo} // Replace with your logo's path
            alt="Scoreline"
            className="h-8 w-20 sm:h-10 sm:w-24 object-contain"
          />
          <div>
            <span className="block text-gray-900 font-bold text-sm sm:text-lg">
              Scoreline Writers
            </span>
            <span className="block text-gray-700 text-xs sm:text-sm capitalize">
              Your Academic Success Partner For Essays, Assignments, Quizzes, Classes, And Exams
            </span>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block lg:hidden text-gray-900 focus:outline-none"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 sm:h-8 sm:w-8"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 absolute lg:static left-0 w-full lg:w-auto top-16 bg-white lg:bg-transparent lg:shadow-none shadow-lg z-50`}
        >
          <a
            href="#home"
            className="block py-2 px-3 text-gray-900 text-sm sm:text-base hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 lg:hover:bg-transparent lg:focus:ring-0 lg:hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about-us"
            className="block py-2 px-3 text-gray-900 text-sm sm:text-base hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 lg:hover:bg-transparent lg:focus:ring-0 lg:hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 text-gray-900 text-sm sm:text-base hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 lg:hover:bg-transparent lg:focus:ring-0 lg:hover:text-gray-700"
          >
            Services
          </a>
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 text-gray-900 text-sm sm:text-base hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 lg:hover:bg-transparent lg:focus:ring-0 lg:hover:text-gray-700"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 text-gray-900 text-sm sm:text-base hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 lg:hover:bg-transparent lg:focus:ring-0 lg:hover:text-gray-700"
          >
            Testimonials
          </a>
          <a
            href="#contact-us"
            onClick={() => setIsOpen(false)}
            className="block py-2 px-3 text-gray-900 text-sm sm:text-base hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 lg:hover:bg-transparent lg:focus:ring-0 lg:hover:text-gray-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;