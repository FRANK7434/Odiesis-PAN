
import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaDiscord, FaClipboard, FaCheck } from 'react-icons/fa';

const ContactUs = () => {
  // State to track if text has been copied
  const [copied, setCopied] = useState(false);
  const [copyId,setCopyId]=useState()

  // Function to copy text to clipboard and reset the icon state
  const copyToClipboard = (text,id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setCopyId(id)
      setTimeout(() => setCopied(false), 2000); // Reset the icon back after 2 seconds
    });
  };

  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
          Get in Touch
        </h2>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Phone Contact */}
          <div className="flex flex-col items-center">
            <a
              href="tel:+19099097204" // Replace with your phone number
              className="text-3xl text-gray-700 hover:text-green-500 transition"
              aria-label="Call us"
            >
              <FaPhone />
            </a>
            <p className="mt-2 text-gray-600">Call Us</p>
            <div className="flex items-center space-x-2">
              <a
                href="tel:+1 (909) 909-7204" // Replace with your phone number
                className="text-gray-700 hover:text-green-500 transition"
              >
                +1 (909) 909-7204
              </a>
              <button
                onClick={() => copyToClipboard('+1 (909) 909-7204',"dial")} // Replace with your phone number
                className="text-gray-700 hover:text-green-500"
                aria-label="Copy phone number"
              >
                {(copied && copyId==="dial") ? <FaCheck /> : <FaClipboard />}
              </button>
            </div>
          </div>

          {/* WhatsApp Contact */}
          <div className="flex flex-col items-center">
            <a
              href="https://wa.me/+19099097204" // Replace with your WhatsApp number
              className="text-3xl text-gray-700 hover:text-green-500 transition"
              aria-label="Chat with us on WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <p className="mt-2 text-gray-600">WhatsApp</p>
            <div className="flex items-center space-x-2">
              <a
                href="https://wa.me/+19099097204" // Replace with your WhatsApp number
                className="text-gray-700 hover:text-green-500 transition"
              >
                +1 (909) 909-7204
              </a>
              <button
                onClick={() => copyToClipboard('+1(909)909-7204',"whatsapp")} // Replace with your WhatsApp number
                className="text-gray-700 hover:text-green-500"
                aria-label="Copy WhatsApp number"
              >
                {(copied && copyId==="whatsapp")? <FaCheck /> : <FaClipboard />}
              </button>
            </div>
          </div>

          {/* Email Contact */}
          <div className="flex flex-col items-center">
            <a
              href="mailto:scorelinewriters54@gmail.com" // Replace with your email address
              className="text-3xl text-gray-700 hover:text-blue-500 transition"
              aria-label="Send us an email"
            >
              <FaEnvelope />
            </a>
            <p className="mt-2 text-gray-600">Email Us</p>
            <div className="flex items-center space-x-2">
              <a
                href="mailto:scorelinewriters54@gmail.com" // Replace with your email address
                className="text-gray-700 hover:text-blue-500 transition"
              >
                scorelinewriters54@gmail.com
              </a>
              <button
                onClick={() => copyToClipboard('scorelinewriters54@gmail.com',"email")} // Replace with your email address
                className="text-gray-700 hover:text-blue-500"
                aria-label="Copy email address"
              >
                {(copied && copyId==="email") ? <FaCheck /> : <FaClipboard />}
              </button>
            </div>
          </div>

          {/* Discord Contact */}
          <div className="flex flex-col items-center">
            <a
              href="https://discord.gg/yMVerSGf" // Replace with your Discord invite link
              className="text-3xl text-gray-700 hover:text-blue-500 transition"
              aria-label="Join us on Discord"
            >
              <FaDiscord />
            </a>
            <p className="mt-2 text-gray-600">Discord</p>
            <div className="flex items-center space-x-2">
              <a
                href="https://discord.gg/yMVerSGf" // Replace with your Discord invite link
                className="text-gray-700 hover:text-blue-500 transition"
              >
                Join our Discord
              </a>
              <button
                onClick={() => copyToClipboard('https://discord.gg/yMVerSGf',"discord")} // Replace with your Discord invite link
                className="text-gray-700 hover:text-blue-500"
                aria-label="Copy Discord link"
              >
                {(copied && copyId==="discord") ? <FaCheck /> : <FaClipboard />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;