import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MediaGallery from '../components/MediaGallery';
import SEO from '../components/SEO';
import { useProject } from '@/hooks/useProject';
import { useProjects } from '@/hooks/useProjects';
const ProjectDetail = () => {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const {
    data,
    isLoading
  } = useProject(slug || '');
  const {
    data: allProjects
  } = useProjects();
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">
        <div>Cargando...</div>
      </div>;
  }
  if (!data?.project) {
    return <div className="min-h-screen flex items-center justify-center">
        <div>Proyecto no encontrado</div>
      </div>;
  }
  const {
    project,
    images
  } = data;

  // Find current project index and calculate navigation
  const currentIndex = allProjects?.findIndex(p => p.slug === slug) || 0;
  const nextProject = allProjects && currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects?.[0]; // Loop back to first project

  return <div className="min-h-screen flex flex-col bg-background text-foreground animate-fade-in">
      <SEO title={project.title} description={project.challenge || project.excerpt || `Proyecto ${project.title} - ${project.area || ''} ${project.year || ''}`} type="article" url={`https://jesusdosreis.com/project/${project.slug}`} />
      
      <Navigation title="Jesús dos Reis" subtitle="" />
      
      <main className="flex-grow">
        {/* Video Section - Full width */}
        {project.vimeo_id && <div className="w-full">
            <div className="aspect-video w-full">
              <iframe src={`https://player.vimeo.com/video/${project.vimeo_id}?background=1&autoplay=1&loop=1&byline=0&title=0&quality=1080p&preload=auto`} className="w-full h-full" allow="autoplay; fullscreen; picture-in-picture" title={project.title} />
            </div>
          </div>}

        {/* Project Content - Constrained container */}
        <div className="px-6 py-16 max-w-7xl mx-auto w-full">
          {/* Project Title */}
          <h1 className="text-6xl font-light mb-16 leading-tight break-words">{project.title}</h1>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            
            {/* Left Column - Project Details (1/4 width) */}
            <div className="lg:col-span-1 space-y-8">
              {project.area && <div>
                  <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Área</div>
                  <div className="text-xl">{project.area}</div>
                </div>}
              
              {project.tipo && <div>
                  <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Tipo de Trabajo</div>
                  <div className="text-xl">{project.tipo}</div>
                </div>}
              
              {project.year && <div>
                  <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Año</div>
                  <div className="text-xl">{project.year}</div>
                </div>}
            </div>
            
            {/* Right Column - Challenge and Solution (3/4 width) */}
            <div className="lg:col-span-3 space-y-12">
              {project.challenge && <div>
                  <h2 className="text-xl mb-6 font-medium uppercase tracking-wide text-muted-foreground">Desafío</h2>
                  <p className="text-2xl font-light leading-relaxed">{project.challenge}</p>
                </div>}
              
              {project.solution && <div>
                  <h2 className="text-xl mb-6 font-medium uppercase tracking-wide text-muted-foreground">Solución</h2>
                  <p className="text-2xl font-light leading-relaxed">{project.solution}</p>
                </div>}
            </div>
          </div>
        </div>

        {/* Project Media Gallery */}
        <div className="w-full">
          <MediaGallery items={images || []} />
        </div>

        {/* Navigation Buttons */}
        <div className="mx-auto py-16 px-0">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-lg hover:underline transition-all duration-200">
              ← Volver
            </Link>
            
            {nextProject && <Link to={`/project/${nextProject.slug}`} className="text-lg hover:underline transition-all duration-200">
                Ver otro proyecto →
              </Link>}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default ProjectDetail;