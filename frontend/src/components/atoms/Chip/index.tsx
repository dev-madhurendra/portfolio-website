import React from 'react';
import { Chip } from '@mui/material';
import { MUI_CHIP } from '../../../utils/constants';
import { IChipProp } from '../../../interfaces/types';
import { getRandomLightColor } from '../../../services/functions/functions';



const MyChip = (props: IChipProp) => 
    <Chip
        size={props.size}
        label={props.label}
        variant={props.variant}
        onClick={props.onClick}
        color={props.color}
        style={{ ...props.style, backgroundColor: getRandomLightColor() }}
        data-testid={MUI_CHIP}
    />

export default MyChip;
