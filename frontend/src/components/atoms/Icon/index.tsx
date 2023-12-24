import React from 'react'
import { StyledIcon } from '../../../utils/styled'
import { IIconProps } from '../../../interfaces/types'
import { ICON_ALT, ICON_COMPONENT } from '../../../utils/constants'

const Icon = ({ src, width, height, onClick, sx}: IIconProps) => {
  return (
    <StyledIcon
      data-testid={ICON_COMPONENT}
      style={sx}    
      src={src}
      width={width}
      height={height}
      alt={ICON_ALT}
      onClick={onClick}
    />
  )
}

export default Icon