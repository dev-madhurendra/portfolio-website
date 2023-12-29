import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCode, faEnvelope, faHouse, faInfo, faLaptopCode, faRightToBracket, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from '../../atoms/Toggle';
import { IconContainer, LeftDiv, MiddleDiv, RightDiv, StyledNavIcon } from '../../../utils/styled';
import Icon from '../../atoms/Icon';
import LogoGif from '../../../../public/gif/Logo.gif';
import { useDarkMode } from '../../../services/customhook/useDarkMode';
import { ICON_COMPONENT_HOME } from '../../../utils/constants';
import { Link } from 'react-scroll';

const HomeIconsList = () => {
  const { isDark, toggleMode } = useDarkMode();

  return (
    <IconContainer data-testid={ICON_COMPONENT_HOME}>
      <LeftDiv>
        <Icon src={LogoGif} sx={StyledNavIcon} />
      </LeftDiv>
      <MiddleDiv>
        <Link to="home" spy smooth duration={500}>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <Link to="about" spy smooth duration={500}>
          <FontAwesomeIcon icon={faInfo} />
        </Link>
        <Link to="education" spy smooth duration={500}>
          <FontAwesomeIcon icon={faUserGraduate} />
        </Link>
        <Link to="code" spy smooth duration={500}>
          <FontAwesomeIcon icon={faCode} />
        </Link>
        <Link to="projects" spy smooth duration={500}>
          <FontAwesomeIcon icon={faLaptopCode} />
        </Link>
        <Link to="experience" spy smooth duration={500}>
          <FontAwesomeIcon icon={faBriefcase} />
        </Link>
        <Link to="contact" spy smooth duration={500}>
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </MiddleDiv>
      <RightDiv>
        <DarkModeToggle checked={isDark} onChange={toggleMode} />
        <FontAwesomeIcon icon={faRightToBracket} />
      </RightDiv>
    </IconContainer>
  );
};

export default HomeIconsList;
