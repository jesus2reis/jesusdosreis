import React, { useState, useRef, useEffect } from 'react';
import { ContentBlock } from '@/types/project';
import { Play } from 'lucide-react';

interface MediaGalleryProps {
  items: ContentBlock[];
}

interface MediaItemProps {
  item: ContentBlock;
  className?: string;
}
const MediaItem: React.FC<MediaItemProps> = ({
  item,
  className = ""
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
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

  // Get object-position based on vertical alignment
  const getObjectPosition = (alignment?: string) => {
    switch (alignment) {
      case 'top':
        return 'object-top';
      case 'bottom':
        return 'object-bottom';
      default:
        return 'object-center';
    }
  };

  // Create inline styles for max height
  const getContainerStyles = () => {
    if (item.max_height) {
      return {
        maxHeight: item.max_height
      };
    }
    return {};
  };
  // Text content type
  if (item.media_type === 'text' && item.text_content) {
    return (
      <div className={`w-full ${className}`}>
        <div className="p-8 bg-muted/30 rounded-lg" style={getContainerStyles()}>
          <p className="text-lg lg:text-xl font-light leading-relaxed text-foreground">
            {item.text_content}
          </p>
        </div>
        {item.caption && (
          <p className="mt-4 text-sm text-muted-foreground text-center">
            {item.caption}
          </p>
        )}
      </div>
    );
  }

  if (item.media_type === 'video' && item.vimeo_id) {
    return (
      <div className={`w-full ${className}`}>
        <div className="aspect-video relative overflow-hidden bg-muted" style={getContainerStyles()}>
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
              <Play size={48} className="text-muted-foreground" />
            </div>
          )}
          <iframe 
            ref={iframeRef} 
            src={`https://player.vimeo.com/video/${item.vimeo_id}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&quality=1080p&preload=auto`} 
            allow="autoplay; fullscreen; picture-in-picture" 
            className="w-full h-full absolute inset-0" 
            title={item.alt_text || 'Video del proyecto'} 
          />
        </div>
        {item.caption && (
          <p className="mt-4 text-sm text-muted-foreground text-center">
            {item.caption}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="overflow-hidden" style={getContainerStyles()}>
        <img 
          src={item.url} 
          alt={item.alt_text || 'Imagen del proyecto'} 
          className={`w-full h-full object-cover ${getObjectPosition(item.vertical_alignment)}`} 
          loading="lazy" 
        />
      </div>
      {item.caption && (
        <p className="mt-4 text-sm text-muted-foreground text-center">
          {item.caption}
        </p>
      )}
    </div>
  );
};
const MediaGallery: React.FC<MediaGalleryProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  // Agrupar elementos para crear filas dinámicas
  const createRows = () => {
    const rows: ContentBlock[][] = [];
    let currentRow: ContentBlock[] = [];
    
    items.forEach(item => {
      const widthType = item.width_type || 'full';
      if (widthType === 'full') {
        // Si hay elementos en la fila actual, cerrarla
        if (currentRow.length > 0) {
          rows.push([...currentRow]);
          currentRow = [];
        }
        // Agregar el elemento de ancho completo como su propia fila
        rows.push([item]);
      } else if (widthType === 'half') {
        currentRow.push(item);
        // Si la fila está llena (2 elementos), cerrarla
        if (currentRow.length === 2) {
          rows.push([...currentRow]);
          currentRow = [];
        }
      }
    });

    // Agregar la última fila si tiene elementos
    if (currentRow.length > 0) {
      rows.push(currentRow);
    }
    return rows;
  };
  const rows = createRows();
  return <div className="mx-auto w-full">
      <div className="space-y-6 mx-auto px-6">
        {rows.map((row, rowIndex) => <div key={rowIndex} className="w-full">
            {row.length === 1 ?
        // Elemento de ancho completo
        <MediaItem item={row[0]} /> :
        // Elementos de media anchura - solo en desktop
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {row.map((item, itemIndex) => <MediaItem key={item.id} item={item} />)}
              </div>}
          </div>)}
      </div>
    </div>;
};
export default MediaGallery;