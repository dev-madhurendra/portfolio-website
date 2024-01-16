import axios from "axios";
import { EDUCATION_ENDPOINT, EXPERIENCE_ENDPOINT, PROJECT_ENDPOINT, RANDOM_QUOTES_API_URL,URL, SKILL_EDNPOINT } from "../../utils/constants";
import { ISkill, TagsToSkillsMapping } from "../../interfaces/types";
export const getEducations = async () => await axios.get(URL + EDUCATION_ENDPOINT)

export const getSkills = async () => await axios.get(URL + SKILL_EDNPOINT)

export const getSkillsTags = async () => {
    const res = await axios.get(URL + SKILL_EDNPOINT)
    const tagSet = new Set<string>();
    res.data.forEach((skill: ISkill) =>
        skill.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet);
}

export const getSkillsByTag = async () => {
  const res = await getSkills();
  const skillsArray: ISkill[] = res.data
  const tagsToSkills: TagsToSkillsMapping = {};
  skillsArray.forEach((skill) => {
    skill.tags.forEach((tag) => {
      if (!tagsToSkills[tag]) {
        tagsToSkills[tag] = [];
      }
      tagsToSkills[tag].push(skill.name);
    });
  });
  return tagsToSkills;
};

export const getSkiilImage = (skill: string, isLight = false) =>
    `https://skillicons.dev/icons?i=${skill.toLowerCase()}&theme=${isLight? "light" : "dark"}`


export const getProjects = async () => await axios.get(URL + PROJECT_ENDPOINT)

export const getExperiences = async () => await axios.get(URL + EXPERIENCE_ENDPOINT)

export const getQuotes = async () => await axios.get(RANDOM_QUOTES_API_URL);