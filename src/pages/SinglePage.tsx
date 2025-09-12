import React from 'react';
import HeroSection from '../sections/HeroSection';
import TimelineSection from '../sections/TimelineSection';
import SocialismEarlyStageSection from '../sections/SocialismEarlyStageSection';
import ConditionsForSocialismSection from '../sections/ConditionsForSocialismSection';
import SocialismCharacteristicsSection from '../sections/SocialismCharacteristicsSection';

const SinglePage: React.FC = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      <HeroSection />
      <TimelineSection />
      <SocialismEarlyStageSection />
      <ConditionsForSocialismSection />
      <SocialismCharacteristicsSection />
    </div>
  );
};

export default SinglePage;
