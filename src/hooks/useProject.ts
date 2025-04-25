
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Project, ProjectImage } from '@/types/project';

export function useProject(id: string) {
  return useQuery({
    queryKey: ['project', id],
    queryFn: async (): Promise<{project: Project, images: ProjectImage[]}> => {
      const [projectResult, imagesResult] = await Promise.all([
        supabase
          .from('projects')
          .select('*')
          .eq('id', id)
          .single(),
        supabase
          .from('project_images')
          .select('*')
          .eq('project_id', id)
          .order('position', { ascending: true })
      ]);

      if (projectResult.error) throw projectResult.error;
      if (imagesResult.error) throw imagesResult.error;

      return {
        project: projectResult.data,
        images: imagesResult.data
      };
    },
    enabled: !!id,
  });
}
