import React from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { IDarkModeToggle } from '../../../interfaces/types';
import { DARK_MODE_TOGGLE_COMPONENT } from '../../../utils/constants';

const DarkModeToggle = (props: IDarkModeToggle) => {
  return (
    <DarkModeSwitch
        data-testid = {DARK_MODE_TOGGLE_COMPONENT}      
        style={props.styles}
        checked={props.checked}
        onChange={props.onChange}
        size={props.size}
    />
  )
}

export default DarkModeToggle