
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Project, ProjectImage } from '@/types/project';

export function useProject(slug: string) {
  return useQuery({
    queryKey: ['project', slug],
    queryFn: async (): Promise<{project: Project, images: ProjectImage[]}> => {
      const [projectResult, imagesResult] = await Promise.all([
        supabase
          .from('projects')
          .select('*')
          .eq('slug', slug)
          .single(),
        supabase
          .from('project_images')
          .select('*')
          .eq('project_id', (await supabase
            .from('projects')
            .select('id')
            .eq('slug', slug)
            .single()).data?.id || '')
          .order('position', { ascending: true })
      ]);

      if (projectResult.error) throw projectResult.error;
      if (imagesResult.error) throw imagesResult.error;

      return {
        project: projectResult.data,
        images: imagesResult.data
      };
    },
    enabled: !!slug,
  });
}
