import React from 'react';
import HeroSection from '../sections/HeroSection';
import EconomicRoleSection from '../sections/EconomicRoleSection';
import CulturalRoleSection from '../sections/CulturalRoleSection';
import SecurityRoleSection from '../sections/SecurityRoleSection';
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
        <MetaphorSection />
      </div>
      <ChatBot />
    </>
  );
};

export default SinglePage;
