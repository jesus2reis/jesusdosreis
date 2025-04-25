
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useProject, useProjectImages } from '../hooks/useProjects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "1");
  
  const { data: project, isLoading: isLoadingProject } = useProject(projectId);
  const { data: images, isLoading: isLoadingImages } = useProjectImages(projectId);

  if (isLoadingProject || isLoadingImages) {
    return <div className="min-h-screen flex items-center justify-center bg-black text-white">
      Loading...
    </div>;
  }

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center bg-black text-white">
      Project not found
    </div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white animate-fade-in">
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
              <div className="border-t border-white/10 pt-4">
                <div className="text-xs text-muted-foreground mb-1">Client</div>
                <div className="text-sm">{project.client}</div>
              </div>
              
              <div className="border-t border-white/10 pt-4">
                <div className="text-xs text-muted-foreground mb-1">Role</div>
                <div className="text-sm">{project.role}</div>
              </div>
              
              <div className="border-t border-white/10 pt-4">
                <div className="text-xs text-muted-foreground mb-1">Year</div>
                <div className="text-sm">{project.year}</div>
              </div>
            </div>
            
            <div className="space-y-12 border-t border-white/10 pt-4 md:ml-8">
              <div className="mb-8">
                <h2 className="text-sm mb-4">Challenge</h2>
                <p className="text-base font-light">{project.challenge}</p>
              </div>
              
              <div>
                <h2 className="text-sm mb-4">Solution</h2>
                <p className="text-base font-light">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>
        
        {images?.map((image, index) => (
          <div key={index} className="border-t border-white/10 flex items-center justify-center relative overflow-hidden">
            <div className="w-full h-full">
              <img src={image.image_url} alt={`Project image ${index + 1}`} className="w-full h-auto object-cover" />
            </div>
          </div>
        ))}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
