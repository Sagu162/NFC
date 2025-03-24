import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'security', label: 'Security' },
  ];

  // Determine if we're on the login or signup page
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-xl font-bold text-primary flex items-center"
          whileHover={{ scale: 1.1, color: '#FF6347' }}
          transition={{ duration: 0.3 }}
        >
          <span className="mr-2">🔐</span>
          NFC Access
        </motion.div>

        {/* Navigation */}
        {!isAuthPage && (
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <motion.a
                    href={`#${link.id}`}
                    className={`font-medium transition-colors duration-300 ${
                      scrolled
                        ? 'text-textPrimary hover:text-primary'
                        : 'text-textPrimary hover:text-primary'
                    }`}
                    whileHover={{ scale: 1.1, color: '#FF6347' }}
                    transition={{ duration: 0.3 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Authentication Buttons */}
        {!isAuthPage ? (
          <div className="hidden md:flex gap-4 items-center">
            <Link to="/login">
              <motion.button
                className={`font-medium transition-colors duration-300 ${
                  scrolled ? 'text-textPrimary hover:text-primary' : 'text-textPrimary hover:text-primary'
                }`}
                whileHover={{ scale: 1.1, color: '#FF6347' }}
                whileTap={{ scale: 0.9, color: '#FFA07A' }}
              >
                Login
              </motion.button>
            </Link>
            <Link to="/signup">
              <motion.button
                className="bg-primary text-white px-4 py-2 rounded-lg shadow-button hover:bg-secondary transition-colors duration-300"
                whileHover={{ scale: 1.1, color: '#FF6347' }}
                whileTap={{ scale: 0.9, color: '#FFA07A' }}
              >
                Sign Up
              </motion.button>
            </Link>
          </div>
        ) : (
          // Back Button
          <motion.button
            onClick={() => navigate('/')}
            className="bg-secondary text-white px-4 py-2 rounded-lg shadow-button hover:bg-primary transition-colors duration-300"
            whileHover={{ scale: 1.1, color: '#FF6347' }}
            whileTap={{ scale: 0.9, color: '#FFA07A' }}
          >
            Back
          </motion.button>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
