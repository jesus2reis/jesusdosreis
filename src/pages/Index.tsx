
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import AboutSection from '../components/AboutSection';
import ExperienceItem from '../components/ExperienceItem';
import ContactSection from '../components/ContactSection';
import { useProjects } from '@/hooks/useProjects';
import { useExperiences } from '@/hooks/useExperiences';
import { useEducation } from '@/hooks/useEducation';

const Index = () => {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experiences, isLoading: experiencesLoading } = useExperiences();
  const { data: education, isLoading: educationLoading } = useEducation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-grow">
        <div className="border-b border-border">
          <h1 className="sr-only">Trabajos Seleccionados</h1>
          <div className="px-6 py-4 text-base">Trabajos Seleccionados</div>
          
          <div className="project-grid">
            {projectsLoading ? (
              <div className="px-6 py-4">Cargando proyectos...</div>
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
          <h2 className="mb-6 text-base">Experiencia</h2>
          <div className="grid md:grid-cols-1 gap-0">
            {experiencesLoading ? (
              <div>Cargando experiencias...</div>
            ) : experiences?.map((exp, index) => (
              <ExperienceItem 
                key={exp.id}
                title={exp.company}
                position={exp.role}
                period={exp.years}
                description={exp.description}
                showDivider={index < (experiences.length - 1)}
              />
            ))}
          </div>
        </div>
        
        <div className="py-12 px-6 border-b border-border">
          <h2 className="mb-6 text-base">Educación y Cursos de Desarrollo</h2>
          <div className="grid md:grid-cols-1 gap-0">
            {educationLoading ? (
              <div>Cargando educación...</div>
            ) : education?.map((edu, index) => (
              <ExperienceItem
                key={edu.id}
                title={edu.course}
                position={edu.school}
                period={edu.years}
                description={edu.description}
                showDivider={index < (education.length - 1)}
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
