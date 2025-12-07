-- Create contact_content table for the /contact page CMS
CREATE TABLE public.contact_content (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  claim text NOT NULL DEFAULT 'Hablemos sobre tu próximo proyecto.',
  process jsonb NOT NULL DEFAULT '[
    {"step": 1, "title": "Reunión", "description": "Empezamos con una reunión para conocernos y entender tus necesidades, objetivos y visión."},
    {"step": 2, "title": "Diseño", "description": "Desarrollo propuestas creativas alineadas con tu marca y objetivos."},
    {"step": 3, "title": "Entrega", "description": "Entrego los archivos finales y te acompaño en la implementación."}
  ]'::jsonb,
  email text DEFAULT 'hola@jesusdosreis.com',
  linkedin_url text DEFAULT 'https://www.linkedin.com/in/jesusdosreis/',
  linkedin_label text DEFAULT 'LinkedIn',
  location text DEFAULT 'Madrid, España',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_content ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access to contact_content"
ON public.contact_content
FOR SELECT
USING (true);