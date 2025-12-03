import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SplitLayout from '../components/layout/SplitLayout';
import MediaGallery from '../components/MediaGallery';
import SEO from '../components/SEO';
import { useProject } from '@/hooks/useProject';
import { useProjects } from '@/hooks/useProjects';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading } = useProject(slug || '');
  const { data: allProjects } = useProjects();

  if (isLoading) {
    return (
      <SplitLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-muted-foreground">Cargando...</div>
        </div>
      </SplitLayout>
    );
  }

  if (!data?.project) {
    return (
      <SplitLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-muted-foreground">Proyecto no encontrado</div>
        </div>
      </SplitLayout>
    );
  }

  const { project, images } = data;

  // Find current project index and calculate navigation
  const currentIndex = allProjects?.findIndex(p => p.slug === slug) || 0;
  const nextProject = allProjects && currentIndex < allProjects.length - 1 
    ? allProjects[currentIndex + 1] 
    : allProjects?.[0];

  return (
    <SplitLayout>
      <SEO 
        title={project.title} 
        description={project.challenge || project.excerpt || `Proyecto ${project.title} - ${project.area || ''} ${project.year || ''}`} 
        type="article" 
        url={`https://jesusdosreis.com/project/${project.slug}`} 
      />
      
      {/* Page Header */}
      <header className="flex items-center gap-4 p-4 border-b border-border">
        <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={18} />
        </Link>
        <span className="text-sm font-medium uppercase tracking-wide">Proyecto</span>
      </header>
      
      {/* Video Section */}
      {project.vimeo_id && (
        <section className="border-b border-border">
          <div className="aspect-video w-full">
            <iframe 
              src={`https://player.vimeo.com/video/${project.vimeo_id}?background=1&autoplay=1&loop=1&byline=0&title=0&quality=1080p&preload=auto`}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              title={project.title}
            />
          </div>
        </section>
      )}

      {/* Project Content */}
      <section className="border-b border-border">
        <div className="p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light mb-12 leading-tight">{project.title}</h1>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Column - Project Details */}
            <div className="lg:col-span-1 space-y-6">
              {project.area && (
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Área</div>
                  <div className="text-base">{project.area}</div>
                </div>
              )}
              
              {project.tipo && (
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Tipo</div>
                  <div className="text-base">{project.tipo}</div>
                </div>
              )}
              
              {project.year && (
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Año</div>
                  <div className="text-base">{project.year}</div>
                </div>
              )}
            </div>
            
            {/* Right Column - Challenge and Solution */}
            <div className="lg:col-span-3 space-y-10">
              {project.challenge && (
                <div>
                  <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">Desafío</h2>
                  <p className="text-lg lg:text-xl font-light leading-relaxed">{project.challenge}</p>
                </div>
              )}
              
              {project.solution && (
                <div>
                  <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">Solución</h2>
                  <p className="text-lg lg:text-xl font-light leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Media Gallery */}
      <section>
        <MediaGallery items={images || []} />
      </section>

      {/* Navigation */}
      <section className="grid grid-cols-2 border-t border-border">
        <Link 
          to="/" 
          className="p-6 lg:p-8 border-r border-border text-sm hover:bg-secondary transition-colors"
        >
          ← Volver
        </Link>
        
        {nextProject && (
          <Link 
            to={`/project/${nextProject.slug}`} 
            className="p-6 lg:p-8 text-sm text-right hover:bg-secondary transition-colors"
          >
            Siguiente proyecto →
          </Link>
        )}
      </section>
    </SplitLayout>
  );
};

export default ProjectDetail;
