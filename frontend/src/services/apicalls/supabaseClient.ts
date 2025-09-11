
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gcdkvhbpgpzxnajsczbg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjZGt2aGJwZ3B6eG5hanNjemJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2MTUwMzgsImV4cCI6MjA3MzE5MTAzOH0.XNLzZTkOh8N910P-KAXUitTwiUefcuqJ3ErlhoAF2iU'
export const supabase = createClient(supabaseUrl, supabaseKey)