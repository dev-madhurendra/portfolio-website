import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Server,
  Database,
  Smartphone,
  Cloud,
  Zap,
  Globe,
  GitBranch,
  Settings,
  Layers,
  Cpu,
  Monitor,
  Terminal,
  Package,
} from "lucide-react";
import {
  SkillsContainer,
  FloatingTechBackground,
  FloatingTechIcon,
  HeaderSection,
  SkillsBadge,
  MainTitle,
  GradientText,
  SkillsGrid,
  CategoryHeader,
  CategoryIcon,
  CategoryTitle,
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
  StatCard,
  StatNumber,
  StatLabel,
  StatIcon,
  StyledBadgeIcon,
  ProgressBar,
  SkillsSection,
} from "./styled";
import SkillsPageSection from "../../components/organisms/SkillSection";
import { Subtitle } from "../../globalStyled";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Floating tech icons data with actual icons
  const floatingTechs = [
    { icon: Code, x: 5, y: 10, size: "70px", duration: "6s", delay: "0s" },
    { icon: Database, x: 85, y: 15, size: "60px", duration: "8s", delay: "1s" },
    { icon: Server, x: 10, y: 45, size: "65px", duration: "7s", delay: "2s" },
    {
      icon: Smartphone,
      x: 90,
      y: 40,
      size: "55px",
      duration: "9s",
      delay: "0.5s",
    },
    {
      icon: Cloud,
      x: 15,
      y: 75,
      size: "75px",
      duration: "6.5s",
      delay: "1.5s",
    },
    {
      icon: Terminal,
      x: 80,
      y: 70,
      size: "60px",
      duration: "7.5s",
      delay: "0.8s",
    },
    {
      icon: Package,
      x: 45,
      y: 5,
      size: "50px",
      duration: "8.5s",
      delay: "2.2s",
    },
    {
      icon: GitBranch,
      x: 60,
      y: 85,
      size: "65px",
      duration: "7s",
      delay: "1.2s",
    },
    {
      icon: Monitor,
      x: 25,
      y: 20,
      size: "55px",
      duration: "9s",
      delay: "0.3s",
    },
    {
      icon: Settings,
      x: 70,
      y: 25,
      size: "60px",
      duration: "6.8s",
      delay: "1.8s",
    },
    {
      icon: Globe,
      x: 35,
      y: 60,
      size: "50px",
      duration: "8.2s",
      delay: "0.7s",
    },
    {
      icon: Layers,
      x: 75,
      y: 55,
      size: "65px",
      duration: "7.3s",
      delay: "2.5s",
    },
  ];

  // Skill categories data
 const skillCategories = [
    {
      name: "Frontend Development",
      icon: "🎨",
      color: "#3b82f6, #06b6d4",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "TypeScript", level: 88, icon: "📘" },
        { name: "Vue.js", level: 85, icon: "💚" },
        { name: "Angular", level: 80, icon: "🅰️" },
        { name: "Svelte", level: 75, icon: "🧡" },
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 92, icon: "🎨" },
        { name: "Sass", level: 88, icon: "💎" },
        { name: "Tailwind", level: 90, icon: "🌊" },
      ],
    },
    {
      name: "Backend Development",
      icon: "⚙️",
      color: "#10b981, #059669",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "Java", level: 80, icon: "☕" },
        { name: "Go", level: 75, icon: "🐹" },
        { name: "PHP", level: 70, icon: "🐘" },
        { name: "Express.js", level: 88, icon: "🚀" },
        { name: "Django", level: 82, icon: "🎯" },
        { name: "Spring Boot", level: 78, icon: "🍃" },
        { name: "FastAPI", level: 80, icon: "⚡" },
        { name: "GraphQL", level: 85, icon: "📊" },
      ],
    },
    {
      name: "Database & Cloud",
      icon: "☁️",
      color: "#8b5cf6, #ec4899",
      skills: [
        { name: "PostgreSQL", level: 88, icon: "🐘" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "Redis", level: 80, icon: "🔴" },
        { name: "MySQL", level: 82, icon: "🐬" },
        { name: "AWS", level: 85, icon: "☁️" },
        { name: "Docker", level: 88, icon: "🐳" },
        { name: "Kubernetes", level: 75, icon: "⚓" },
        { name: "Firebase", level: 80, icon: "🔥" },
        { name: "Supabase", level: 85, icon: "⚡" },
        { name: "Vercel", level: 90, icon: "▲" },
      ],
    },
    {
      name: "Tools & Others",
      icon: "🛠️",
      color: "#f97316, #ef4444",
      skills: [
        { name: "Git", level: 95, icon: "📝" },
        { name: "GitHub", level: 92, icon: "🐙" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Figma", level: 85, icon: "🎨" },
        { name: "Postman", level: 88, icon: "📮" },
        { name: "Jest", level: 80, icon: "🃏" },
        { name: "Cypress", level: 75, icon: "🌲" },
        { name: "Webpack", level: 78, icon: "📦" },
        { name: "Vite", level: 85, icon: "⚡" },
        { name: "ESLint", level: 90, icon: "🔍" },
      ],
    },
  ];


  // Expertise levels data
  const expertiseLevels = [
    {
      title: "Expert Level",
      icon: Zap,
      level: "95%",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Git"],
    },
    {
      title: "Advanced Level",
      icon: Cpu,
      level: "85%",
      technologies: ["TypeScript", "Python", "AWS", "Docker", "GraphQL"],
    },
    {
      title: "Proficient Level",
      icon: Layers,
      level: "75%",
      technologies: ["React Native", "Flutter", "DevOps", "UI/UX", "Testing"],
    },
  ];

  // Stats data
  const stats = [
    { number: "25+", label: "Technologies Mastered", icon: Globe },
    { number: "100+", label: "Projects Completed", icon: Code },
    { number: "1000+", label: "Hours of Coding", icon: Zap },
    { number: "5+", label: "Years Experience", icon: GitBranch },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SkillsSection ref={sectionRef} id="skill">
      <SkillsContainer>
        {/* Floating Tech Icons Background */}
        {/* <FloatingTechBackground>
          {floatingTechs.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <FloatingTechIcon
                key={index}
                x={tech.x}
                y={tech.y}
                size={tech.size}
                duration={tech.duration}
                delay={tech.delay}
              >
                <IconComponent />
              </FloatingTechIcon>
            );
          })}
        </FloatingTechBackground> */}

        {/* Header Section */}
        <HeaderSection delay="0.2s">
          <SkillsBadge>
            <StyledBadgeIcon>⚡</StyledBadgeIcon>
            Technical Expertise
          </SkillsBadge>

          <MainTitle>
            Skills That <GradientText>Drive Innovation</GradientText>
          </MainTitle>

          <Subtitle>
            A comprehensive arsenal of modern technologies and frameworks,
            constantly evolving to stay at the forefront of development
          </Subtitle>
        </HeaderSection>

        <SkillsPageSection />

        {/* Expertise Levels */}
        <ExpertiseSection delay="0.8s">
          <SectionTitle>Expertise Levels</SectionTitle>

          <ExpertiseGrid>
            {expertiseLevels.map((expertise, index) => {
              const IconComponent = expertise.icon;
              return (
                <ExpertiseCard
                  key={expertise.title}
                  delay={`${0.2 + index * 0.1}s`}
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

        {/* Stats Section */}
        <StatsSection delay="1.2s">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <StatCard key={stat.label} delay={`${0.2 + index * 0.1}s`}>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
                <StatIcon>
                  <IconComponent />
                </StatIcon>
              </StatCard>
            );
          })}
        </StatsSection>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
