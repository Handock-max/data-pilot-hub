// @ts-nocheck
// Client Supabase prêt à l'emploi
// 1) Créez un projet Supabase, récupérez SUPABASE_URL et SUPABASE_ANON_KEY
// 2) Ajoutez-les dans un fichier .env à la racine
// 3) Importez `supabase` dans vos composants pour effectuer des requêtes

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// En production, ces variables doivent exister. En local, vous pouvez laisser vide et simuler.
// IMPORTANT: tant que les clés ne sont pas fournies, évitez d'importer et d'utiliser `supabase`
// dans les composants (conservez uniquement ces commentaires-guides).
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : undefined;


