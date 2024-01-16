import React from 'react';
import { ILinkProps } from '../../../interfaces/types';
import { BLANK } from '../../../utils/constants';
import { StyledMuiButton } from '../../../utils/styled';

const Link = (props: ILinkProps) => {
  return (
    <div>
      <a href={props.url} target={BLANK} rel="noopener noreferrer">
        <StyledMuiButton>{props.children}</StyledMuiButton>
      </a>
    </div>
  );
};

export default Link;
