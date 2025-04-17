
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from './ui/aspect-ratio';

interface ProjectCardProps {
  id: number;
  title: string;
  image?: string;
  vimeoId?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  image,
  vimeoId,
  className = "" 
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  // Use Unsplash placeholder images if no image or vimeoId
  const placeholderImage = image || `https://source.unsplash.com/collection/4320577/${id}`;
  
  useEffect(() => {
    const handleVideoLoaded = () => {
      setIsVideoLoaded(true);
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleVideoLoaded);
      return () => {
        iframe.removeEventListener('load', handleVideoLoaded);
      };
    }
  }, []);

  return (
    <Link 
      to={`/project/${id}`} 
      className={`project-card block w-full h-full relative overflow-hidden group ${className}`}
    >
      <AspectRatio ratio={4/3} className="w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          {vimeoId ? (
            <>
              <div className={`w-full h-full ${!isVideoLoaded ? 'animate-pulse bg-muted' : ''}`}>
                <iframe
                  ref={iframeRef}
                  src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="w-full h-full absolute top-0 left-0 object-cover"
                  style={{ 
                    opacity: isVideoLoaded ? 1 : 0,
                    width: '100%',
                    height: '100%',
                    position: 'absolute'
                  }}
                  title={title}
                ></iframe>
              </div>
              {!isVideoLoaded && (
                <img 
                  src={placeholderImage} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
              )}
            </>
          ) : (
            <img 
              src={placeholderImage} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
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
