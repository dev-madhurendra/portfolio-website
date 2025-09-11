import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import DarkModeToggle from "../../atoms/Toggle";
import { navLinks } from "../../../services/mocks/mocks";
import { useDarkMode } from "../../../services/customhook/useDarkMode";
import { LinkItem, LinksWrapper, LogoContainer, NavbarWrapper, RightActions, StyledLogo } from "./styled";
import NavLogo from "../../../../public/png/MNT_Logo.png"
import LikeFeature from "../../organisms/LikeWrapper";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const { isDark, toggleMode } = useDarkMode();

  return (
    <NavbarWrapper>
      <LogoContainer>
        <div className="logo-circle">
          <StyledLogo src={NavLogo} width="200px" height="200px" />
        </div>
      </LogoContainer>

      <LinksWrapper open={mobileMenu}>
        {navLinks.map((link) => (
          <LinkItem key={link.to} active={activeLink === link.to}>
            <a
              href={`#${link.to}`}
              onClick={() => {
                setActiveLink(link.to);
                setMobileMenu(false);
              }}
            > 
              <span>{link.label}</span>
            </a>
          </LinkItem>
        ))}
      </LinksWrapper>

      <RightActions>
        <DarkModeToggle checked={isDark} onChange={toggleMode} />
        <FontAwesomeIcon
          icon={mobileMenu ? faX : faBars}
          className="menu-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      </RightActions>
    </NavbarWrapper>
  );
};

export default Navbar;