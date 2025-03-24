import React from 'react';
import Header from '../../Layout/Header';
import Hero from './Sections/Hero';
import FeaturesSection from './Sections/FeaturesSection';
import BenefitsSection from './Sections/BenefitsSection';
import AnalyticsSection from './Sections/AnalyticsSection';
import BiometricSection from './Sections/BiometricSection';
import StatsSection from './Sections/StatsSection';

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="mt-16"> {/* Add margin-top for spacing */}
        <Hero />
      </div>
      <FeaturesSection />
      <BenefitsSection />
      <AnalyticsSection />
      <BiometricSection />
      <StatsSection />
    </div>
  );
};

export default Landing;
