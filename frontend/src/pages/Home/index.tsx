import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faUser, faMouse } from "@fortawesome/free-solid-svg-icons";
import {
  HeroContainer,
  ButtonGroup,
  GradientOrb,
  HeroContent,
  LeftSection,
  GreetingText,
  TypedText,
  IntroText,
  PrimaryButton,
  SecondaryButton,
  SocialLinks,
  SocialIcon,
  RightSection,
  HeroImageContainer,
  HeroImage,
  FloatingElements,
  FloatingCard,
  ScrollIndicator,
  StyledFontAwesomeIcon,
} from "./styled";
import {
  floatingCards,
  greetingAttributes,
  socialLinks,
  typeAttributes,
} from "../../services/mocks/mocks";
import { getHomeContent } from "../../services/apicalls/getcall";
import { HomeContent } from "./interfaces";
import SkeletonHomeSection from "../../components/atoms/SkeletonLoader";
import { FullScreenLoader } from "../../components/atoms/SkeletonLoader/styled";
import { useAnimateOnScroll } from "../../hook/useAnimateOnScroll";

const Home = () => {
  const typedRef = useRef(null);
  const greetingRef = useRef(null);
  const [homeData, setHomeData] = useState<HomeContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { ref, isVisible } = useAnimateOnScroll(homeData);

  useEffect(() => {
    const fetchData = async () => {
      await getHomeContent()
        .then((res) => {
          setHomeData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!homeData) return;

    const typed = new Typed(
      typedRef.current,
      typeAttributes(homeData.typedRoles)
    );
    const greetingTyped = new Typed(
      greetingRef.current,
      greetingAttributes(homeData.greeting)
    );

    return () => {
      typed.destroy();
      greetingTyped.destroy();
    };
  }, [homeData]);

  if (loading)
    return (
      <HeroContainer id="home">
        <FullScreenLoader>
          <SkeletonHomeSection />
        </FullScreenLoader>
      </HeroContainer>
    );

  return (
    <HeroContainer id="home" className={isVisible ? "visible" : ""} ref={ref}>
      <GradientOrb className="orb-1" />
      <GradientOrb className="orb-2" />
      <GradientOrb className="orb-3" />

      <HeroContent>
        <LeftSection>
          <GreetingText>
            <span className="wave">👋</span>
            <span ref={greetingRef}></span>
          </GreetingText>

          <h1>
            <span className="name">{homeData?.name}</span>
            <br />
            <TypedText ref={typedRef}></TypedText>
          </h1>

          <IntroText>{homeData?.introText}</IntroText>

          <SocialLinks>
            {socialLinks.map((social, index) => (
              <SocialIcon
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
              >
                <StyledFontAwesomeIcon
                  icon={social.icon}
                  label={social.label}
                />
              </SocialIcon>
            ))}
          </SocialLinks>

          <ButtonGroup className = {isVisible ? "visible" : ""}>
            <PrimaryButton href={homeData?.hireMeLink}>
              <FontAwesomeIcon icon={faUser} />
              Hire Me
            </PrimaryButton>
            <SecondaryButton href={homeData?.resumeUrl} download>
              <FontAwesomeIcon icon={faDownload} />
              Resume
            </SecondaryButton>
          </ButtonGroup>
        </LeftSection>

        <RightSection>
          <HeroImageContainer >
            <HeroImage
              src={homeData?.imageUrl}
              className = {isVisible ? "visible" : ""}
              alt="Madhurendra Nath Tiwari - Software Engineer"
            />
          </HeroImageContainer>

          <FloatingElements>
            {floatingCards.map((card, index) => (
              <FloatingCard key={index} className={`card-${index + 1} ${isVisible ? "visible" : ""}`}>
                <div className="icon">{card.icon}</div>
                <span>{card.label}</span>
              </FloatingCard>
            ))}
          </FloatingElements>
        </RightSection>
      </HeroContent>

      <ScrollIndicator href="#about">
        <FontAwesomeIcon icon={faMouse} />
        <span>Scroll to explore</span>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Home;
