import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const createClient = () => {
  return createClientComponentClient()
}

export const createServerClient = () => {
  return createServerComponentClient({ cookies })
}

// Types pour la base de données
export type Database = {
  public: {
    Tables: {
      members: {
        Row: {
          id: string
          email: string
          first_name: string
          last_name: string
          phone?: string
          interests?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          first_name: string
          last_name: string
          phone?: string
          interests?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string
          last_name?: string
          phone?: string
          interests?: string
          updated_at?: string
        }
      }
      news: {
        Row: {
          id: string
          title: string
          content: string
          excerpt: string
          image_url?: string
          category: string
          published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          excerpt: string
          image_url?: string
          category: string
          published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          excerpt?: string
          image_url?: string
          category?: string
          published?: boolean
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          description: string
          objectives: string
          results?: string
          location?: string
          image_url?: string
          status: 'planned' | 'ongoing' | 'completed'
          start_date?: string
          end_date?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          objectives: string
          results?: string
          location?: string
          image_url?: string
          status?: 'planned' | 'ongoing' | 'completed'
          start_date?: string
          end_date?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          objectives?: string
          results?: string
          location?: string
          image_url?: string
          status?: 'planned' | 'ongoing' | 'completed'
          start_date?: string
          end_date?: string
          updated_at?: string
        }
      }
      events: {
        Row: {
          id: string
          title: string
          description: string
          date: string
          location: string
          image_url?: string
          max_participants?: number
          current_participants: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          date: string
          location: string
          image_url?: string
          max_participants?: number
          current_participants?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          date?: string
          location?: string
          image_url?: string
          max_participants?: number
          current_participants?: number
          updated_at?: string
        }
      }
      gallery: {
        Row: {
          id: string
          title: string
          description?: string
          image_url: string
          category: string
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string
          image_url: string
          category: string
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image_url?: string
          category?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          subject: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          subject: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          subject?: string
          message?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
