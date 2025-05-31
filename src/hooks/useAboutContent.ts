
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { AboutContent } from '@/types/cms';

export function useAboutContent() {
  return useQuery({
    queryKey: ['about-content'],
    queryFn: async (): Promise<AboutContent | null> => {
      const { data, error } = await supabase
        .from('about_content')
        .select('*')
        .limit(1)
        .single();

      if (error) throw error;
      return data;
    },
  });
}
