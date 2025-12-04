-- Add brief_description field to projects table
ALTER TABLE public.projects 
ADD COLUMN brief_description text;

-- Update existing projects with Lorem Ipsum placeholder
UPDATE public.projects 
SET brief_description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags = ARRAY['Rebranding', 'Estrategia', 'Dirección Creativa']
WHERE brief_description IS NULL;