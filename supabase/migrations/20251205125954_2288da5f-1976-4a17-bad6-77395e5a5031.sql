-- Add field to control if project shows "Ver más" button
ALTER TABLE public.projects 
ADD COLUMN IF NOT EXISTS show_case_study boolean DEFAULT true;

-- Update existing projects to show case study by default
UPDATE public.projects SET show_case_study = true WHERE show_case_study IS NULL;