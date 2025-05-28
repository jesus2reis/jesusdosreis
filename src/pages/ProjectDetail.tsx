
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useProject } from '@/hooks/useProject';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useProject(id || '');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data?.project) {
    return <div>Project not found</div>;
  }

  const { project, images } = data;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground animate-fade-in">
      <Navigation title={project.title} subtitle="" />
      
      <main className="flex-grow">
        <div className="p-6">
          <Link to="/" className="inline-flex items-center gap-2 hover:underline mb-8">
            <ArrowLeft size={16} />
            <span>Back</span>
          </Link>
          
          <h1 className="font-light mb-12 text-4xl">{project.title}</h1>
          
          <div className="details-grid mb-12">
            <div className="space-y-6">
              {project.client && (
                <div className="border-t border-border pt-4">
                  <div className="text-xs text-muted-foreground mb-1">Client</div>
                  <div className="text-sm">{project.client}</div>
                </div>
              )}
              
              {project.role && (
                <div className="border-t border-border pt-4">
                  <div className="text-xs text-muted-foreground mb-1">Role</div>
                  <div className="text-sm">{project.role}</div>
                </div>
              )}
              
              {project.year && (
                <div className="border-t border-border pt-4">
                  <div className="text-xs text-muted-foreground mb-1">Year</div>
                  <div className="text-sm">{project.year}</div>
                </div>
              )}
            </div>
            
            <div className="space-y-12 border-t border-border pt-4 md:ml-8">
              {project.challenge && (
                <div className="mb-8">
                  <h2 className="text-sm mb-4">Challenge</h2>
                  <p className="text-base font-light">{project.challenge}</p>
                </div>
              )}
              
              {project.solution && (
                <div>
                  <h2 className="text-sm mb-4">Solution</h2>
                  <p className="text-base font-light">{project.solution}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {project.vimeo_id && (
          <div className="border-t border-border flex items-center justify-center relative overflow-hidden">
            <div className="w-full h-full">
              <iframe
                src={`https://player.vimeo.com/video/${project.vimeo_id}?background=1&autoplay=1&loop=1&byline=0&title=0`}
                className="w-full aspect-video"
                allow="autoplay; fullscreen; picture-in-picture"
                title={project.title}
              />
            </div>
          </div>
        )}

        {images?.map((image, index) => (
          <div key={index} className="border-t border-border flex items-center justify-center relative overflow-hidden">
            <div className="w-full h-full">
              <img src={image.url} alt={`Project image ${index + 1}`} className="w-full h-auto object-cover" />
            </div>
          </div>
        ))}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
