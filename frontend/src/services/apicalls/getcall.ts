import axios from "axios";
import { supabase } from "./supabaseClient";
import { RANDOM_QUOTES_API_URL } from "../../utils/constants";

export const getQuotes = async () => await axios.get(RANDOM_QUOTES_API_URL);

export const getLikes = async () => await supabase.from("likes").select("count").eq("id", 1).single();




