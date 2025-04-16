
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from './ui/aspect-ratio';

interface ProjectCardProps {
  id: number;
  title: string;
  image?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  image,
  className = "" 
}) => {
  // Use Unsplash placeholder images
  const placeholderImage = image || `https://source.unsplash.com/collection/4320577/${id}`;
  
  return (
    <Link 
      to={`/project/${id}`} 
      className={`project-card block w-full h-full relative overflow-hidden group ${className}`}
    >
      <AspectRatio ratio={4/3} className="w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={placeholderImage} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <h3 className="text-base font-light">{title}</h3>
          </div>
        </div>
      </AspectRatio>
    </Link>
  );
};

export default ProjectCard;
