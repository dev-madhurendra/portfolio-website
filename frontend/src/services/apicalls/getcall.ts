import axios from "axios";
import {
  EDUCATION_ENDPOINT,
  EXPERIENCE_ENDPOINT,
  PROJECT_ENDPOINT,
  RANDOM_QUOTES_API_URL,
  URL,
  HOME_ENDPOINT,
  ABOUT_ENDPOINT,
  SKILL_ENDPOINT,
} from "../../utils/constants";
import { supabase } from "./supabaseClient";


export const getExperiences = async () =>
  await axios.get(URL + EXPERIENCE_ENDPOINT);

export const getQuotes = async () => await axios.get(RANDOM_QUOTES_API_URL);

export const getLikes = async () => await supabase.from("likes").select("count").eq("id", 1).single();

export const getHomeContent = async () => await axios.get(URL + HOME_ENDPOINT)

export const getAboutContent = async () => await axios.get(URL + ABOUT_ENDPOINT)

export const getEducationContent = async () => await axios.get(URL + EDUCATION_ENDPOINT)

export const getSkillContent = async () => await axios.get(URL + SKILL_ENDPOINT)

export const getProjects = async () => await axios.get(URL + PROJECT_ENDPOINT);
