import React from 'react'
import { Typography as MuiTypography } from '@mui/material'
import { ITypgraphyProps } from '../../../interfaces/types'

const Typography = ({text,...props}: ITypgraphyProps) => <MuiTypography {...props}>{text}</MuiTypography>

export default Typography