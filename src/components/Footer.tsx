import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-gray-400 mb-6">
            We're passionate about bringing your creative visions to life. Our team of experts
            is ready to collaborate with you on your next project, offering professional services
            in script writing, graphic design, and video editing. Get in touch with us today to start
            your creative journey.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Leadership</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-gray-400">Founder</span>
              <span>Ramisetty RaghuRam</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-400">Co-founder</span>
              <span>Yashwanth Giri</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <p className="text-gray-400">raghu.ramisetty9@gmail.com</p>
            <p className="text-gray-400">+91 6309067564</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
