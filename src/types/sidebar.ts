export interface SidebarContent {
  id: string;
  title: string;
  slogan: string;
  available_status: string;
  social_links: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  contact_email: string;
  created_at: string;
  updated_at: string;
}
