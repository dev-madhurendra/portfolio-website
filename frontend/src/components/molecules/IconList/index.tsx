import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from '../../atoms/Toggle';
import { IconContainer, LeftDiv, MiddleDiv, RightDiv, StyledNavIcon, StyledNavLink } from '../../../utils/styled';
import Icon from '../../atoms/Icon';
import LogoGif from '../../../../public/gif/Logo.gif';
import { useDarkMode } from '../../../services/customhook/useDarkMode';
import { ICON_COMPONENT_HOME } from '../../../utils/constants';
import { navLinks } from '../../../services/mocks/mocks';


const HomeIconsList = () => {
  const { isDark, toggleMode } = useDarkMode();

  return (
    <IconContainer data-testid={ICON_COMPONENT_HOME}>
      <LeftDiv>
        <Icon src={LogoGif} sx={StyledNavIcon} />
      </LeftDiv>
      <MiddleDiv>
        {navLinks.map((link, index) => (
          <StyledNavLink key={index} to={link.to} spy smooth duration={500}>
            <FontAwesomeIcon icon={link.icon} className={`fwi-${index}`} />
          </StyledNavLink>
        ))}
      </MiddleDiv>
      <RightDiv>
        <DarkModeToggle checked={isDark} onChange={toggleMode} />
        <FontAwesomeIcon icon={faRightToBracket} />
      </RightDiv>
    </IconContainer>
  );
};

export default HomeIconsList;
