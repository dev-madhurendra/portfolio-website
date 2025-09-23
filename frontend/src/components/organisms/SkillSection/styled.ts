
import styled, { css } from "styled-components";
import { fadeInUp, pulseGlow } from "../../../globalStyled";

export const SectionContainer = styled.section`
  padding: 5rem 1rem;
  position: relative;
  overflow: hidden;
`;

export const BackgroundDecor = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    top: 5rem;
    left: 2.5rem;
    width: 8rem;
    height: 8rem;
    background: ${({ theme }) => `${theme.colors.primary}15`};
    border-radius: 50%;
    filter: blur(3rem);
    animation: ${pulseGlow} 3s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 5rem;
    right: 2.5rem;
    width: 10rem;
    height: 10rem;
    background: ${({ theme }) => `${theme.colors.accent}15`};
    border-radius: 50%;
    filter: blur(3rem);
    animation: ${pulseGlow} 3s ease-in-out infinite 1s;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Badge = styled.div<{ $isVisible: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => `${theme.colors.primary}15`};
  border-radius: 9999px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  font-size: 0.875rem;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  animation: ${(props) =>
    props.$isVisible
      ? css`
          ${fadeInUp} 0.6s ease-out
        `
      : "none"};

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    animation: ${pulseGlow} 2s ease-in-out infinite;
  }
`;

export const Title = styled.h2<{ $isVisible: boolean; $delay?: string }>`
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  animation: ${(props) =>
    props.$isVisible
      ? css`
          ${fadeInUp} 0.6s ease-out ${props.$delay || "0.2s"}
        `
      : "none"};
`;

export const Description = styled.p<{ $isVisible: boolean; $delay?: string }>`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 32rem;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.body};
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  animation: ${(props) =>
    props.$isVisible
      ? css`
          ${fadeInUp} 0.6s ease-out ${props.$delay || "0.4s"}
        `
      : "none"};
`;

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1.5fr));
  gap: 2rem;
`;

export const CategoryContainer = styled.div<{
  $isVisible: boolean;
  $delay?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  animation: ${(props) =>
    props.$isVisible
      ? css`
          ${fadeInUp} 0.6s ease-out ${props.$delay || "0s"}
        `
      : "none"};
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.shadows.card};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-2px);
    
    h3 {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const CategoryIcon = styled.div<{ $category: string; color: string }>`
  padding: 0.75rem;
  border-radius: 0.75rem;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: all 0.3s ease;
  color: white;
  font-size: 1.25rem;
  background: ${({ color }) => color};

  ${CategoryHeader}:hover & {
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: scale(1.05);
  }
`;

export const CategoryInfo = styled.div`
  flex: 1;
`;

export const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  transition: color 0.3s ease;
  margin: 0 0 0.25rem 0;
`;

export const CategoryCount = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.body};
  margin: 0;
`;

export const ChevronIcon = styled.div<{ $isExpanded: boolean }>`
  transform: ${(props) =>
    props.$isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.3s ease;
  color: ${({ theme }) => theme.colors.textSecondary};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const SkillsGrid = styled.div<{ $isExpanded: boolean }>`
  max-height: ${(props) => (props.$isExpanded ? "500px" : "0")};
  opacity: ${(props) => (props.$isExpanded ? 1 : 0)};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${(props) => (props.$isExpanded ? "translateY(0)" : "translateY(-10px)")};
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 1rem;
  backdrop-filter: blur(10px);
`;

export const SkillTag = styled.div<{ $level: number }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};

    .tooltip {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const LevelIndicator = styled.div`
  display: flex;
  gap: 0.125rem;
`;

export const LevelDot = styled.div<{ $active: boolean }>`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background: ${(props) =>
    props.$active 
      ? props.theme.colors.primary 
      : props.theme.colors.gray[300]};
  transition: all 0.3s ease;
`;

export const Tooltip = styled.div`
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.375rem 0.75rem;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
  white-space: nowrap;
  z-index: 20;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadows.dropdown};
  
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.text};
  }
`;