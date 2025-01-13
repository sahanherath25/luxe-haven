import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://jomdxlnjubxdlumjcjii.supabase.co'
// const supabaseKey = process.env.API_KEY
//
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
//
console.log("KEY IS ",supabaseKey,supabaseUrl)

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
