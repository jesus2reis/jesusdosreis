
import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useProject } from '@/hooks/useProject';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading } = useProject(slug || '');

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!data?.project) {
    return <div>Proyecto no encontrado</div>;
  }

  const { project, images } = data;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground animate-fade-in">
      <Navigation title="Jesús dos Reis" subtitle="" />
      
      <main className="flex-grow">
        {/* Video Section - First thing visible, full width */}
        {project.vimeo_id && (
          <div className="w-full">
            <iframe
              src={`https://player.vimeo.com/video/${project.vimeo_id}?background=1&autoplay=1&loop=1&byline=0&title=0`}
              className="w-full aspect-video"
              allow="autoplay; fullscreen; picture-in-picture"
              title={project.title}
            />
          </div>
        )}

        {/* Project Content */}
        <div className="p-6 max-w-7xl mx-auto">
          {/* Project Title */}
          <h1 className="text-6xl font-light mb-16 leading-tight">{project.title}</h1>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            
            {/* Left Column - Project Details (1/4 width) */}
            <div className="lg:col-span-1 space-y-8">
              {project.area && (
                <div>
                  <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Área</div>
                  <div className="text-xl">{project.area}</div>
                </div>
              )}
              
              {project.tipo && (
                <div>
                  <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Tipo de Trabajo</div>
                  <div className="text-xl">{project.tipo}</div>
                </div>
              )}
              
              {project.year && (
                <div>
                  <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Año</div>
                  <div className="text-xl">{project.year}</div>
                </div>
              )}
            </div>
            
            {/* Right Column - Challenge and Solution (3/4 width) */}
            <div className="lg:col-span-3 space-y-12">
              {project.challenge && (
                <div>
                  <h2 className="text-xl mb-6 font-medium uppercase tracking-wide text-muted-foreground">Desafío</h2>
                  <p className="text-2xl font-light leading-relaxed">{project.challenge}</p>
                </div>
              )}
              
              {project.solution && (
                <div>
                  <h2 className="text-xl mb-6 font-medium uppercase tracking-wide text-muted-foreground">Solución</h2>
                  <p className="text-2xl font-light leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Project Images - Full width */}
        {images?.map((image, index) => (
          <div key={index} className="w-full mt-16">
            <img 
              src={image.url} 
              alt={image.alt_text || `Imagen del proyecto ${index + 1}`} 
              className="w-full h-auto object-cover" 
            />
          </div>
        ))}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
