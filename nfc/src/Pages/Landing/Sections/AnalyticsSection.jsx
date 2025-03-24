import React from 'react';
import { motion } from 'framer-motion';

const AnalyticsCard = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-card flex gap-4 items-start"
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5, boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}
    >
      <div className="text-2xl mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-textPrimary mb-1">{title}</h3>
        <p className="text-sm text-textSecondary">{description}</p>
      </div>
    </motion.div>
  );
};

const AnalyticsSection = () => {
  const analyticsFeatures = [
    {
      icon: "📊",
      title: "Attendance Analytics",
      description: "Get detailed insights on student and faculty attendance"
    },
    {
      icon: "📝",
      title: "Access Reports",
      description: "Monitor and analyze building access patterns"
    },
    {
      icon: "📈",
      title: "Performance Metrics",
      description: "Measure and track key performance indicators"
    },
    {
      icon: "📋",
      title: "Custom Reports",
      description: "Generate tailored reports for different departments"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-8">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-textPrimary">Analytics & Reporting</h2>
      </motion.div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsFeatures.map((feature, index) => (
          <AnalyticsCard 
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

export default AnalyticsSection;