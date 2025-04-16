
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import AboutSection from '../components/AboutSection';
import ExperienceItem from '../components/ExperienceItem';
import ContactSection from '../components/ContactSection';

const projects = [
  { id: 1, title: "Project 1 name", image: "" },
  { id: 2, title: "Project 2 name", image: "" },
  { id: 3, title: "Project 3 name", image: "" },
  { id: 4, title: "Project 4 name", image: "" },
  { id: 5, title: "Project 5 name", image: "" },
  { id: 6, title: "Project 6 name", image: "" },
];

const experiences = [
  { 
    title: "DMA Partners", 
    position: "Graphic Designer", 
    period: "2022 - Current",
    description: "As a key member of the design team, I was responsible for developing high-impact visual content for leading B2B corporations with global reach—many of them billion-dollar companies. My work spanned digital, print, and physical environments, from branding to experiential design."
  },
  { 
    title: "Redforts Software", 
    position: "Design Intern", 
    period: "2021 - 2022",
    description: "Assisted senior designers with various projects and gained hands-on experience with design systems and digital product design."
  }
];

const education = [
  { 
    title: "Design Degree", 
    position: "Universidad Europea (Madrid, Spain)", 
    period: "2019 - 2023"
  },
  { 
    title: "New Strategies for Brands", 
    position: "CANELA®", 
    period: "2024"
  },
  { 
    title: "Design Strategy", 
    position: "Masterbrand", 
    period: "2023"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white animate-fade-in">
      <Navigation />
      
      <main className="flex-grow">
        <div className="border-b border-white/10">
          <h1 className="sr-only">Selected Works</h1>
          <div className="px-6 py-4 text-lg">Selected Works</div>
          
          <div className="project-grid">
            {projects.map(project => (
              <div key={project.id}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
        
        <AboutSection />
        
        <div className="py-12 px-6 border-b border-white/10">
          <h2 className="text-xl mb-6">Experience</h2>
          <div>
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
        
        <div className="py-12 px-6 border-b border-white/10">
          <h2 className="text-xl mb-6">Education & Development Courses</h2>
          <div>
            {education.map((edu, index) => (
              <ExperienceItem 
                key={index}
                title={edu.title}
                position={edu.position}
                period={edu.period}
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

export default Index;
