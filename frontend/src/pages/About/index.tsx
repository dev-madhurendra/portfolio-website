import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faAward } from "@fortawesome/free-solid-svg-icons";
import {
  AboutContainer,
  AboutContent,
  SectionHeader,
  AboutGrid,
  LeftColumn,
  RightColumn,
  AboutText,
  HighlightText,
  StatsGrid,
  CategoryTitle,
  PersonalSection,
  PersonalGrid,
  PersonalCard,
  PersonalIcon,
  PersonalTitle,
  PersonalDesc,
  CTASection,
  CTAText,
  CTAButtons,
  PrimaryButton,
  ChipRow,
  ChipsContainer,
  WhatIDoSection,
} from "./styled";
import AboutSectionProfile from "../../components/molecules/AboutSectionProfile";
import { Code } from "lucide-react";
import MyChip from "../../components/atoms/Chip";
import { aboutData, chipData, personalTraits } from "../../services/mocks/mocks";
import {
  AnimatedBackground,
  FloatingOrb,
  GradientText,
  MainTitle,
  StyledBadgeIcon,
  Subtitle,
  TitleBadge,
} from "../../globalStyled";
import { useAnimateOnScroll } from "../../hook/useAnimateOnScroll";
import AnimatedStatCard from "../../components/atoms/AnimatedStatCard";

const About = () => {

  const { ref, isVisible } = useAnimateOnScroll(aboutData, {
    threshold: [0.2],
  });

  return (
    <AboutContainer id="about" ref={ref}>
      <AnimatedBackground>
        <FloatingOrb className="orb-1" />
        <FloatingOrb className="orb-2" />
        <FloatingOrb className="orb-3" />
      </AnimatedBackground>

      <AboutContent>
        <SectionHeader>
          <TitleBadge>
            <StyledBadgeIcon>🧑‍💻</StyledBadgeIcon>
            About Me
          </TitleBadge>

          <MainTitle>
            Who I Am <GradientText>Beyond Code</GradientText>
          </MainTitle>
          <Subtitle isVisible={isVisible}>
            {aboutData?.shortDescription}
          </Subtitle>
        </SectionHeader>

        <AboutGrid>
          <LeftColumn isVisible={isVisible}>
            "
            <AboutSectionProfile className={isVisible ? "visible" : ""} />
            <WhatIDoSection className={isVisible ? "visible" : ""}>
              <ChipsContainer>
                {Array.from({ length: 3 }).map((_, rowIndex) => {
                  const chipsPerRow = 7;
                  const start = rowIndex * chipsPerRow;
                  const row = chipData.slice(start, start + chipsPerRow);

                  return (
                    <ChipRow
                      key={rowIndex}
                      duration={30 + rowIndex * 5}
                      delay={rowIndex * 5}
                      style={{ top: `${rowIndex * 60}px` }}
                    >
                      {[...row, ...row].map((chip, chipIndex) => {
                        const IconComponent = chip.icon || Code;
                        return (
                          <MyChip
                            key={chipIndex}
                            label={chip.text}
                            avatar={<IconComponent />}
                          />
                        );
                      })}
                    </ChipRow>
                  );
                })}
              </ChipsContainer>
            </WhatIDoSection>
          </LeftColumn>

          <RightColumn isVisible={isVisible}>
            <AboutText>
              I'm a{" "}
              <HighlightText>passionate full-stack developer</HighlightText>{" "}
              with over 3 years of experience creating digital solutions that
              make a difference. My journey in tech started with a curiosity
              about how things work, and has evolved into a deep love for
              building scalable, user-centric applications.
            </AboutText>

            <AboutText>
              I specialize in{" "}
              <HighlightText>modern web technologies</HighlightText> including
              React, Node.js, and cloud platforms. What sets me apart is my
              attention to detail, commitment to clean code, and ability to
              translate complex requirements into intuitive user experiences.
            </AboutText>

            <StatsGrid>
              <StatsGrid>
                {aboutData?.stats.map((stat, index) => (
                  <AnimatedStatCard
                    stat={stat}
                    isIcon={false}
                    isVisible={isVisible}
                    index={index}
                  />
                ))}
              </StatsGrid>
            </StatsGrid>
          </RightColumn>
        </AboutGrid>

        <PersonalSection isVisible={isVisible}>
          <CategoryTitle>
            <FontAwesomeIcon icon={faAward} />
            What Makes Me Unique
          </CategoryTitle>
          <PersonalGrid>
            {personalTraits.map((trait, index) => (
              <PersonalCard
                key={index}
                delay={index * 150}
                className={isVisible ? "visible" : ""}
              >
                <PersonalIcon>
                  <FontAwesomeIcon icon={trait.icon} />
                </PersonalIcon>
                <PersonalTitle>{trait.title}</PersonalTitle>
                <PersonalDesc>{trait.description}</PersonalDesc>
              </PersonalCard>
            ))}
          </PersonalGrid>
        </PersonalSection>

        <CTASection isVisible={isVisible}>
          <CTAText>
            <h3>Ready to work together?</h3>
            <p>Let's create something amazing that makes a real impact.</p>
          </CTAText>
          <CTAButtons>
            <PrimaryButton href="#contact">
              <FontAwesomeIcon icon={faRocket} />
              Let's Talk
            </PrimaryButton>
          </CTAButtons>
        </CTASection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
