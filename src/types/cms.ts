
export interface Experience {
  id: string;
  company: string;
  role: string;
  years: string;
  description?: string;
  sort_order?: number;
  created_at: string;
  updated_at: string;
}

export interface Education {
  id: string;
  course: string;
  school: string;
  years: string;
  description?: string;
  sort_order?: number;
  created_at: string;
  updated_at: string;
}

export interface AboutContent {
  id: string;
  about_short: string;
  about_full: string;
  created_at: string;
  updated_at: string;
}
