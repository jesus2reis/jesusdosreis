
import { useQuery } from '@tanstack/react-query';
import { projectService } from '../services/supabase';
import { Project } from '../types/project';

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: projectService.getProjects,
  });
}

export function useProject(id: number) {
  return useQuery({
    queryKey: ['project', id],
    queryFn: () => projectService.getProjectById(id),
  });
}

export function useProjectImages(projectId: number) {
  return useQuery({
    queryKey: ['project-images', projectId],
    queryFn: () => projectService.getProjectImages(projectId),
  });
}
