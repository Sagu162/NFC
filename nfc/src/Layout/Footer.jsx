import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dashboard text-secondary py-8">
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Company Info */}
        <div className="flex flex-col items-start animate-slideUp">
          <h2 className="text-2xl font-bold text-heading mb-4">NFC Access</h2>
          <p className="text-muted mb-4">
            Simplifying secure access with NFC technology. Seamless, fast, and secure solutions for modern businesses.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-primary hover:text-primary-light transition-colors duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-primary hover:text-primary-light transition-colors duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-primary hover:text-primary-light transition-colors duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-primary hover:text-primary-light transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col animate-fadeIn">
          <h3 className="text-lg font-semibold text-heading mb-4">Quick Links</h3>
          <ul className="space-y-2 text-secondary">
            {['Home', 'Features', 'Pricing', 'Contact'].map((item, index) => (
              <motion.li 
                key={index} 
                whileHover={{ scale: 1.05, color: '#4F46E5' }}
                transition={{ duration: 0.3 }}
              >
                <a href={`/${item.toLowerCase()}`} className="hover:text-primary transition-colors duration-300">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col animate-slideUp">
          <h3 className="text-lg font-semibold text-heading mb-4">Contact Us</h3>
          <p>Email: <a href="mailto:support@nfcaccess.com" className="text-primary hover:underline">support@nfcaccess.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-primary hover:underline">+1 234 567 890</a></p>
          <p>Address: 123 NFC St, Access City, USA</p>
        </div>
      </motion.div>

      <motion.div 
        className="mt-8 border-t border-dark pt-4 text-center text-muted animate-fadeIn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p>© {new Date().getFullYear()} NFC Access. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
