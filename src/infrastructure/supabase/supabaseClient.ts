import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

const isConfigured = !!supabaseUrl && !!supabaseAnonKey && supabaseUrl.startsWith('http');

export const supabase = isConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : createClient('https://placeholder.supabase.co', 'placeholder-key');

export const isSupabaseConfigured = isConfigured;
