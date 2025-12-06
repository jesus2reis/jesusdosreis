import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { SidebarContent } from '@/types/sidebar';

export function useSidebarContent() {
  return useQuery({
    queryKey: ['sidebar_content'],
    queryFn: async (): Promise<SidebarContent | null> => {
      const { data, error } = await supabase
        .from('sidebar_content')
        .select('*')
        .maybeSingle();

      if (error) throw error;
      if (!data) return null;
      
      return {
        ...data,
        social_links: (data.social_links as SidebarContent['social_links']) || {},
      };
    },
  });
}
