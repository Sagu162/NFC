import React from 'react';
import Header from '../../Layout/Layout';
import Hero from './Sections/Hero';
import FeaturesSection from './Sections/FeaturesSection';
import BenefitsSection from './Sections/BenefitsSection';
import AnalyticsSection from './Sections/AnalyticsSection';
import BiometricSection from './Sections/BiometricSection';
import StatsSection from './Sections/StatsSection';
import Layout from '../../Layout/Layout';

const Landing = () => {
  return (
    <div>
      <Layout>
      <div className="mt-16"> {/* Add margin-top for spacing */}
        <Hero />
      </div>
      <FeaturesSection />
      <BenefitsSection />
      <AnalyticsSection />
      <BiometricSection />
      <StatsSection />
      </Layout>
    </div>
  );
};

export default Landing;
