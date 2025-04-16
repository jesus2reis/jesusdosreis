
import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <Link 
      to={`/project/${id}`} 
      className={`project-card block w-full h-full relative ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-white/10 text-2xl font-light">Image</div>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-lg font-light">{title}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
