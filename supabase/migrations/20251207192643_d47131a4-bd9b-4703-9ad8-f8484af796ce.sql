-- Create new content_blocks table with project_slug instead of project_id UUID
CREATE TABLE public.content_blocks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_slug TEXT NOT NULL REFERENCES public.projects(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  url TEXT NOT NULL DEFAULT '',
  position INTEGER NOT NULL DEFAULT 0,
  alt_text TEXT,
  caption TEXT,
  width INTEGER,
  height INTEGER,
  file_size INTEGER,
  image_type TEXT DEFAULT 'gallery',
  media_type TEXT NOT NULL DEFAULT 'image' CHECK (media_type IN ('image', 'video', 'text')),
  vimeo_id TEXT,
  text_content TEXT,
  width_type TEXT DEFAULT 'full' CHECK (width_type IN ('full', 'half')),
  max_height TEXT,
  vertical_alignment TEXT DEFAULT 'center',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Migrate data from project_images to content_blocks
INSERT INTO public.content_blocks (
  id, project_slug, url, position, alt_text, caption, width, height, file_size,
  image_type, media_type, vimeo_id, width_type, max_height, vertical_alignment,
  created_at, updated_at
)
SELECT 
  pi.id,
  p.slug as project_slug,
  pi.url,
  pi.position,
  pi.alt_text,
  pi.caption,
  pi.width,
  pi.height,
  pi.file_size,
  pi.image_type,
  COALESCE(pi.media_type, 'image') as media_type,
  pi.vimeo_id,
  COALESCE(pi.width_type::text, 'full') as width_type,
  pi.max_height,
  COALESCE(pi.vertical_alignment, 'center') as vertical_alignment,
  pi.created_at,
  pi.updated_at
FROM public.project_images pi
JOIN public.projects p ON pi.project_id = p.id;

-- Enable RLS on content_blocks
ALTER TABLE public.content_blocks ENABLE ROW LEVEL SECURITY;

-- Create read policy for content_blocks
CREATE POLICY "Allow public read access to content_blocks" 
ON public.content_blocks 
FOR SELECT 
USING (true);

-- Drop old project_images table
DROP TABLE public.project_images;