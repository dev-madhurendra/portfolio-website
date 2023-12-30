import { ButtonProps, SxProps, TypographyProps } from "@mui/material";
import { CSSProperties, ReactElement } from "react";

export interface IButtonProps extends ButtonProps {}
export interface ITypgraphyProps extends TypographyProps {
  text: string
}
export interface IIconProps {
  sx?:CSSProperties
  width?: string
  height?: string
  src: string
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
