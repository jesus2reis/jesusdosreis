
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Project, ContentBlock } from '@/types/project';

export function useProject(slug: string) {
  return useQuery({
    queryKey: ['project', slug],
    queryFn: async (): Promise<{project: Project, contentBlocks: ContentBlock[]}> => {
      const [projectResult, blocksResult] = await Promise.all([
        supabase
          .from('projects')
          .select('*')
          .eq('slug', slug)
          .single(),
        supabase
          .from('content_blocks')
          .select('*')
          .eq('project_slug', slug)
          .order('position', { ascending: true })
      ]);

      if (projectResult.error) throw projectResult.error;
      if (blocksResult.error) throw blocksResult.error;

      return {
        project: projectResult.data,
        contentBlocks: blocksResult.data as ContentBlock[]
      };
    },
    enabled: !!slug,
  });
}
