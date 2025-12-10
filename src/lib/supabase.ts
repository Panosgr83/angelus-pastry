import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Category {
  id: string;
  name: string;
  description: string;
  display_order: number;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category_id: string;
  image_url: string;
  display_order: number;
  featured: boolean;
  created_at: string;
}
