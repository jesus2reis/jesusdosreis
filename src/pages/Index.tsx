import React from 'react';
import SplitLayout from '../components/layout/SplitLayout';
import ProjectFeedItem from '../components/ProjectFeedItem';
import SEO from '../components/SEO';
import { useProjects } from '@/hooks/useProjects';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const { data: projects, isLoading: projectsLoading } = useProjects();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        
        <div>
          {projectsLoading ? (
            <div className="p-12 text-muted-foreground">Cargando proyectos...</div>
          ) : projects?.map((project, index) => (
            <ProjectFeedItem
              key={project.id}
              slug={project.slug}
              title={project.title}
              excerpt={project.excerpt}
              briefDescription={project.brief_description}
              tags={project.tags}
              vimeoId={project.vimeo_id}
              isReversed={index % 2 !== 0}
              showCaseStudy={project.show_case_study !== false}
            />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center gap-4">
          <h2 className="text-xl lg:text-2xl font-light">¿Tienes un proyecto en mente?</h2>
          <Link 
            to="/contact"
            className="inline-block py-3 px-6 bg-foreground text-background text-sm font-medium uppercase tracking-wide hover:bg-foreground/90 transition-colors"
          >
            Contacto
          </Link>
        </div>
        
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowUp size={16} />
          Back to top
        </button>
      </section>
    </SplitLayout>
  );
};

export default Index;
