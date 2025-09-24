import React, { useEffect, useState } from "react";
import {
  EducationSection,
  Header,
  Subtitle,
  EducationContainer,
  EducationCard,
  CardTop,
  EducationBadge,
  CardMain,
  InstitutionInfo,
  InstitutionName,
  Location,
  DegreeInfo,
  Degree,
  Field,
  Grade,
  DetailsSection,
  DetailRow,
  DetailLabel,
  DetailContent,
  AchievementGrid,
  AchievementItem,
  SkillsContainer,
  SkillChip,
  TimelineSection,
  TimelineHeader,
  TimelineWrapper,
  TimelineLine,
  TimelineItem,
  TimelineMarker,
  TimelineCard,
  TimelineIcon,
  TimelineContent,
  TimelineYear,
  TimelineTitle,
  TimelineSubtitle,
  Container,
  StatsGrid,
  StatCard,
  StatNumber,
  StatLabel,
  ViewToggle,
  GridContainer,
  ViewMore,
  CardFooter,
} from "./styled";
import MyChip from "../../components/atoms/Chip";
import {
  AnimatedBackground,
  FloatingOrb,
  GradientText,
  MainTitle,
  StyledBadgeIcon,
  TitleBadge,
} from "../../globalStyled";
import { useAnimateOnScroll } from "../../hook/useAnimateOnScroll";
import { EducationData } from "./interfaces";
import { educationData } from "../../services/mocks/mocks";

const Education = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("timeline");

  const { ref, isVisible } = useAnimateOnScroll(educationData, {
    threshold: [0.08],
  });

  const toggleCard = (id: number) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  return (
    <EducationSection id="education" ref={ref}>
      <AnimatedBackground>
        <FloatingOrb className="orb-1" />
        <FloatingOrb className="orb-2" />
        <FloatingOrb className="orb-3" />
      </AnimatedBackground>

      <Container>
        <Header>
          <TitleBadge>
            <StyledBadgeIcon>🎓</StyledBadgeIcon>
            Education
          </TitleBadge>
          <MainTitle>
            Academic <GradientText>Journey</GradientText>
          </MainTitle>
          <Subtitle>
            Building knowledge through structured learning and continuous growth
          </Subtitle>
        </Header>

        <StatsGrid>
          <StatCard className={isVisible ? "visible" : ""}>
            <StatNumber>{educationData?.length}</StatNumber>
            <StatLabel>Institutions</StatLabel>
          </StatCard>
          <StatCard className={isVisible ? "visible" : ""}>
            <StatNumber>{"4.2"}</StatNumber>
            <StatLabel>Average GPA</StatLabel>
          </StatCard>
          <StatCard className={isVisible ? "visible" : ""}>
            <StatNumber>
              {educationData?.reduce((acc, edu) => acc + edu.courses.length, 0)}
              +
            </StatNumber>
            <StatLabel>Subjects Studied</StatLabel>
          </StatCard>
        </StatsGrid>

        <ViewToggle>
          <button
            className={viewMode === "grid" ? "active" : ""}
            onClick={() => setViewMode("grid")}
          >
            📊 Card View
          </button>
          <button
            className={viewMode === "timeline" ? "active" : ""}
            onClick={() => setViewMode("timeline")}
          >
            📅 Timeline View
          </button>
        </ViewToggle>

        {viewMode === "grid" ? (
          <GridContainer>
            <EducationContainer>
              {educationData?.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  delay={index * 0.1}
                  onClick={() => toggleCard(edu.id)}
                  isExpanded={expandedCards.includes(edu.id)}
                  className={isVisible ? "visible" : ""}
                >
                  <CardFooter>
                    <ViewMore isActive={expandedCards.includes(edu.id)}>
                      {expandedCards.includes(edu.id)
                        ? "Click to explore"
                        : "Click for details"}
                    </ViewMore>
                  </CardFooter>
                  <CardTop>
                    <MyChip label={edu.icon + " " + edu.type} />
                  </CardTop>

                  <CardMain>
                    <InstitutionInfo>
                      <InstitutionName>{edu.institution}</InstitutionName>
                      <Location>📍 {edu.location}</Location>
                    </InstitutionInfo>

                    <DegreeInfo>
                      <Degree>{edu.degree}</Degree>
                      <Field>{edu.field}</Field>
                      <Grade>{edu.grade}</Grade>
                    </DegreeInfo>
                  </CardMain>

                  <DetailsSection isExpanded={expandedCards.includes(edu.id)}>
                    <DetailRow>
                      <DetailLabel>🏆 Key Achievements</DetailLabel>
                      <DetailContent>
                        <AchievementGrid>
                          {edu.achievements.map((achievement, idx) => (
                            <AchievementItem key={idx}>
                              <span className="bullet">•</span>
                              <span>{achievement}</span>
                            </AchievementItem>
                          ))}
                        </AchievementGrid>
                      </DetailContent>
                    </DetailRow>

                    <DetailRow>
                      <DetailLabel>📚 Core Subjects</DetailLabel>
                      <DetailContent>
                        <SkillsContainer>
                          {edu.courses.map((course, idx) => (
                            <SkillChip key={idx}>{course}</SkillChip>
                          ))}
                        </SkillsContainer>
                      </DetailContent>
                    </DetailRow>
                  </DetailsSection>
                </EducationCard>
              ))}
            </EducationContainer>
          </GridContainer>
        ) : (
          <TimelineSection>
            <TimelineHeader>📅 Educational Timeline</TimelineHeader>
            <TimelineWrapper>
              <TimelineLine />
              {educationData?.map((edu, index) => (
                <TimelineItem
                  key={edu.id}
                  index={index}
                  delay={index * 0.15}
                  className={isVisible ? "visible" : ""}
                >
                  <TimelineMarker />
                  <TimelineCard>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        marginBottom: "12px",
                      }}
                    >
                      <TimelineIcon>{edu.icon}</TimelineIcon>
                      <EducationBadge type={edu.type}>
                        <span className="text">{edu.type}</span>
                      </EducationBadge>
                    </div>
                    <TimelineContent>
                      <TimelineYear>{edu.duration}</TimelineYear>
                      <TimelineTitle>{edu.degree}</TimelineTitle>
                      <TimelineSubtitle>{edu.field}</TimelineSubtitle>
                      <InstitutionName>{edu.institution}</InstitutionName>
                      <Location>📍 {edu.location}</Location>
                      <Grade>{edu.grade}</Grade>
                    </TimelineContent>
                  </TimelineCard>
                </TimelineItem>
              ))}
            </TimelineWrapper>
          </TimelineSection>
        )}
      </Container>
    </EducationSection>
  );
};

export default Education;
