import React from "react"
import { useEffect, useRef, useState } from "react"
import styled, { keyframes, css } from "styled-components"

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
`

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
`

const SectionContainer = styled.section`
  padding: 5rem 1rem;
  background: linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 50%, hsl(var(--muted))/30% 100%);
  position: relative;
  overflow: hidden;
`

const BackgroundDecor = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  
  &::before {
    content: '';
    position: absolute;
    top: 5rem;
    left: 2.5rem;
    width: 8rem;
    height: 8rem;
    background: hsl(var(--primary))/5%;
    border-radius: 50%;
    filter: blur(3rem);
    animation: ${pulseGlow} 3s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 5rem;
    right: 2.5rem;
    width: 10rem;
    height: 10rem;
    background: hsl(var(--accent))/5%;
    border-radius: 50%;
    filter: blur(3rem);
    animation: ${pulseGlow} 3s ease-in-out infinite 1s;
  }
`

const ContentWrapper = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Badge = styled.div<{ $isVisible: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: hsl(var(--primary))/10%;
  border-radius: 9999px;
  color: hsl(var(--primary));
  font-weight: 500;
  font-size: 0.875rem;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  animation: ${(props) => (props.$isVisible ? css`${fadeInUp} 0.6s ease-out` : "none")};
  
  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    background: hsl(var(--primary));
    border-radius: 50%;
    animation: ${pulseGlow} 2s ease-in-out infinite;
  }
`

const Title = styled.h2<{ $isVisible: boolean; $delay?: string }>`
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 700;
  color: hsl(var(--foreground));
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  animation: ${(props) => (props.$isVisible ? css`${fadeInUp} 0.6s ease-out ${props.$delay || "0.2s"}` : "none")};
`

const Description = styled.p<{ $isVisible: boolean; $delay?: string }>`
  font-size: 1.125rem;
  color: hsl(var(--muted-foreground));
  max-width: 32rem;
  margin: 0 auto;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  animation: ${(props) => (props.$isVisible ? css`${fadeInUp} 0.6s ease-out ${props.$delay || "0.4s"}` : "none")};
`

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const CategoryContainer = styled.div<{ $isVisible: boolean; $delay?: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  animation: ${(props) => (props.$isVisible ? css`${fadeInUp} 0.6s ease-out ${props.$delay || "0s"}` : "none")};
`

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  
  &:hover h3 {
    color: hsl(var(--primary));
  }
`

const CategoryIcon = styled.div<{ $category: string }>`
  padding: 0.75rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: all 0.3s ease;
  color: white;
  font-size: 1.25rem;
  
  ${(props) => {
    switch (props.$category) {
      case "Frontend Development":
        return "background: #3b82f6;"
      case "Backend Development":
        return "background: #10b981;"
      case "Database & Cloud":
        return "background: #8b5cf6;"
      default:
        return "background: #f97316;"
    }
  }}
  
  ${CategoryHeader}:hover & {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  }
`

const CategoryInfo = styled.div`
  flex: 1;
`

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: hsl(var(--foreground));
  transition: color 0.3s ease;
`

const CategoryCount = styled.p`
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
`

const ChevronIcon = styled.div<{ $isExpanded: boolean }>`
  transform: ${(props) => (props.$isExpanded ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
  color: hsl(var(--muted-foreground));
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`

const SkillsGrid = styled.div<{ $isExpanded: boolean }>`
  max-height: ${(props) => (props.$isExpanded ? "none" : "0")};
  opacity: ${(props) => (props.$isExpanded ? 1 : 0)};
  overflow: hidden;
  transition: all 0.5s ease;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 1rem;
  background: hsl(var(--muted))/30%;
  border-radius: 0.75rem;
  border: 1px solid hsl(var(--border))/50%;
`

const SkillTag = styled.div<{ $isVisible: boolean; $delay?: string }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  animation: ${(props) => (props.$isVisible ? css`${fadeInUp} 0.6s ease-out ${props.$delay || "0s"}` : "none")};
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    border-color: hsl(var(--primary))/30%;
    
    .skill-icon {
      animation: ${float} 1s ease-in-out infinite;
    }
    
    .skill-name {
      color: hsl(var(--primary));
    }
  }
`

const SkillIcon = styled.span`
  font-size: 1rem;
`

const SkillName = styled.span`
  color: hsl(var(--foreground));
  transition: color 0.3s ease;
`

const SkillLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const LevelDot = styled.div<{ $active: boolean }>`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background: ${(props) => (props.$active ? "hsl(var(--primary))" : "hsl(var(--muted))")};
  transition: all 0.3s ease;
`

const Tooltip = styled.div`
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.25rem 0.5rem;
  background: hsl(var(--foreground));
  color: hsl(var(--background));
  font-size: 0.75rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  z-index: 10;
  animation: ${fadeInUp} 0.2s ease-out;
`

interface Skill {
  name: string
  level: number
  icon: string
}

interface SkillCategory {
  name: string
  icon: string
  color: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
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
    color: "from-green-500 to-emerald-500",
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
    color: "from-purple-500 to-pink-500",
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
    color: "from-orange-500 to-red-500",
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
]

const SkillTagComponent = ({ skill, index, isVisible }: { skill: Skill; index: number; isVisible: boolean }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <SkillTag
      $isVisible={isVisible}
      $delay={`${index * 50}ms`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SkillIcon className="skill-icon">{skill.icon}</SkillIcon>
      <SkillName className="skill-name">{skill.name}</SkillName>

      <SkillLevel>
        {[...Array(5)].map((_, i) => (
          <LevelDot key={i} $active={i < Math.floor(skill.level / 20)} />
        ))}
      </SkillLevel>

      {isHovered && <Tooltip>{skill.level}% proficiency</Tooltip>}
    </SkillTag>
  )
}

const CategorySection = ({
  category,
  index,
  isVisible,
}: { category: SkillCategory; index: number; isVisible: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <CategoryContainer $isVisible={isVisible} $delay={`${index * 200}ms`}>
      <CategoryHeader onClick={() => setIsExpanded(!isExpanded)}>
        <CategoryIcon $category={category.name}>{category.icon}</CategoryIcon>
        <CategoryInfo>
          <CategoryTitle>{category.name}</CategoryTitle>
          <CategoryCount>{category.skills.length} skills</CategoryCount>
        </CategoryInfo>
        <ChevronIcon $isExpanded={isExpanded}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </ChevronIcon>
      </CategoryHeader>

      <SkillsGrid $isExpanded={isExpanded}>
        <SkillsContainer>
          {category.skills.map((skill, skillIndex) => (
            <SkillTagComponent key={skill.name} skill={skill} index={skillIndex} isVisible={isVisible && isExpanded} />
          ))}
        </SkillsContainer>
      </SkillsGrid>
    </CategoryContainer>
  )
}

export default function SkillsPageSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <SectionContainer ref={sectionRef}>
      <BackgroundDecor />

      <ContentWrapper>
        <CategoriesContainer>
          {skillCategories.map((category, index) => (
            <CategorySection key={category.name} category={category} index={index} isVisible={isVisible} />
          ))}
        </CategoriesContainer>
      </ContentWrapper>
    </SectionContainer>
  )
}
