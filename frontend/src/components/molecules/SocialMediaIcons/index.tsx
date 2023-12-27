import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDiv } from '../../../utils/styled';
import { socialMediaData } from '../../../services/mocks/mocks';
import { SOCIAL_MEDIA_COMPONENT } from '../../../utils/constants';

const SocialMediaIcons = () => {
  return (
    <IconDiv data-testid = {SOCIAL_MEDIA_COMPONENT}>
      {socialMediaData.map(({ platform, icon, color, link }) => (
        <a key={platform} href={link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={icon} style={{ color }} className='wave' />
        </a>
      ))}
    </IconDiv>
  );
};

export default SocialMediaIcons;
