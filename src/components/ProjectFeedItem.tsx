import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ProjectFeedItemProps {
  slug: string;
  title: string;
  excerpt?: string;
  tags?: string[];
  vimeoId?: string;
  image?: string;
  isReversed?: boolean;
}

const ProjectFeedItem: React.FC<ProjectFeedItemProps> = ({
  slug,
  title,
  excerpt,
  tags,
  vimeoId,
  image,
  isReversed = false,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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

  const MediaContent = () => (
    <div className="w-full lg:w-1/2 aspect-[4/3] bg-secondary relative overflow-hidden">
      {vimeoId ? (
        <div className={`absolute inset-0 ${!isVideoLoaded ? 'animate-pulse bg-muted' : ''}`}>
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
            allow="autoplay; fullscreen; picture-in-picture"
            className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
            title={title}
          />
        </div>
      ) : image ? (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <span className="text-muted-foreground">{title}</span>
        </div>
      )}
    </div>
  );

  const TextContent = () => (
    <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1 border border-border rounded-none bg-background"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Title */}
      <h3 className="text-sm text-muted-foreground mb-3">{title}</h3>
      
      {/* Excerpt */}
      {excerpt && (
        <p className="text-base lg:text-lg leading-relaxed mb-6">
          {excerpt}
        </p>
      )}
      
      {/* CTA Button */}
      <Link 
        to={`/project/${slug}`}
        className="inline-flex items-center gap-2 text-sm font-medium border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors w-fit"
      >
        Ver más →
      </Link>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row border-b border-border">
      {isReversed ? (
        <>
          <TextContent />
          <MediaContent />
        </>
      ) : (
        <>
          <MediaContent />
          <TextContent />
        </>
      )}
    </div>
  );
};

export default ProjectFeedItem;
