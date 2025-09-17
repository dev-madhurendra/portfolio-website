import { CardContent } from "@mui/material";
import React, { useState } from "react";
import { CardHeader, CardFooter } from "react-bootstrap";
import {
  EducationSection,
  Header,
  Title,
  Subtitle,
  EducationGrid,
  EducationCard,
  IconWrapper,
  Duration,
  Degree,
  Field,
  InstitutionName,
  Grade,
  ExpandedContent,
  SectionTitle,
  AchievementsList,
  Achievement,
  AchievementIcon,
  CoursesList,
  ViewMore,
  TimelineContainer,
  TimelineTitle,
  Timeline,
  TimelineItem,
  TimelineMarker,
  TimelineContent,
  TimelineYear,
  TimelineDegree,
  TimelineInstitution,
  Location,
  Container,
  Section,
  Icon,
  Institution
} from "./styled";
import MyChip from "../../components/atoms/Chip";
import { GradientText, MainTitle, StyledBadgeIcon, TitleBadge } from "../../globalStyled";


const Education = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Applications",
      field: "Computer Science & Engineering",
      institution: "Indian Institute of Technology",
      location: "Delhi, India",
      duration: "2020 - 2022",
      grade: "CGPA: 8.7/10",
      type: "Masters",
      achievements: [
        "Specialized in Full-Stack Development",
        "Research in Machine Learning & AI",
        "Lead Developer - University Tech Club",
        "Published 2 research papers"
      ],
      courses: ["Advanced Algorithms", "System Design", "Database Management", "Web Technologies"],
      icon: "🎓"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications",
      field: "Computer Applications",
      institution: "Delhi University",
      location: "New Delhi, India",
      duration: "2017 - 2020",
      grade: "Percentage: 85.4%",
      type: "Bachelors",
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "President - Computer Science Society",
        "Winner - Inter-college Hackathon 2019",
        "Merit Scholarship Recipient"
      ],
      courses: ["Data Structures", "Programming Languages", "Software Engineering", "Mathematics"],
      icon: "🏆"
    },
    {
      id: 3,
      degree: "Higher Secondary Education",
      field: "Science (PCM + Computer)",
      institution: "Delhi Public School",
      location: "Delhi, India",
      duration: "2015 - 2017",
      grade: "Percentage: 92.8%",
      type: "School",
      achievements: [
        "School Topper in Computer Science",
        "National Level Olympiad Qualifier",
        "Head Boy - Student Council",
        "Best Student Award 2017"
      ],
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      icon: "📚"
    }
  ];

  return (
    <EducationSection id="education">
      <Container>
        <Header>
          <TitleBadge><StyledBadgeIcon>🎓</StyledBadgeIcon>Education</TitleBadge>
          <MainTitle>Learning<GradientText>& growth</GradientText></MainTitle>
          <Subtitle>My academic journey and continuous learning path</Subtitle>
        </Header>

        <EducationGrid>
          {educationData.map((edu, index) => (
            <EducationCard
              key={edu.id}
              isActive={activeCard === edu.id}
              onMouseEnter={() => setActiveCard(edu.id)}
              onMouseLeave={() => setActiveCard(null)}
              delay={index * 0.1}
            >
              <CardHeader>
                <IconWrapper>
                  <Icon>{edu.icon}</Icon>
                  <MyChip label={edu.type} />
                </IconWrapper>
                <Duration>{edu.duration}</Duration>
              </CardHeader>

              <CardContent>
                <Degree>{edu.degree}</Degree>
                <Field>{edu.field}</Field>
                <Institution>
                  <InstitutionName>{edu.institution}</InstitutionName>
                  <Location>{edu.location}</Location>
                </Institution>
                <Grade>{edu.grade}</Grade>
              </CardContent>

              <ExpandedContent isActive={activeCard === edu.id}>
                <Section>
                  <SectionTitle>Key Achievements</SectionTitle>
                  <AchievementsList>
                    {edu.achievements.map((achievement, idx) => (
                      <Achievement key={idx}>
                        <AchievementIcon>✨</AchievementIcon>
                        {achievement}
                      </Achievement>
                    ))}
                  </AchievementsList>
                </Section>

                <Section>
                  <SectionTitle>Core Subjects</SectionTitle>
                  <CoursesList>
                    {edu.courses.map((course, idx) => (
                      <MyChip key={idx} label={course} />
                    ))}
                  </CoursesList>
                </Section>
              </ExpandedContent>

              <CardFooter>
                <ViewMore isActive={activeCard === edu.id}>
                  {activeCard === edu.id ? 'Hover to explore' : 'Hover for details'}
                </ViewMore>
              </CardFooter>
            </EducationCard>
          ))}
        </EducationGrid>

        <TimelineContainer>
          <TimelineTitle>Educational Timeline</TimelineTitle>
          <Timeline>
            {educationData.map((edu, index) => (
              <TimelineItem key={edu.id} index={index}>
                <TimelineMarker />
                <TimelineContent>
                  <TimelineYear>{edu.duration.split(' - ')[0]}</TimelineYear>
                  <TimelineDegree>{edu.degree}</TimelineDegree>
                  <TimelineInstitution>{edu.institution}</TimelineInstitution>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineContainer>
      </Container>
    </EducationSection>
  );
};
export default Education;
