
export interface Project {
  id: string;
  title: string;
  client?: string;
  role?: string;
  year?: string;
  challenge?: string;
  solution?: string;
  vimeo_id?: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectImage {
  id: string;
  project_id: string;
  url: string;
  position: number;
  created_at: string;
  updated_at: string;
}
