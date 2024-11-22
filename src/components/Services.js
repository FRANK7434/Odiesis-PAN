import React from "react";

const Services = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Services
        </h2>

        {/* Introduction */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            We offer a range of academic writing services to help students and professionals achieve their academic goals. 
            Whether you need help with assignments, dissertations, or research papers, we are here to support you.
          </p>
        </div>

        {/* Service Categories or Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Assistance</h3>
            <p className="text-gray-700 mb-4">
              We offer thorough research support, ensuring your papers are based on reliable sources and accurate data.
            </p>
            <a href="#contact" className="text-yellow-500 hover:text-yellow-600 font-semibold">Learn More</a>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Essay Writing</h3>
            <p className="text-gray-700 mb-4">
              Our team provides expertly written essays tailored to meet your academic standards.
            </p>
            <a href="#contact" className="text-yellow-500 hover:text-yellow-600 font-semibold">Learn More</a>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Dissertation Assistance</h3>
            <p className="text-gray-700 mb-4">
              Get professional guidance with your dissertation, from structuring to final edits, ensuring academic success.
            </p>
            <a href="#contact" className="text-yellow-500 hover:text-yellow-600 font-semibold">Learn More</a>
          </div>
        </div>

        {/* Why Choose Us */}
        {/* Why Choose Us */}
<div className="text-center mt-12 mb-8">
  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Us?</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Engaging Content */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h4 className="text-xl font-bold text-gray-900 mb-4">Engaging Content</h4>
      <p className="text-gray-700">
        We craft compelling essays and research papers that are thoroughly researched, insightful, and entirely original. Our content is designed to captivate and inform.
      </p>
    </div>

    {/* Strong Arguments */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h4 className="text-xl font-bold text-gray-900 mb-4">Strong Arguments</h4>
      <p className="text-gray-700">
        We develop well-structured arguments backed by robust evidence, ensuring clarity, persuasiveness, and a seamless flow of ideas. Your ideas will make the strongest impact.
      </p>
    </div>

    {/* Proper Formatting */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h4 className="text-xl font-bold text-gray-900 mb-4">Proper Formatting</h4>
      <p className="text-gray-700">
        We adhere to all formatting guidelines, including MLA, APA, Chicago, and others, ensuring a polished and professional presentation aligned with academic standards.
      </p>
    </div>
  </div>
</div>


        {/* CTA Section */}
        <div className="text-center">
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;