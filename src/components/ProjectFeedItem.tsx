import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ProjectFeedItemProps {
  slug: string;
  title: string;
  client?: string;
  excerpt?: string;
  briefDescription?: string;
  tags?: string[];
  vimeoId?: string;
  image?: string;
  gridThumbnail?: string;
  gridThumbnailType?: string;
  isReversed?: boolean;
  showCaseStudy?: boolean;
}

const ProjectFeedItem: React.FC<ProjectFeedItemProps> = ({
  slug,
  title,
  client,
  excerpt,
  briefDescription,
  tags,
  vimeoId,
  image,
  gridThumbnail,
  gridThumbnailType,
  isReversed = false,
  showCaseStudy = true,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Determine which media to show: grid_thumbnail takes priority
  const displayVimeoId = gridThumbnail && gridThumbnailType === 'video' ? gridThumbnail : vimeoId;
  const displayImage = gridThumbnail && gridThumbnailType === 'image' ? gridThumbnail : image;
  const useVideo = gridThumbnail ? gridThumbnailType === 'video' : !!vimeoId;

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
    <Link 
      to={`/project/${slug}`}
      className="w-full lg:w-1/2 aspect-[4/3] bg-secondary relative overflow-hidden block"
    >
      {useVideo && displayVimeoId ? (
        <div className={`absolute inset-0 ${!isVideoLoaded ? 'animate-pulse bg-muted' : ''}`}>
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${displayVimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
            allow="autoplay; fullscreen; picture-in-picture"
            className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
            title={title}
          />
        </div>
      ) : displayImage ? (
        <img 
          src={displayImage} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <span className="text-muted-foreground">{title}</span>
        </div>
      )}
    </Link>
  );

  const TextContent = () => (
    <div className={`w-full lg:w-1/2 aspect-[4/3] p-6 lg:p-10 flex flex-col ${isReversed ? 'text-right items-end' : 'text-left items-start'}`}>
      {/* Client name at top */}
      <h3 className="text-sm text-muted-foreground mb-3">{client || title}</h3>
      
      {/* Tags - Notion style chips */}
      {tags && tags.length > 0 && (
        <div className={`flex flex-wrap gap-2 mb-4 ${isReversed ? 'justify-end' : 'justify-start'}`}>
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Content grows to fill space */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Brief Description */}
        {briefDescription && (
          <p className="text-lg lg:text-xl font-light leading-relaxed mb-4">
            {briefDescription}
          </p>
        )}
        
        {/* Excerpt */}
        {excerpt && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {excerpt}
          </p>
        )}
      </div>
      
      {/* CTA Button - only show if showCaseStudy is true */}
      {showCaseStudy && (
        <Link 
          to={`/project/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors w-fit mt-auto"
        >
          Ver más →
        </Link>
      )}
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row border-b border-border">
      {/* Mobile: always image first, then text */}
      <div className="lg:hidden">
        <MediaContent />
        <TextContent />
      </div>
      
      {/* Desktop: alternating layout */}
      <div className="hidden lg:flex lg:flex-row w-full">
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
    </div>
  );
};

export default ProjectFeedItem;
