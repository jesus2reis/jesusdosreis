
export interface Project {
  id: string;
  title: string;
  slug: string;
  client?: string;
  area?: string;
  tipo?: string;
  year?: string;
  challenge?: string;
  solution?: string;
  vimeo_id?: string;
  status?: string;
  featured?: boolean;
  excerpt?: string;
  brief_description?: string;
  tags?: string[];
  type_of_work?: string;
  sort_order?: number;
  show_case_study?: boolean;
  grid_thumbnail?: string;
  grid_thumbnail_type?: string;
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
  media_type?: 'image' | 'video' | 'text';
  vimeo_id?: string;
  text_content?: string;
  width_type?: 'full' | 'half';
  max_height?: string;
  vertical_alignment?: string;
  created_at: string;
  updated_at: string;
}
