import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import DarkModeToggle from "../../atoms/Toggle";
import { navLinks } from "../../../services/mocks/mocks";
import { useDarkMode } from "../../../services/customhook/useDarkMode";
import {
  LinkItem,
  LinksWrapper,
  LogoContainer,
  NavbarWrapper,
  RightActions,
} from "./styled";
import LikeFeature from "../../organisms/LikeWrapper";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const { isDark, toggleMode } = useDarkMode();

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.to));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <NavbarWrapper>
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
              <FontAwesomeIcon icon={link.icon} />
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
        <LogoContainer>
          <LikeFeature />
        </LogoContainer>
      </RightActions>
    </NavbarWrapper>
  );
};

export default Navbar;
