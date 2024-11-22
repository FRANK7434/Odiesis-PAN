import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
          About Us
        </h2>

        {/* Introduction */}
        <div className="mb-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-bold text-gray-900">Scoreline Writers</span>, 
            we are dedicated to delivering exceptional academic support and research services. 
            With years of proven experience, we aim to empower students and professionals 
            through high-quality writing solutions tailored to their needs.
          </p>
        </div>

        {/* Key Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Years of Experience */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Years of Experience</h3>
            <p className="text-gray-700">
              We have extensive experience in academic writing, having assisted numerous students 
              with their assignments, research papers, and dissertations. My commitment to 
              excellence ensures that each project exceeds expectations.
            </p>
          </div>

          {/* Proven Success */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Success</h3>
            <p className="text-gray-700">
              Our dedication to quality and attention to detail have consistently yielded excellent 
              results for our clients, fostering long-term professional relationships.
            </p>
          </div>

          {/* Subject Matter Expertise */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Subject Matter Expertise</h3>
            <p className="text-gray-700">
              We possess a broad knowledge base across various academic disciplines, enabling us 
              to tackle diverse writing projects with confidence and precision.
            </p>
          </div>
        </div>

        {/* Additional Content: Achievements or Testimonials */}
        <div className="text-center mb-10">
          <p className="text-gray-700">
            We have successfully assisted <span className="font-bold text-gray-900">hundreds of students </span> 
            across <span className="font-bold text-gray-900">multiple academic disciplines</span>, 
            delivering impactful results every time.
          </p>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md"
          >
            Contact Us for Assistance
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;