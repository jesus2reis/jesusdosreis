
export interface Project {
  id: number;
  title: string;
  client: string;
  role: string;
  year: string;
  challenge: string;
  solution: string;
  vimeo_id?: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectImage {
  id: number;
  project_id: number;
  image_url: string;
  order: number;
  created_at: string;
}
