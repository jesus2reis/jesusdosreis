
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Education } from '@/types/cms';

export function useEducation() {
  return useQuery({
    queryKey: ['education'],
    queryFn: async (): Promise<Education[]> => {
      const { data, error } = await supabase
        .from('education')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      return data;
    },
  });
}
