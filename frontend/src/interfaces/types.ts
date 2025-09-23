import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { ButtonProps, SxProps, TypographyProps } from "@mui/material";
import React, { CSSProperties, ReactElement } from "react";

export interface IButtonProps extends ButtonProps {}
export interface ITypgraphyProps extends TypographyProps {
  text: string
}
export interface IIconProps {
  sx?:CSSProperties
  width?: string
  height?: string
  src: string
  alt?: string
  onClick?: () => void
}
export interface IDarkModeToggle {
  styles?: CSSProperties
  checked: boolean
  onChange: () => void
  size?: number
}
export interface DarkModeContextProps {
  isDark: boolean;
  toggleMode: () => void;
}
export interface IChipProp {
    label?: string
    variant?: 'filled' | 'outlined',
    size?: 'medium' | 'small',
    color?: 'primary'| 'secondary'| 'warning'| 'error'| 'info'| 'default'| 'success',
    text?: string
    src?: string
    avatar?: ReactElement
    onClick?:() => void
    style?:SxProps;
}

export interface IEducationDetail {
    id: number;
    title: string;
    school: string;
    location: string;
    start_date: string;
    end_date: string;
    percentage: string;
    description: string;
}

export interface ISkill {
  id: number;
  name: string;
  tags: string[];
}

export interface TagsToSkillsMapping {
  [tag: string]: string[]; 
}

export interface ISkillProps {
  onSkillTagClick: (value: string) => void;
}
export interface IProject {
  id: number;
  title: string;
  description: string;
  technologies: string;
  projectImage: string;
  githubUrl: string;
  deployedUrl: string;
}
export interface IProjectCardProps {
    projects: IProject
}
export interface ILinkProps {
  url: string;
  children: React.ReactNode;
}
export interface ITitle {
  title_id: number;
  title: string;
  start_date: string;
  end_date: string;
}

export interface SocialMediaUserData {
  personal: string;
  organization: string;
  personalLink: string;
  orgLink: string;
  icon: IconDefinition;
}

export interface ITerminalModel {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}
