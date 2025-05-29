
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import AboutSection from '../components/AboutSection';
import ExperienceItem from '../components/ExperienceItem';
import ContactSection from '../components/ContactSection';
import { useProjects } from '@/hooks/useProjects';

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

const Index = () => {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-grow">
        <div className="border-b border-border">
          <h1 className="sr-only">Selected Works</h1>
          <div className="px-6 py-4 text-base">Selected Works</div>
          
          <div className="project-grid">
            {isLoading ? (
              <div className="px-6 py-4">Loading projects...</div>
            ) : projects?.map(project => (
              <div key={project.id}>
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  vimeoId={project.vimeo_id}
                />
              </div>
            ))}
          </div>
        </div>
        
        <AboutSection />
        
        <div className="py-12 px-6 border-b border-border">
          <h2 className="mb-6 text-base">Experience</h2>
          <div className="grid md:grid-cols-1 gap-0">
            {experiences.map((exp, index) => (
              <ExperienceItem 
                key={index}
                title={exp.title}
                position={exp.position}
                period={exp.period}
                description={exp.description}
                showDivider={index < experiences.length - 1}
              />
            ))}
          </div>
        </div>
        
        <div className="py-12 px-6 border-b border-border">
          <h2 className="mb-6 text-base">Education & Development Courses</h2>
          <div className="grid md:grid-cols-1 gap-0">
            {education.map((edu, index) => (
              <ExperienceItem
                key={index}
                title={edu.title}
                position={edu.position}
                period={edu.period}
                description={edu.description}
                showDivider={index < education.length - 1}
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
