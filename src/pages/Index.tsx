import React from 'react';
import SplitLayout from '../components/layout/SplitLayout';
import ProjectCard from '../components/ProjectCard';
import ExperienceItem from '../components/ExperienceItem';
import SEO from '../components/SEO';
import { useProjects } from '@/hooks/useProjects';
import { useExperiences } from '@/hooks/useExperiences';
import { useEducation } from '@/hooks/useEducation';
import { useAboutContent } from '@/hooks/useAboutContent';
import { Link } from 'react-router-dom';

const Index = () => {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experiences, isLoading: experiencesLoading } = useExperiences();
  const { data: education, isLoading: educationLoading } = useEducation();
  const { data: aboutContent } = useAboutContent();

  return (
    <SplitLayout>
      <SEO 
        title="Jesús dos Reis - Portfolio" 
        description="Portfolio de Jesús dos Reis, diseñador visual y desarrollador frontend especializado en experiencias digitales innovadoras." 
        url="https://jesusdosreis.com" 
      />
      
      {/* Projects Section */}
      <section>
        <header className="section-header">
          Proyectos seleccionados
        </header>
        
        <div className="project-grid">
          {projectsLoading ? (
            <div className="p-12 text-muted-foreground">Cargando proyectos...</div>
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
      </section>
      
      {/* About Section */}
      <section className="border-b border-border">
        <header className="section-header">
          Sobre mí
        </header>
        <div className="p-8 lg:p-12">
          <p className="text-xl lg:text-2xl font-light leading-relaxed max-w-4xl mb-6">
            {aboutContent?.about_short || "Diseñador de marca con sede en Madrid, transformando startups en marcas reconocibles a través de diseño de identidad."}
          </p>
          <Link 
            to="/about" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Conoce más →
          </Link>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="border-b border-border">
        <header className="section-header">
          Experiencia
        </header>
        <div className="p-6 lg:p-8">
          {experiencesLoading ? (
            <div className="text-muted-foreground">Cargando experiencias...</div>
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
      </section>
      
      {/* Education Section */}
      <section className="border-b border-border">
        <header className="section-header">
          Educación
        </header>
        <div className="p-6 lg:p-8">
          {educationLoading ? (
            <div className="text-muted-foreground">Cargando educación...</div>
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
      </section>

      {/* Contact CTA */}
      <section className="p-8 lg:p-12">
        <h2 className="text-xl lg:text-2xl font-light mb-4">¿Tienes un proyecto en mente?</h2>
        <Link 
          to="/contact"
          className="inline-block py-3 px-6 bg-foreground text-background text-sm font-medium uppercase tracking-wide hover:bg-foreground/90 transition-colors"
        >
          Contacto
        </Link>
      </section>
    </SplitLayout>
  );
};

export default Index;
