
import React from 'react';

interface AboutSectionProps {
  title?: string;
  content?: React.ReactNode;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "About me",
  content
}) => {
  return (
    <div className="py-12 px-6 border-b border-white/10 dark:border-white/10 border-black/10">
      <h2 className="mb-6 text-sm">{title}</h2>
      <div className="text-lg md:text-[18px] font-light w-full">
        {content || (
          <div className="space-y-6">
            <p className="text-[18px] font-light">
              I'm a brand designer based in Madrid, born in Venezuela, with Portuguese heritage. I currently work at a creative agency, and occasionally take on freelance projects that spark creative interest and strategic challenge.
            </p>
            <p className="text-[18px] font-light">
              My work centers on building meaningful brand identities by combining strategy, design systems, and visual storytelling. I'm especially passionate about concept-driven design that's clear, consistent, and emotionally engaging.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
