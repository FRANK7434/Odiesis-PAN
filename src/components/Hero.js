import React from "react";
import hero from "../assets/landingpage.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 h-[70vh] lg:h-[60vh] flex items-center">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute inset-y-0 right-0 w-1/2">
          <img
            src={hero}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>
      </div>

      {/* Content */}
      <div className=" relative container mx-auto px-6 flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Left Section: Text */}
        <div className="bg-gray-100 lg:bg-gray-900 lg:bg-opacity-70 p-6 rounded-lg lg:w-1/2">
          <h1 className="text-gray-900 lg:text-white text-4xl lg:text-5xl font-bold mb-4">
            Welcome to <span className="text-yellow-400">Scoreline Writers</span>
          </h1>
          <p className="text-gray-700 lg:text-gray-200 text-lg mb-6">
            Your trusted partner in delivering exceptional services.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center lg:items-start">
  <a
    href="#services"
    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md w-full lg:w-auto text-center"
  >
    Learn More
  </a>
  <a
    href="#contact"
    className="bg-transparent border border-gray-700 lg:border-white text-gray-900 lg:text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-300 hover:text-gray-900 w-full lg:w-auto text-center"
  >
    Contact Us
  </a>
</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;