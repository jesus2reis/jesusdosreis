
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import ExperienceItem from '../components/ExperienceItem';
import ContactSection from '../components/ContactSection';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const experiences = [
  { 
    title: "DMA Partners", 
    position: "Graphic Designer", 
    period: "2022 - Current",
    description: loremIpsum
  },
  { 
    title: "Redforts Software", 
    position: "Design Intern", 
    period: "2021 - 2022",
    description: loremIpsum
  }
];

const education = [
  { 
    title: "Design Degree", 
    position: "Universidad Europea (Madrid, Spain)", 
    period: "2019 - 2023",
    description: loremIpsum
  },
  { 
    title: "New Strategies for Brands", 
    position: "CANELA®", 
    period: "2024",
    description: loremIpsum
  },
  { 
    title: "Design Strategy", 
    position: "Masterbrand", 
    period: "2023",
    description: loremIpsum
  }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-grow">
        <div className="py-16 px-6 border-b border-border">
          <h1 className="text-3xl font-light mb-8">About Me</h1>
          <div className="max-w-3xl">
            <p className="text-lg md:text-[18px] font-light mb-6">
              I'm a brand designer based in Madrid, born in Venezuela, with Portuguese heritage. I currently work at a creative agency, and occasionally take on freelance projects that spark creative interest and strategic challenge.
            </p>
            <p className="text-lg md:text-[18px] font-light mb-6">
              My work centers on building meaningful brand identities by combining strategy, design systems, and visual storytelling. I'm especially passionate about concept-driven design that's clear, consistent, and emotionally engaging.
            </p>
            <p className="text-lg md:text-[18px] font-light">
              [Content to be added later]
            </p>
          </div>
        </div>
        
        <div className="py-12 px-6 border-b border-border">
          <h2 className="text-xs mb-6">Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <ExperienceItem 
                key={index}
                title={exp.title}
                position={exp.position}
                period={exp.period}
                description={exp.description}
              />
            ))}
          </div>
        </div>
        
        <div className="py-12 px-6 border-b border-border">
          <h2 className="text-xs mb-6">Education & Development Courses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <ExperienceItem 
                key={index}
                title={edu.title}
                position={edu.position}
                period={edu.period}
                description={edu.description}
              />
            ))}
          </div>
        </div>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
