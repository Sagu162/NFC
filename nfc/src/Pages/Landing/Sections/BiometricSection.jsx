import React from 'react';
import { motion } from 'framer-motion';

const BiometricFeatureItem = ({ icon, title }) => {
  return (
    <motion.div 
      className="bg-white bg-opacity-90 p-4 rounded-lg flex items-center gap-3 mb-3"
      whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 1)' }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-primary">{icon}</div>
      <div className="font-medium">{title}</div>
    </motion.div>
  );
};

const BiometricSection = () => {
  const features = [
    { icon: "👆", title: "Fingerprint Recognition" },
    { icon: "💳", title: "NFC Card Verification" },
    { icon: "⚡", title: "Real-time Authentication" }
  ];

  return (
    <section className="py-16 px-4 sm:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative z-10 bg-accent bg-opacity-10 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-textPrimary mb-6">Advanced Biometric Security</h2>
              <h3 className="text-xl font-semibold text-primary mb-4">Dual Authentication System</h3>
              <p className="text-textSecondary mb-6">
                Enhance security with our advanced biometric verification system integrated with NFC technology. 
                Ensure foolproof identification and access control.
              </p>
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <BiometricFeatureItem 
                    key={index} 
                    icon={feature.icon} 
                    title={feature.title} 
                  />
                ))}
              </div>
              <motion.button 
                className="bg-primary text-white px-6 py-3 rounded-lg shadow-button hover:bg-secondary transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -right-16 -bottom-10 w-64 h-64 bg-primary bg-opacity-10 rounded-full"></div>
                <motion.div 
                  className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center z-10 relative"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <div className="text-6xl">👆</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiometricSection;
