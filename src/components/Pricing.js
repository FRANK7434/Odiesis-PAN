import React from "react";
import { FaDollarSign, FaClock, FaAward } from "react-icons/fa";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
          Pricing That Balances Quality
        </h2>

        {/* Pricing Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Affordable Pricing */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-yellow-400 text-4xl mb-4">
              <FaDollarSign />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Affordable Pricing</h3>
            <p className="text-gray-700 leading-relaxed">
              Starting at just <span className="font-bold">$10 per page</span>, 
              we provide high-quality writing that fits your budget without 
              compromising excellence.
            </p>
          </div>

          {/* Flexible Deadlines */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-yellow-400 text-4xl mb-4">
              <FaClock />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Deadlines</h3>
            <p className="text-gray-700 leading-relaxed">
              Whether you need your project in a few hours or a few weeks, 
              our flexible scheduling ensures we meet your timeline without 
              sacrificing quality.
            </p>
          </div>

          {/* Exceptional Value */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-yellow-400 text-4xl mb-4">
              <FaAward />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Exceptional Value</h3>
            <p className="text-gray-700 leading-relaxed">
              Our work stands out for its thorough research, strong arguments, 
              and proper formatting, ensuring you receive nothing less than the best.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            Let us know your project requirements, and we’ll craft a solution tailored to your needs.
          </p>
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md"
          >
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;