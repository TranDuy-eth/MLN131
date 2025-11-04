import React from 'react';
import HeroSection from '../sections/HeroSection';
import EconomicRoleSection from '../sections/EconomicRoleSection';
import CulturalRoleSection from '../sections/CulturalRoleSection';
import SecurityRoleSection from '../sections/SecurityRoleSection';
import InteractiveMapSection from '../sections/InteractiveMapSection';
import PolicySection from '../sections/PolicySection';
import ComparisonSection from '../sections/ComparisonSection';
import MetaphorSection from '../sections/MetaphorSection';
import ChatBot from '../components/ChatBot';

const SinglePage: React.FC = () => {
  return (
    <>
      <div className="h-screen w-full overflow-y-scroll">
        <HeroSection />
        <EconomicRoleSection />
        <CulturalRoleSection />
        <SecurityRoleSection />
        <InteractiveMapSection />
        <PolicySection />
        <ComparisonSection />
        <MetaphorSection />
      </div>
      <ChatBot />
    </>
  );
};

export default SinglePage;
