import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import StyledSeparator from "../../atoms/StyledSeparator";
import { Link } from "react-scroll";
import {
    BLANK,
    DEVLOPER_NAME,
    HOME,
    MADHURENDRA_NATH_TIWARI,
    OTHERS,
    QUICK_LINKS,
    SOCIAL_LINKS,
    SOFTWARE_ENGINEER
} from "../../../utils/constants";
import { quickLinks, socialLinks } from "../../../services/mocks/mocks";
import {
  FooterContainer,
  FoorterWrapper,
  FoorterDiv,
  DeveloperName,
  QuickLinksContainer,
  SocialLinksContainer,
  Year,
  BottomToTopButton,
  StyledHorizontalLine,
} from "../../../utils/styled";
import { getQuotes } from "../../../services/apicalls/getcall";

const Footer = () => {
  const [quotes,setQuotes] = useState("")
  useEffect(() => {
      getQuotes().then((res) => {
        setQuotes(res.data[0]?.content)
      }).catch((err) => {
        throw new Error("Error while fetching quotes " + err)    
      })
  },[])
  return (
    <FooterContainer>
      <FoorterWrapper>
        <FoorterDiv>
          <p>{DEVLOPER_NAME}</p>
          <StyledSeparator />
          <DeveloperName>{MADHURENDRA_NATH_TIWARI}</DeveloperName>
          <h4>{SOFTWARE_ENGINEER}</h4>
          <Year>©{new Date().getFullYear()}</Year>
        </FoorterDiv>
        <FoorterDiv>
          <p>{SOCIAL_LINKS}</p>
          <StyledSeparator />
          <SocialLinksContainer>
            {socialLinks.map((linkItem, index) => (
              <a key={index} href={linkItem.link} target={BLANK}>
                <FontAwesomeIcon icon={linkItem.icon} />
              </a>
            ))}
          </SocialLinksContainer>
        </FoorterDiv>
        <FoorterDiv>
          <p>{QUICK_LINKS}</p>
          <StyledSeparator />
          <QuickLinksContainer>
            {quickLinks.map((link, index) => (
              <div key={index}>
                <Link to={link.toLowerCase()} spy smooth duration={500}>
                  {link}
                </Link>
              </div>
            ))}
          </QuickLinksContainer>
        </FoorterDiv>
        <FoorterDiv>
          <p>{OTHERS}</p>
          <StyledSeparator />
          <Link to={HOME.toLowerCase()} spy smooth duration={500}>
            <BottomToTopButton
              children={<FontAwesomeIcon icon={faChevronUp} />}
            />
          </Link>
        </FoorterDiv>
      </FoorterWrapper>
      <StyledHorizontalLine />
      <div>
        <h3>{quotes}</h3>
      </div>
    </FooterContainer>
  );
};

export default Footer;
