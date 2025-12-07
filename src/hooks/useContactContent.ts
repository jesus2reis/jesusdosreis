import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ContactContent {
  id: string;
  claim: string;
  process: ProcessStep[];
  email: string | null;
  linkedin_url: string | null;
  linkedin_label: string | null;
  location: string | null;
  created_at: string;
  updated_at: string;
}

export const useContactContent = () => {
  return useQuery({
    queryKey: ['contact-content'],
    queryFn: async (): Promise<ContactContent | null> => {
      const { data, error } = await supabase
        .from('contact_content')
        .select('*')
        .limit(1)
        .single();

      if (error) {
        console.error('Error fetching contact content:', error);
        return null;
      }

      return {
        ...data,
        process: data.process as unknown as ProcessStep[]
      };
    },
  });
};
