import axios from "axios";
import { EDUCATION_ENDPOINT, SKILL_EDNPOINT, URL } from "../../utils/constants";
import { ISkill } from "../../interfaces/types";

export const getEducations = async () => await axios.get(URL + EDUCATION_ENDPOINT)
export const getSkills = async () => await axios.get(URL + SKILL_EDNPOINT)
export const getSkillsTags = async () => {
    const res = await axios.get(URL + SKILL_EDNPOINT)
    const tagSet = new Set<string>();
    res.data.forEach((skill: ISkill) =>
        skill.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet);
}
