import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import AboutSection from '../components/AboutSection';
import ExperienceItem from '../components/ExperienceItem';
import ContactSection from '../components/ContactSection';
const projects = [{
  id: 1,
  title: "Project 1 name",
  vimeoId: "1076079333"
}, {
  id: 2,
  title: "Project 2 name",
  vimeoId: "970924186"
}, {
  id: 3,
  title: "Project 3 name",
  vimeoId: "970863996"
}, {
  id: 4,
  title: "Project 4 name",
  vimeoId: "961719754"
}, {
  id: 5,
  title: "Project 5 name",
  image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=600"
}, {
  id: 6,
  title: "Project 6 name",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=600"
}];
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const experiences = [{
  title: "DMA Partners",
  position: "Graphic Designer",
  period: "2022 - Current",
  description: loremIpsum
}, {
  title: "Redforts Software",
  position: "Design Intern",
  period: "2021 - 2022",
  description: loremIpsum
}];
const education = [{
  title: "Design Degree",
  position: "Universidad Europea (Madrid, Spain)",
  period: "2019 - 2023",
  description: loremIpsum
}, {
  title: "New Strategies for Brands",
  position: "CANELA®",
  period: "2024",
  description: loremIpsum
}, {
  title: "Design Strategy",
  position: "Masterbrand",
  period: "2023",
  description: loremIpsum
}];
const Index = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate preloading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-light animate-pulse">DESIGNER NAME</h1>
          <p className="text-sm text-center animate-pulse">Brand Designer</p>
        </div>
      </div>;
  }
  return <div className="min-h-screen flex flex-col bg-black text-white animate-fade-in">
      <Navigation />
      
      <main className="flex-grow">
        <div className="border-b border-white/10">
          <h1 className="sr-only">Selected Works</h1>
          <div className="px-6 py-4 text-sm">Selected Works</div>
          
          <div className="project-grid">
            {projects.map(project => <div key={project.id}>
                <ProjectCard {...project} />
              </div>)}
          </div>
        </div>
        
        <AboutSection />
        
        <div className="px-6 border-b border-white/10 py-[25px]">
          <h2 className="mb-6 text-sm">Experience</h2>
          <div>
            {experiences.map((exp, index) => <ExperienceItem key={index} title={exp.title} position={exp.position} period={exp.period} description={exp.description} />)}
          </div>
        </div>
        
        <div className="px-6 border-b border-white/10 py-[25px]">
          <h2 className="mb-6 text-sm">Education & Development Courses</h2>
          <div>
            {education.map((edu, index) => <ExperienceItem key={index} title={edu.title} position={edu.position} period={edu.period} description={edu.description} />)}
          </div>
        </div>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>;
};
export default Index;