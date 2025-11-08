// Types pour l'application ATPNE

export interface Member {
  id: string
  email: string
  first_name: string
  last_name: string
  phone?: string
  interests?: string
  created_at: string
  updated_at: string
}

export interface News {
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

export interface Project {
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

export interface Event {
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

export interface GalleryItem {
  id: string
  title: string
  description?: string
  image_url: string
  category: string
  created_at: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}

export interface MembershipForm {
  first_name: string
  last_name: string
  email: string
  phone?: string
  interests?: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}
