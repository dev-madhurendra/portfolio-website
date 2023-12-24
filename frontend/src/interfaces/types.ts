import { ButtonProps, TypographyProps } from "@mui/material";
import { CSSProperties } from "react";

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