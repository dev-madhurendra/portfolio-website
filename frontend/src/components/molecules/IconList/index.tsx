import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCode, faEnvelope, faHouse, faLaptopCode, faRightToBracket, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from '../../atoms/Toggle';
import { IconContainer, LeftDiv, MiddleDiv, RightDiv, StyledAboutIcon, StyledNavIcon } from '../../../utils/styled';
import Icon from '../../atoms/Icon';
import LogoGif from '../../../../public/gif/Logo.gif';
import About from '../../../../public/svg/About.svg';
import { useDarkMode } from '../../../services/customhook/useDarkMode';
import { ICON_COMPONENT_HOME } from '../../../utils/constants';

const HomeIconsList = () => {
  const { isDark, toggleMode } = useDarkMode();

  return (
    <IconContainer data-testid={ICON_COMPONENT_HOME}>   
      <LeftDiv>
        <Icon src={LogoGif} sx={StyledNavIcon} />
      </LeftDiv>
      <MiddleDiv>
        <FontAwesomeIcon icon={faHouse} />
        <Icon src={About} sx={StyledAboutIcon} />
        <FontAwesomeIcon icon={faUserGraduate} />
        <FontAwesomeIcon icon={faCode} />
        <FontAwesomeIcon icon={faLaptopCode} />
        <FontAwesomeIcon icon={faBriefcase} />
        <FontAwesomeIcon icon={faEnvelope} />
      </MiddleDiv>
      <RightDiv>
        <DarkModeToggle checked={isDark} onChange={toggleMode} />
        <FontAwesomeIcon icon={faRightToBracket} />
      </RightDiv>
    </IconContainer>
  );
};

export default HomeIconsList;
