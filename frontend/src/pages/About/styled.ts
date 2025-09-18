import styled, { keyframes } from "styled-components";

const slideInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-120px) scale(0.95);
  }
  60% {
    opacity: 1;
    transform: translateX(20px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const moveChip = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;


const scaleIn = keyframes`
  from { 
    opacity: 0; 
    transform: scale(0.9); 
  }
  to { 
    opacity: 1; 
    transform: scale(1); 
  }
`;

const subtleMove = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(5px, -5px) rotate(1deg); }
  50% { transform: translate(-3px, 5px) rotate(-1deg); }
  75% { transform: translate(-5px, -3px) rotate(0.5deg); }
`;

export const AboutContainer = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 6rem 2rem;
  position: relative;
  background: ${({ theme }) => theme.gradients.backgroundRev};
  overflow: hidden;

  /* Large Desktop */
  @media (min-width: 1920px) {
    padding: 8rem 4rem;
  }

  /* Desktop */
  @media (min-width: 1440px) and (max-width: 1919px) {
    padding: 7rem 3rem;
  }

  /* Laptop */
  @media (min-width: 1025px) and (max-width: 1439px) {
    padding: 6rem 2.5rem;
  }

  /* iPad Pro & Large Tablets */
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 5rem 2rem;
  }

  /* iPad & Standard Tablets */
  @media (min-width: 601px) and (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  /* Mobile */
  @media (max-width: 600px) {
    padding: 3rem 1rem;
  }

  /* Landscape mobile */
  @media (orientation: landscape) and (max-height: 600px) {
    min-height: auto;
    padding: 3rem 1rem;
  }
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (min-width: 1920px) {
    max-width: 1400px;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (min-width: 1920px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
  }
`;

export const SectionTitle = styled.h2<{ isVisible: boolean }>`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  letter-spacing: -0.025em;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(30px)"};
  transition: all 0.6s ease-out;

  @media (min-width: 1920px) {
    font-size: clamp(3rem, 5vw, 4rem);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.75rem;
  }
`;

export const SectionSubtitle = styled.p<{ isVisible: boolean }>`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: all 0.6s ease-out 0.2s;

  @media (min-width: 1920px) {
    max-width: 700px;
    font-size: clamp(1.1rem, 2vw, 1.4rem);
  }
`;

export const HighlightText = styled.span`
  background: ${({ theme }) => theme.gradients.accent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  align-items: start;

  @media (min-width: 1920px) {
    gap: 5rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    gap: 2.5rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
    margin-bottom: 2.5rem;
  }
`;

export const LeftColumn = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(-30px)"};
  transition: all 0.8s ease-out 0.3s;
`;

export const RightColumn = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(30px)"};
  transition: all 0.8s ease-out 0.5s;

  @media (max-width: 1024px) {
    order: -1;
  }
`;

export const AboutText = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  font-weight: 400;
  text-align: justify;

  &:last-of-type {
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1920px) {
    font-size: clamp(1.1rem, 1.5vw, 1.25rem);
    margin-bottom: 2rem;

    &:last-of-type {
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;

    &:last-of-type {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    line-height: 1.7;

    &:last-of-type {
      margin-bottom: 1.5rem;
    }
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;

  @media (min-width: 1920px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const SkillsSection = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(10px);

  @media (min-width: 1920px) {
    padding: 2.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2em;
  }

  @media (min-width: 1920px) {
    font-size: clamp(1.4rem, 2vw, 1.75rem);
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
    gap: 0.5rem;
  }
`;

export const SkillCategory = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
    position: relative;
    padding-left: 1rem;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 50%;
    }
  }

  @media (min-width: 1920px) {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

export const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

export const ExperienceSection = styled.div<{ isVisible: boolean }>`
  margin-bottom: 4rem;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(30px)"};
  transition: all 0.8s ease-out 0.7s;

  .timeline {
    margin-top: 2rem;
    position: relative;
    padding-left: 2rem;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background: ${({ theme }) => theme.gradients.primary};
      border-radius: 1px;
    }
  }

  @media (min-width: 1920px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;

    .timeline {
      padding-left: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 2.5rem;

    .timeline {
      padding-left: 1rem;
    }
  }
`;

export const PersonalSection = styled.div<{ isVisible: boolean }>`
  margin-bottom: 4rem;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(30px)"};
  transition: all 0.8s ease-out 0.9s;

  @media (min-width: 1920px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
  }
`;

export const PersonalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (min-width: 1920px) {
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }

  @media (max-width: 768px) {
    gap: 1.25rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media (max-width: 480px) {
    gap: 1rem;
    grid-template-columns: 1fr;
  }
`;

export const PersonalCard = styled.div<{ delay: number }>`
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  opacity: 0;
  transform: translateY(30px);
  &.visible {
    animation: ${scaleIn} 0.6s ease-out ${({ delay }) => delay}ms forwards;
  }
  transition: all 0.4s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transition: left 0.8s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    border-color: ${({ theme }) => theme.colors.primary}30;

    &::before {
      left: 100%;
    }
  }

  @media (min-width: 1920px) {
    padding: 2.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const PersonalIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  position: relative;
  animation: ${subtleMove} 8s ease-in-out infinite;

  &::after {
    content: "";
    position: absolute;
    inset: -2px;
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: 18px;
    z-index: -1;
    opacity: 0.3;
    filter: blur(4px);
  }

  @media (min-width: 1920px) {
    width: 70px;
    height: 70px;
    font-size: 1.75rem;
    border-radius: 18px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
    margin-bottom: 1rem;
    border-radius: 14px;
  }
`;

export const PersonalTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;

  @media (min-width: 1920px) {
    font-size: 1.35rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }
`;

export const PersonalDesc = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;

  @media (min-width: 1920px) {
    font-size: 1.05rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export const CTASection = styled.div<{ isVisible: boolean }>`
  text-align: center;
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 3rem 2rem;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(30px)"};
  transition: all 0.8s ease-out 1.1s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ theme }) => theme.gradients.primary};
  }

  @media (min-width: 1920px) {
    padding: 4rem 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    border-radius: 16px;
  }
`;

export const CTAText = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(1rem, 1.5vw, 1.125rem);
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
  }

  @media (min-width: 1920px) {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 1920px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: ${({ theme }) => theme.gradients.primary};
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.card};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (min-width: 1920px) {
    padding: 1.25rem 3rem;
    font-size: 1.1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 250px;
    justify-content: center;
    padding: 0.875rem 2rem;
    font-size: 0.95rem;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);

    &::before {
      left: 0;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (min-width: 1920px) {
    padding: 1.25rem 3rem;
    font-size: 1.1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 250px;
    justify-content: center;
    padding: 0.875rem 2rem;
    font-size: 0.95rem;
  }
`;

export const WhatIDoSection = styled.div`
  margin: 4rem 0;
  overflow: hidden;
  position: relative;

  &.visible {
    animation: ${slideInFromLeft} 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  }
`;

export const WhatIDoTitle = styled.h3<{
  isVisible: boolean;
}>`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 3rem;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(30px)"};
  transition: all 0.6s ease-out;
`;

export const ChipsContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  mask: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );

  @media (max-width: 768px) {
    height: 150px;
  }
`;
export const ChipRow = styled.div<{ duration: number; delay: number }>`
  display: flex;
  gap: 1rem;
  position: absolute;
  white-space: nowrap;

  animation: ${moveChip} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
`;
