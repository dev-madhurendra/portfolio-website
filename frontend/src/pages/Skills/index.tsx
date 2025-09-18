import React from "react";
import {
  SkillsContainer,
  HeaderSection,
  MainTitle,
  GradientText,
  ExpertiseSection,
  SectionTitle,
  ExpertiseGrid,
  ExpertiseCard,
  ExpertiseIcon,
  ExpertiseTitle,
  ExpertiseLevel,
  ProgressContainer,
  TechList,
  TechTag,
  StatsSection,
  ProgressBar,
  SkillsSection,
} from "./styled";
import SkillsPageSection from "../../components/organisms/SkillSection";
import {
  StyledBadgeIcon,
  Subtitle,
  TitleBadge,
} from "../../globalStyled";
import { expertiseLevels, stats } from "../../services/mocks/mocks";
import { useAnimateOnScroll } from "../../hook/useAnimateOnScroll";
import AnimatedStatCard from "../../components/atoms/AnimatedStatCard";
import FloatingIcons from "../../components/atoms/FloatingIconAnimation";

const Skills = () => {
  const { ref, isVisible } = useAnimateOnScroll({ threshold: [0.1, 0.4] });

  return (
    <SkillsSection id="skill" ref={ref}>
      <FloatingIcons />
      <SkillsContainer>
        <HeaderSection delay="0.2s">
          <TitleBadge>
            <StyledBadgeIcon>⚡</StyledBadgeIcon>
            Technical Expertise
          </TitleBadge>

          <MainTitle>
            Skills That <GradientText>Drive Innovation</GradientText>
          </MainTitle>

          <Subtitle>
            A comprehensive arsenal of modern technologies and frameworks,
            constantly evolving to stay at the forefront of development
          </Subtitle>
        </HeaderSection>

        <SkillsPageSection isVisible={isVisible} />

        <ExpertiseSection delay="0.8s">
          <SectionTitle>Expertise Levels</SectionTitle>

          <ExpertiseGrid>
            {expertiseLevels.map((expertise, index) => {
              const IconComponent = expertise.icon;
              return (
                <ExpertiseCard
                  key={expertise.title}
                  delay={`${0.2 + index * 0.1}s`}
                  className={isVisible ? "visible" : ""}
                >
                  <ExpertiseIcon>
                    <IconComponent />
                  </ExpertiseIcon>

                  <ExpertiseTitle>{expertise.title}</ExpertiseTitle>
                  <ExpertiseLevel>{expertise.level} Proficiency</ExpertiseLevel>

                  <ProgressContainer>
                    <ProgressBar
                      width={expertise.level}
                      delay={`${1.5 + index * 0.2}s`}
                    />
                  </ProgressContainer>

                  <TechList>
                    {expertise.technologies.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </TechList>
                </ExpertiseCard>
              );
            })}
          </ExpertiseGrid>
        </ExpertiseSection>

        <StatsSection delay="1.2s">
          {stats.map((stat, index) => (
            <AnimatedStatCard
              key={stat.label}
              stat={stat}
              index={index}
              isIcon={false}
              isVisible={isVisible}
            />
          ))}
        </StatsSection>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
