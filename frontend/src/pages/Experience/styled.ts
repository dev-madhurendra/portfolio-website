import { styled } from "styled-components";
import { fadeInRight, slideInFromLeft, slideInUp } from "../../globalStyled";

export const ExperienceContainer = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.gradients.hero};
  padding: 5rem 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.gradients.hero};
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const HeaderBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

export const SectionDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const ExperienceSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: ${({ theme }) => theme.gradients.card};
  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const SummaryItem = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const SummaryValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  background: ${({ theme }) => theme.gradients.accent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

export const SummaryLabel = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
`;

export const ExperienceTimeline = styled.div`
  display: grid;
  gap: 1.5rem;
  position: relative;
  padding-left: 2.5rem;

  &.visible {
    animation: ${fadeInRight} 2s forwards;
  }

  &::before {
    content: '';
    position: absolute;
    left: 1.2rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.gradients.subtle};
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding-left: 1.5rem;

    &::before {
      left: 0.7rem;
    }
  }
`;

export const CompanySection = styled.div`
  position: relative;
  z-index: 2;
`;

export const CompanyHeader = styled.div<{
    isExpanded?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background: ${({ theme,isExpanded }) => 
   isExpanded ? theme.gradients.card : theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({isExpanded }) =>isExpanded ? '1rem 1rem 0 0' : '1rem'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    transform: translateX(4px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }

  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.shadows.glow};

    @media (max-width: 768px) {
      left: -2rem;
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`;

export const CompanyInfo = styled.div`
  flex: 1;
`;

export const CompanyName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CompanyMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

export const CompanyStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 100%;
    justify-content: space-between;
  }
`;

export const StatBadge = styled.div<{
    variant: string
}>`
  background: ${({ theme, variant }) => {
    switch(variant) {
      case 'primary': return theme.gradients.primary;
      case 'success': return theme.gradients.tertiary;
      case 'accent': return theme.gradients.accent;
      default: return theme.gradients.subtle;
    }
  }};
  color: ${({ variant }) => variant === 'subtle' ? 'inherit' : 'white'};
  padding: 0.4rem 0.8rem;
  border-radius: 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const ExpandIcon = styled.div<{
    isExpanded?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  transition: transform 0.3s ease;
  transform: ${({isExpanded }) =>isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const CompanyContent = styled.div<{
    isExpanded?: boolean
}>`
  max-height: ${({isExpanded }) =>isExpanded ? '2000px' : '0'};
  opacity: ${({isExpanded }) =>isExpanded ? 1 : 0};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) => theme.gradients.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top: none;
  border-radius: 0 0 1rem 1rem;
`;

export const RolesContainer = styled.div`
  padding: 2rem;
  display: grid;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1rem;
  }
`;

export const RoleCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${({ theme }) => theme.gradients.accent};
    border-radius: 0 4px 4px 0;
  }
`;

export const RoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const RoleInfo = styled.div`
  flex: 1;
`;

export const RoleTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

export const RolePeriod = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  font-size: 0.9rem;
`;

export const PromotionBadge = styled.div`
  background: ${({ theme }) => theme.gradients.tertiary};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const RoleDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

export const CollapsibleSection = styled.div`
  margin-top: 1rem;
`;

export const CollapsibleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: between;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 0.9rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const CollapsibleContent = styled.div<{
    isOpen?: boolean
}>`
  max-height: ${({ isOpen }) => isOpen ? '1000px' : '0'};
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  overflow: hidden;
  transition: all 0.3s ease;
  margin-top: ${({ isOpen }) => isOpen ? '1rem' : '0'};
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.3rem 0.6rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const AchievementsList = styled.div`
  display: grid;
  gap: 0.5rem;
`;

export const AchievementItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.5rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;

  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    margin-top: 0.1rem;
  }
`;


export const ExpStatsSection = styled.div<{ delay: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  animation: ${slideInUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: ${({ delay }) => delay || "0s"};
  &.visible {
    animation: ${slideInFromLeft} 1s forwards;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;


export const StatTimelineSection = styled.div`
  display: flex;
  gap: 50px;
  align-items: flex-start;
  position: relative;

  .timeline-fixed {
    position: sticky;
    top: 120px; 
    flex-shrink: 0;
  }

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;

    .timeline-fixed {
      position: relative; // reset sticky on mobile
      top: auto;
      width: 100%;
    }
  }
`;