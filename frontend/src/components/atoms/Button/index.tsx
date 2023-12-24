import React from "react";
import { Button } from "@mui/material";
import { IButtonProps } from "../../../interfaces/types";

const MuiButton = ({ ...buttonProps }: IButtonProps) => 
<Button {...buttonProps} />;

export default MuiButton