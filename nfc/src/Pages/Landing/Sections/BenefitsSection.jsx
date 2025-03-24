import React from 'react';
import { motion } from 'framer-motion';

const BenefitCard = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      className="bg-widget p-8 rounded-2xl shadow-card transition duration-300 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      whileHover={{ y: -8 }}
    >
      <motion.div
        className="absolute inset-0 bg-secondary opacity-0 z-0 transition duration-300"
        whileHover={{ opacity: 0.1 }}
      />
      <div className="relative z-10 flex justify-center mb-6">
        <div className="w-16 h-16 bg-primary rounded-round flex items-center justify-center text-3xl text-white transition-transform duration-300 hover:scale-110">
          {icon}
        </div>
      </div>
      <h3 className="relative z-10 text-xl font-semibold text-heading text-center mb-3 transition-colors duration-300 hover:text-accent">
        {title}
      </h3>
      <p className="relative z-10 text-secondary text-center transition-colors duration-300 hover:text-primary-light">
        {description}
      </p>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    { icon: "🔒", title: "Enhanced Security", description: "Dual authentication with biometric verification and NFC cards." },
    { icon: "⚡", title: "Real-time Monitoring", description: "Instant access logs, attendance tracking, and alerts." },
    { icon: "📊", title: "Comprehensive Analytics", description: "Detailed insights with customizable reports and dashboards." },
    { icon: "🎓", title: "Student Success", description: "Track and improve student attendance and engagement." }
  ];

  return (
    <section className="py-16 px-4 sm:px-8 bg-dashboard">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-heading mb-4">Why Choose Us</h2>
        <p className="text-secondary max-w-2xl mx-auto">Discover the key benefits that make our NFC-based management system the ideal choice for modern institutions.</p>
      </motion.div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard 
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
