
export interface Project {
  id: string;
  title: string;
  slug: string;
  client?: string;
  role?: string;
  year?: string;
  challenge?: string;
  solution?: string;
  vimeo_id?: string;
  status?: string;
  featured?: boolean;
  excerpt?: string;
  tags?: string[];
  sort_order?: number;
  created_at: string;
  updated_at: string;
}

export interface ProjectImage {
  id: string;
  project_id: string;
  url: string;
  position: number;
  alt_text?: string;
  caption?: string;
  width?: number;
  height?: number;
  file_size?: number;
  image_type?: string;
  created_at: string;
  updated_at: string;
}
