import { createClient } from '@supabase/supabase-js';

// ================================================================================
// SUPABASE CONFIGURATION
// ================================================================================
// Project ID: zxlnmxhvvbivqkettowy
// 
// TO GET YOUR ANON KEY:
// 1. Go to: https://supabase.com/dashboard/project/zxlnmxhvvbivqkettowy/settings/api
// 2. Copy the "anon" key (public) - it's a long JWT token
// 3. Paste it below replacing the PLACEHOLDER
// ================================================================================

const supabaseUrl = 'https://zxlnmxhvvbivqkettowy.supabase.co';

// Anon key from Supabase Dashboard (Settings > API)
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4bG5teGh2dmJpdnFrZXR0b3d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3NjI5NDIsImV4cCI6MjA4MzMzODk0Mn0.CI6pr_HsuqSZAwxkgfbTkXuV-E1jWRHUPIKMy9ktYMA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface WaitlistEntry {
  id?: string;
  email: string;
  created_at?: string;
}
