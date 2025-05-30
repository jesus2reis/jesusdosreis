
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from './ui/aspect-ratio';

interface ProjectCardProps {
  slug: string;
  title: string;
  image?: string;
  vimeoId?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  slug, 
  title, 
  image,
  vimeoId,
  className = "" 
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const placeholderImage = image || `https://source.unsplash.com/collection/4320577/${slug}`;
  
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
      to={`/project/${slug}`} 
      className={`project-card block w-full h-full relative overflow-hidden rounded-xl ${className}`}
    >
      <AspectRatio ratio={4/3} className="w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-xl">
          {vimeoId ? (
            <>
              <div className={`absolute inset-0 rounded-xl ${!isVideoLoaded ? 'animate-pulse bg-muted' : ''}`}>
                <iframe
                  ref={iframeRef}
                  src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-xl"
                  title={title}
                ></iframe>
              </div>
              {!isVideoLoaded && (
                <img 
                  src={placeholderImage} 
                  alt={title} 
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                />
              )}
            </>
          ) : (
            <img 
              src={placeholderImage} 
              alt={title} 
              className="w-full h-full object-cover rounded-xl"
            />
          )}
        </div>
        
        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end rounded-xl">
          <div className="p-4 w-full">
            <h3 className="text-base font-light text-white">{title}</h3>
          </div>
        </div>
      </AspectRatio>
    </Link>
  );
};

export default ProjectCard;
