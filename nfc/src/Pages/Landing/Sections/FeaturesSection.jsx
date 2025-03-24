import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      className="bg-widget p-6 rounded-2xl shadow-card hover:shadow-widget transition duration-300 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="absolute inset-0 bg-primary opacity-0 z-0 transition duration-300"
        whileHover={{ opacity: 0.1 }}
      />
      <div className="relative z-10 text-3xl mb-3 transition-transform duration-300 hover:scale-110">{icon}</div>
      <h3 className="relative z-10 font-semibold text-heading mb-2 transition-colors duration-300 hover:text-accent">{title}</h3>
      <p className="relative z-10 text-sm text-secondary transition-colors duration-300 hover:text-primary-light">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    { icon: "🔐", title: "Biometric Security", description: "Advanced fingerprint verification integrated with NFC for maximum security." },
    { icon: "👨‍🎓", title: "Student Management", description: "Complete student lifecycle management with digital profiles and history." },
    { icon: "🔑", title: "Access Control", description: "NFC-based entry management with real-time tracking and alerts." },
    { icon: "📋", title: "Attendance System", description: "Automated attendance tracking with customizable settings." },
    { icon: "📚", title: "Library Management", description: "Digital book loans and returns with NFC cards." },
    { icon: "🏢", title: "Department Control", description: "Manage multiple departments and their access rights." },
    { icon: "👨‍🏫", title: "Faculty Management", description: "Complete faculty profile and attendance tracking." },
    { icon: "💳", title: "Card System", description: "Issue and manage NFC cards with custom permissions." },
    { icon: "📊", title: "Analytics Dashboard", description: "Real-time data with customizable metrics and KPIs." },
    { icon: "📈", title: "Advanced Reports", description: "Generate reports for attendance, access, and performance." },
    { icon: "📱", title: "Device Management", description: "Control and monitor NFC readers across campus." },
    { icon: "👆", title: "Biometric Enrollment", description: "Easy fingerprint registration and verification process." }
  ];

  return (
    <section className="py-16 px-4 sm:px-8 bg-dashboard">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-heading mb-4">Complete Feature Set</h2>
        <p className="text-secondary max-w-2xl mx-auto">Explore the comprehensive features of our NFC-based management system designed for modern institutions.</p>
      </motion.div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
