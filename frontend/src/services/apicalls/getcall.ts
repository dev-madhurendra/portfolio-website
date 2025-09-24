import { supabase } from "./supabaseClient";
export const getLikes = async () => await supabase.from("likes").select("count").eq("id", 1).single();




