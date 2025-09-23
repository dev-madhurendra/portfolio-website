import styled, { css } from "styled-components";
import {
  float,
  slideInUp,
  fadeInUp,
  shimmer,
  progressLoad,
  slideInRight,
} from "../../globalStyled";

export const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: ${({ theme }) => theme.gradients.hero};
  position: relative;
  overflow: hidden;
`;

export const SkillsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

export const FloatingTechBackground = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 1;
`;

export const FloatingTechIcon = styled.div<{
  delay: string;
  size: string;
  duration: string;
  x: number;
  y: number;
}>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size || "60px"};
  height: ${({ size }) => size || "60px"};
  background: ${({ theme }) => theme.colors.cardBg};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.primary};
  animation: ${float} ${({ duration }) => duration || "6s"} ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || "0s"};
  opacity: 0.7;
  transition: all 0.3s ease;
  left: ${({ x }) => x}%;
  top: ${({ y }) => y}%;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const HeaderSection = styled.div<{
  delay: string;
}>`
  text-align: center;
  margin-bottom: 80px;
  animation: ${slideInUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: ${({ delay }) => delay || "0s"};
`;

export const BadgeIcon = styled.span`
  font-size: 1.1rem;
`;


export const GradientText = styled.span`
  background: ${({ theme }) => theme.gradients.accent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const CategoryCard = styled.div<{
  delay: number;
  gradient: string;
}>`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out;
  animation-fill-mode: both;

  ${(props) => css`
    animation-delay: ${props.delay}ms;
  `}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -200px;
    width: 200px;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: ${shimmer} 2s infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.2);

    &::before {
      opacity: 1;
    }
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
`;

export const CategoryIcon = styled.div<{
  index: number;
}>`
  font-size: 2rem;
  animation: ${float} 3s ease-in-out infinite;
  ${(props) => css`
    animation-delay: ${props.index * 0.5}s;
  `}
`;

export const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

export const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const SkillName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #e2e8f0;
`;

export const SkillLevel = styled.div<{
  level: number;
}>`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => `hsl(${props.level * 1.2}, 70%, 60%)`};
`;

export const CategoryTitle = styled.h3<{
  gradient: string;
}>`
  font-size: 1.5rem;
  font-weight: 700;
  background: ${(props) => `linear-gradient(135deg, ${props.gradient})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SkillChip = styled.div`
  background: ${({ theme }) => theme.colors.gray[100]}20;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}15;
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: ${({ theme }) => theme.colors.primary}20;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }
`;

export const ExpertiseSection = styled.div<{
  delay: string;
}>`
  margin-bottom: 80px;
  animation: ${slideInUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: ${({ delay }) => delay || "0s"};
`;

export const SectionTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 50px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${({ theme }) => theme.gradients.accent};
    border-radius: 2px;
  }
`;

export const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ExpertiseCard = styled.div<{ delay: string }>`
  background: ${({ theme }) => theme.colors.cardBg};
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;

  padding: 30px;
  text-align: center;
  position: relative;
  overflow: hidden;

  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &.visible {
    animation: ${slideInRight} 5s cubic-bezier(0.4, 0, 0.2, 1) both;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: ${({ theme }) => theme.gradients.accent};
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover},
                ${({ theme }) => theme.shadows.glow};
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1.02); /* subtle glow expansion */
  }
`;


export const ExpertiseIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 auto 20px;
  box-shadow: ${({ theme }) => theme.shadows.card};

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const ExpertiseTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

export const ExpertiseLevel = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 20px;
`;

export const ProgressContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray[100]}30;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 15px;
`;

export const ProgressBar = styled.div<{
  delay: string;
  width: string;
}>`
  height: 100%;
  background: ${({ theme }) => theme.gradients.accent};
  border-radius: 4px;
  width: 0%;
  animation: ${progressLoad} 2s ease-out forwards;
  animation-delay: ${({ delay }) => delay || "1s"};
  --progress-width: ${({ width }) => width};
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

export const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
`;

// Stats Section
export const StatsSection = styled.div<{
  delay: string;
}>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  animation: ${slideInUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: ${({ delay }) => delay || "0s"};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;