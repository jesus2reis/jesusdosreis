export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      about_content: {
        Row: {
          about_full: string
          about_short: string
          created_at: string
          id: string
          updated_at: string
        }
        Insert: {
          about_full: string
          about_short: string
          created_at?: string
          id?: string
          updated_at?: string
        }
        Update: {
          about_full?: string
          about_short?: string
          created_at?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      education: {
        Row: {
          course: string
          created_at: string
          description: string | null
          id: string
          school: string
          sort_order: number | null
          updated_at: string
          years: string
        }
        Insert: {
          course: string
          created_at?: string
          description?: string | null
          id?: string
          school: string
          sort_order?: number | null
          updated_at?: string
          years: string
        }
        Update: {
          course?: string
          created_at?: string
          description?: string | null
          id?: string
          school?: string
          sort_order?: number | null
          updated_at?: string
          years?: string
        }
        Relationships: []
      }
      experiences: {
        Row: {
          company: string
          created_at: string
          description: string | null
          id: string
          role: string
          sort_order: number | null
          updated_at: string
          years: string
        }
        Insert: {
          company: string
          created_at?: string
          description?: string | null
          id?: string
          role: string
          sort_order?: number | null
          updated_at?: string
          years: string
        }
        Update: {
          company?: string
          created_at?: string
          description?: string | null
          id?: string
          role?: string
          sort_order?: number | null
          updated_at?: string
          years?: string
        }
        Relationships: []
      }
      project_images: {
        Row: {
          alt_text: string | null
          caption: string | null
          created_at: string
          file_size: number | null
          height: number | null
          id: string
          image_type: string | null
          max_height: string | null
          media_type: Database["public"]["Enums"]["media_type"] | null
          position: number
          project_id: string
          updated_at: string
          url: string
          vertical_alignment: string | null
          vimeo_id: string | null
          width: number | null
          width_type: Database["public"]["Enums"]["width_type"] | null
        }
        Insert: {
          alt_text?: string | null
          caption?: string | null
          created_at?: string
          file_size?: number | null
          height?: number | null
          id?: string
          image_type?: string | null
          max_height?: string | null
          media_type?: Database["public"]["Enums"]["media_type"] | null
          position?: number
          project_id: string
          updated_at?: string
          url: string
          vertical_alignment?: string | null
          vimeo_id?: string | null
          width?: number | null
          width_type?: Database["public"]["Enums"]["width_type"] | null
        }
        Update: {
          alt_text?: string | null
          caption?: string | null
          created_at?: string
          file_size?: number | null
          height?: number | null
          id?: string
          image_type?: string | null
          max_height?: string | null
          media_type?: Database["public"]["Enums"]["media_type"] | null
          position?: number
          project_id?: string
          updated_at?: string
          url?: string
          vertical_alignment?: string | null
          vimeo_id?: string | null
          width?: number | null
          width_type?: Database["public"]["Enums"]["width_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "project_images_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          area: string | null
          challenge: string | null
          created_at: string
          excerpt: string | null
          featured: boolean | null
          id: string
          slug: string
          solution: string | null
          sort_order: number | null
          status: string | null
          tags: string[] | null
          tipo: string | null
          title: string
          updated_at: string
          vimeo_id: string | null
          year: string | null
        }
        Insert: {
          area?: string | null
          challenge?: string | null
          created_at?: string
          excerpt?: string | null
          featured?: boolean | null
          id?: string
          slug: string
          solution?: string | null
          sort_order?: number | null
          status?: string | null
          tags?: string[] | null
          tipo?: string | null
          title: string
          updated_at?: string
          vimeo_id?: string | null
          year?: string | null
        }
        Update: {
          area?: string | null
          challenge?: string | null
          created_at?: string
          excerpt?: string | null
          featured?: boolean | null
          id?: string
          slug?: string
          solution?: string | null
          sort_order?: number | null
          status?: string | null
          tags?: string[] | null
          tipo?: string | null
          title?: string
          updated_at?: string
          vimeo_id?: string | null
          year?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_slug: { Args: { input_text: string }; Returns: string }
    }
    Enums: {
      media_type: "image" | "video"
      width_type: "full" | "half"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      media_type: ["image", "video"],
      width_type: ["full", "half"],
    },
  },
} as const
