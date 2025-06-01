
import React, { useState, useRef, useEffect } from 'react';
import { ProjectImage } from '@/types/project';
import { Play } from 'lucide-react';

interface MediaGalleryProps {
  items: ProjectImage[];
}

interface MediaItemProps {
  item: ProjectImage;
  className?: string;
}

const MediaItem: React.FC<MediaItemProps> = ({ item, className = "" }) => {
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

  if (item.media_type === 'video' && item.vimeo_id) {
    return (
      <div className={`w-full relative ${className}`}>
        <div className="aspect-video relative overflow-hidden rounded-lg bg-muted">
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
              <Play size={48} className="text-muted-foreground" />
            </div>
          )}
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${item.vimeo_id}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
            allow="autoplay; fullscreen; picture-in-picture"
            className="w-full h-full absolute inset-0"
            title={item.alt_text || 'Video del proyecto'}
          />
        </div>
        {item.caption && (
          <p className="mt-2 text-sm text-muted-foreground text-center">
            {item.caption}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <img 
        src={item.url} 
        alt={item.alt_text || 'Imagen del proyecto'} 
        className="w-full h-auto object-cover rounded-lg" 
        loading="lazy"
      />
      {item.caption && (
        <p className="mt-2 text-sm text-muted-foreground text-center">
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
    const rows: ProjectImage[][] = [];
    let currentRow: ProjectImage[] = [];

    items.forEach((item) => {
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

  return (
    <div className="space-y-8">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="w-full">
          {row.length === 1 ? (
            // Elemento de ancho completo
            <MediaItem item={row[0]} />
          ) : (
            // Elementos de media anchura - solo en desktop
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {row.map((item, itemIndex) => (
                <MediaItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MediaGallery;
