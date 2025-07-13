import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hsadpjpqprlevibwtxzy.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzYWRwanBxcHJsZXZpYnd0eHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzNTc5MTgsImV4cCI6MjA2NzkzMzkxOH0.nxSSyFrLnecbtmL_V7Mw52HCuS7o1DAJR32xa3rd3S4'; // pegue em Project Settings > API > anon public

export const supabase = createClient(supabaseUrl, supabaseKey);
