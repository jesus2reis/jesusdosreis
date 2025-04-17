
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground animate-fade-in">
      <Navigation />
      
      <main className="flex-grow">
        <AboutSection 
          title="About Me"
          content={
            <div className="space-y-6">
              <p className="text-[18px] font-light">
                I'm a brand designer based in Madrid, born in Venezuela, with Portuguese heritage. I currently work at a creative agency, and occasionally take on freelance projects that spark creative interest and strategic challenge.
              </p>
              <p className="text-[18px] font-light">
                My work centers on building meaningful brand identities by combining strategy, design systems, and visual storytelling. I'm especially passionate about concept-driven design that's clear, consistent, and emotionally engaging.
              </p>
              <p className="text-[18px] font-light">
                Content to be added later...
              </p>
            </div>
          }
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
