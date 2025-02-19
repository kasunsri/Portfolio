import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillBehanceCircle, AiFillMail, AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="px-6 py-12 max-w-[1200px] mx-auto bg-gray-900 rounded-3xl shadow-lg glass grid md:grid-cols-2 gap-8 place-items-center" id="contact">
        
      {/* Left Side - Social Media Icons */}
      <div className="space-y-6 pr-6">
        <h2 className="text-2xl font-bold text-teal-400">Let's Connect</h2>
        <ul className="space-y-4">
          {/* LinkedIn */}
          <li className="flex items-center transition-transform duration-300 hover:scale-105">
          <a href="https://www.linkedin.com/in/kasun-sri-buddika-134192222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin href='' className="w-[70px] h-auto text-[#0A66C2] mr-5" />
            </a>
            <div>
              <h3 className="text-lg font-bold text-white">LinkedIn</h3>
              <p className="text-gray-400">Connect with me professionally</p>
            </div>
          </li>
          {/* GitHub */}
          <li className="flex items-center transition-transform duration-300 hover:scale-105">
          <a href="https://github.com/kasunsri" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="w-[70px] h-auto text-[#171515] mr-5" />
            </a>
            <div>
              <h3 className="text-lg font-bold text-white">GitHub</h3>
              <p className="text-gray-400">Explore my open-source projects</p>
            </div>
          </li>
          {/* Behance */}
          <li className="flex items-center transition-transform duration-300 hover:scale-105">
          <a href="https://www.behance.net/kasunsri" target="_blank" rel="noopener noreferrer">
            <AiFillBehanceCircle className="w-[70px] h-auto text-[#1769FF] mr-5" />
            </a>
            <div>
              <h3 className="text-lg font-bold text-white">Behance</h3>
              <p className="text-gray-400">View my creative designs</p>
            </div>
          </li>
          {/* Gmail */}
          <li className="flex items-center transition-transform duration-300 hover:scale-105">
            <a href="mailto:buddikakb4@gmail.com" target="_blank" rel="noopener noreferrer">
              <AiOutlineMail className="w-[70px] h-auto text-[#ef25259f] mr-5" />
            </a>
  <div>
    <h3 className="text-lg font-bold text-white">Gmail</h3>
    <p className="text-gray-400">Contact me on</p>
  </div>
</li>
        </ul>
      </div>

      {/* Right Side - Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        <h2 className="text-2xl font-bold text-teal-400 mb-4">Get in Touch</h2>
        <div>
          <label htmlFor="name" className="block text-gray-400 font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-400 font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-400 font-medium mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here..."
            rows="4"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 flex justify-center items-center"
        >
          Submit →
        </button>
      </form>
    </div>
  );
};

export default Contact;