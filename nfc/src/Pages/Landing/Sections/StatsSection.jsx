import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime = null;
    const startCount = 0;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(startCount + percentage * (end - startCount)));
      
      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <span>{count}{suffix}</span>;
};

const StatItem = ({ number, suffix, label }) => {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="text-3xl font-bold text-primary mb-1">
        <CountUp end={number} suffix={suffix} />
      </div>
      <div className="text-textSecondary">{label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-12 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <StatItem number={99.9} suffix="%" label="System Uptime" />
          <StatItem number={50} suffix="+" label="Institutions" />
          <StatItem number={24} suffix="/7" label="Technical Support" />
          <StatItem number={100} suffix="%" label="Data Security" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
