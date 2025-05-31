
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Experience } from '@/types/cms';

export function useExperiences() {
  return useQuery({
    queryKey: ['experiences'],
    queryFn: async (): Promise<Experience[]> => {
      const { data, error } = await supabase
        .from('experiences')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      return data;
    },
  });
}
