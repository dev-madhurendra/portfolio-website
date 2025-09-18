import { Skill } from "../SkillsTag/interfaces"

export interface SkillCategory {
  name: string
  icon: string
  color: string
  skills: Skill[]
}
