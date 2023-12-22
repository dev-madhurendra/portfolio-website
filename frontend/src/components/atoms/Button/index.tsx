
import React from "react";
import { Button, ButtonProps } from "@mui/material";

export interface IButtonProps extends ButtonProps {}

const MuiButton = ({ ...buttonProps }: IButtonProps) => 
<Button {...buttonProps} />;

export default MuiButton