import { supabase } from "./supabaseClient";

export const doLike = async (likes: number) =>
  await supabase
    .from("likes")
    .update({ count: likes + 1 })
    .eq("id", 1)
    .select("count")
    .single();
