-- 1. Create sidebar_content table for sidebar information
CREATE TABLE public.sidebar_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL DEFAULT 'Director Creativo & Brand Designer',
  slogan TEXT NOT NULL DEFAULT 'Démosle a tu negocio la marca que se merece.',
  available_status TEXT NOT NULL DEFAULT 'Abierto para trabajar nuevos proyectos',
  social_links JSONB DEFAULT '{"linkedin": "https://www.linkedin.com/in/jesusdosreis/"}',
  contact_email TEXT DEFAULT 'hola@jesusdosreis.com',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.sidebar_content ENABLE ROW LEVEL SECURITY;

-- Create read policy
CREATE POLICY "Allow public read access to sidebar_content" 
ON public.sidebar_content 
FOR SELECT 
USING (true);

-- Insert default row
INSERT INTO public.sidebar_content (title, slogan, available_status, social_links, contact_email)
VALUES (
  'Director Creativo & Brand Designer',
  'Démosle a tu negocio la marca que se merece.',
  'Abierto para trabajar nuevos proyectos',
  '{"linkedin": "https://www.linkedin.com/in/jesusdosreis/"}',
  'hola@jesusdosreis.com'
);

-- 2. Add client field to projects table
ALTER TABLE public.projects 
ADD COLUMN client TEXT;

-- 3. Add grid_thumbnail field to projects table (for feed cards)
ALTER TABLE public.projects 
ADD COLUMN grid_thumbnail TEXT,
ADD COLUMN grid_thumbnail_type TEXT DEFAULT 'image';

-- 4. Update project_images media_type to support 'text' value
-- First drop the existing enum constraint and recreate with new value
ALTER TABLE public.project_images 
ALTER COLUMN media_type TYPE TEXT;

-- Set default for media_type
ALTER TABLE public.project_images 
ALTER COLUMN media_type SET DEFAULT 'image';