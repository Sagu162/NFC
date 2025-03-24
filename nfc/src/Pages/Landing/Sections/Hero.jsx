import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className="bg-landing py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-heading font-bold mb-2 text-heading">
  Streamline Your <br />
  <span className="text-accent">
  <Typewriter
    words={[
      'Library management',
      'Faculty management',
      'Department control',
      'Biometric security',
      'Student management'
    ]}
    loop
    typeSpeed={(word) => word.length * 50}     // 50ms per character
    deleteSpeed={(word) => word.length * 30}   // 30ms per character
    delaySpeed={1500}  // Pause before next word
  />
</span>
</h1>
          <p className="text-secondary mb-8 max-w-lg">
            Transform your institution with our comprehensive NFC-based management system. From access control to library management, we've got everything covered in one powerful platform.
          </p>
          <div className="flex gap-4">
            <motion.button 
              className="bg-primary text-white px-6 py-3 rounded-2xl shadow-button hover:bg-primary-dark transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button 
              className="border border-primary text-primary px-6 py-3 rounded-2xl hover:bg-primary hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="md:w-1/2 grid grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { 
              title: "Biometric Security", 
              icon: "🔐", 
              desc: "Advanced fingerprint verification integrated with NFC for maximum security" 
            },
            { 
              title: "Student Management", 
              icon: "👨‍🎓", 
              desc: "Complete student data management including profiles and history" 
            },
            { 
              title: "Access Control", 
              icon: "🔑", 
              desc: "NFC-based entry management with real-time tracking and alerts" 
            },
            { 
              title: "Attendance System", 
              icon: "📋", 
              desc: "Automated attendance tracking with customizable settings" 
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-widget p-6 rounded-2xl shadow-card hover:shadow-widget transition duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-heading mb-1">{feature.title}</h3>
              <p className="text-sm text-secondary">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
