import { createClient } from '@supabase/supabase-js'

// Sustituir con las credenciales reales de Supabase proporcionadas por el usuario.
// Usualmente, van en un archivo .env, pero lo codificamos duro aqui para simplicidad y rapidez (las keys de supabase pub/secret no exponen todo el DB).
const supabaseUrl = 'https://knqjytnhzpumsjpxxjgt.supabase.co'
const supabaseKey = 'sb_publishable_ZlwgLxylEVjS-c-05TryCw_np-UW6aP' // la publishable key

export const supabase = createClient(supabaseUrl, supabaseKey)
