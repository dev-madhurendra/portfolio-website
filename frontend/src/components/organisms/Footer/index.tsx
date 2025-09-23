import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import {
  BLANK,
  COPYRIGHT,
  DEFAULT_QUOTES,
  DEVLOPER_NAME,
  MADHURENDRA_NATH_TIWARI,
  OTHERS,
  QUICK_LINKS,
  SOCIAL_LINKS,
  SOFTWARE_ENGINEER,
} from "../../../utils/constants";
import { quickLinks, socialLinks } from "../../../services/mocks/mocks";
import { getQuotes } from "../../../services/apicalls/getcall";
import {
  BackToTopButton,
  BackToTopSection,
  BackToTopText,
  BottomBar,
  BottomText,
  BrandDescription,
  BrandName,
  BrandSection,
  ContentContainer,
  CopyrightText,
  FooterContainer,
  FooterSection,
  FooterWrapper,
  HeroQuoteSection,
  JobTitle,
  MainGrid,
  QuickLinkItem,
  QuickLinksContainer,
  QuoteText,
  SectionTitle,
  SocialLink,
  SocialMediaGrid,
} from "./styled";
import { AnimatedBackground } from "../../../globalStyled";
import { GradientOrb } from "../../../pages/Home/styled";

const Footer = () => {
  const [quotes, setQuotes] = useState("");

  useEffect(() => {
    getQuotes()
      .then((res) => {
        console.log(res.data[0]?.content);
        setQuotes(res.data[0]?.content);
      })
      .catch((err) => {
        console.error("Error while fetching quotes:", err);
        setQuotes(DEFAULT_QUOTES);
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <AnimatedBackground>
          <GradientOrb className="orb-1" />
          <GradientOrb className="orb-2" />
          <GradientOrb className="orb-3" />
        </AnimatedBackground>
        <ContentContainer>
          <HeroQuoteSection>
            <QuoteText>{quotes || DEFAULT_QUOTES}</QuoteText>
          </HeroQuoteSection>

          <MainGrid>
            <BrandSection delay="0s">
              <BrandName>{MADHURENDRA_NATH_TIWARI}</BrandName>
              <JobTitle>{SOFTWARE_ENGINEER}</JobTitle>
              <BrandDescription>
                Crafting digital experiences with passion and precision.
                Transforming ideas into elegant, functional solutions that make
                a difference.
              </BrandDescription>
              <CopyrightText>
                © {COPYRIGHT} All rights reserved
              </CopyrightText>
            </BrandSection>

            <FooterSection delay="0.1s">
              <SectionTitle>{SOCIAL_LINKS}</SectionTitle>
              <SocialMediaGrid>
                {socialLinks.map((linkItem, index) => (
                  <SocialLink
                    key={index}
                    href={linkItem.url}
                    target={BLANK}
                    aria-label={`Visit our ${
                      linkItem.label.toUpperCase() || "social media"
                    }`}
                  >
                    <FontAwesomeIcon icon={linkItem.icon} />
                  </SocialLink>
                ))}
              </SocialMediaGrid>
            </FooterSection>

            <FooterSection delay="0.2s">
              <SectionTitle>{QUICK_LINKS}</SectionTitle>
              <QuickLinksContainer>
                {quickLinks.map((link, index) => (
                  <QuickLinkItem key={index}>
                    <Link
                      to={link.toLowerCase()}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {link}
                    </Link>
                  </QuickLinkItem>
                ))}
              </QuickLinksContainer>
            </FooterSection>

            <FooterSection delay="0.3s">
              <SectionTitle>{OTHERS}</SectionTitle>
              <BackToTopSection>
                <BackToTopButton onClick={scrollToTop} aria-label="Back to top">
                  <FontAwesomeIcon icon={faChevronUp} />
                </BackToTopButton>
                <BackToTopText>Back to Top</BackToTopText>
              </BackToTopSection>
            </FooterSection>
          </MainGrid>

          <BottomBar>
            <BottomText>
              Made with ❤️ by <span>{DEVLOPER_NAME}</span> | Powered by React &
              Styled Components
            </BottomText>
          </BottomBar>
        </ContentContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
