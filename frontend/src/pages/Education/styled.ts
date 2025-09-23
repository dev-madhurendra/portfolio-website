import { styled, css } from "styled-components";
import { slideUp, fadeIn, slideInFromLeft, fadeInRight, slideInFromBottom } from "../../globalStyled";

export const EducationSection = styled.section`
  min-height: 100vh;
  padding: 80px 0;
  background: ${({ theme }) => theme.gradients.hero};
  position: relative;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  animation: ${slideUp} 0.6s ease-out;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 20px auto 0;
  line-height: 1.6;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
  animation: ${slideUp} 0.6s ease-out 0.2s both;
`;

export const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  &.visible {
    animation: ${fadeInRight} 1s forwards;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.card};
  }
`;

export const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  background: ${({ theme }) => theme.gradients.accent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
`;

export const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ViewToggle = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
  animation: ${slideUp} 0.6s ease-out 0.3s both;

  button {
    padding: 12px 24px;
    border: 2px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.cardBg};
    color: ${({ theme }) => theme.colors.textSecondary};
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      background: ${({ theme }) => theme.colors.primary}10;
      border-color: ${({ theme }) => theme.colors.primary}50;
    }

    &.active {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    button {
      width: 200px;
    }
  }
`;

export const GridContainer = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
`;

export const EducationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const EducationCard = styled.div<{ delay: number; isExpanded: boolean }>`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 0;
  overflow: hidden;
  min-height: 380px;
  cursor: pointer;
  transition: all 0.3s ease;

  &.visible {
    animation: ${slideInFromLeft} 2s ${({ delay }) => delay}s forwards;
  }

  border-color: ${({ isExpanded, theme }) =>
    isExpanded ? theme.colors.primary : theme.colors.border};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    border-color: ${({ theme }) => theme.colors.primary}60;
  }
`;

export const CardTop = styled.div`
  padding: 24px 24px 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border}20;
`;

export const EducationBadge = styled.div<{ type: string }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 8px;

  background: ${({ theme, type }) => {
    switch (type.toLowerCase()) {
      case "masters":
        return `${theme.colors.primary}15`;
      case "bachelors":
        return `${theme.colors.tertiary}15`;
      case "school":
        return `${theme.colors.accent}15`;
      default:
        return `${theme.colors.secondary}15`;
    }
  }};

  color: ${({ theme, type }) => {
    switch (type.toLowerCase()) {
      case "masters":
        return theme.colors.primary;
      case "bachelors":
        return theme.colors.tertiary;
      case "school":
        return theme.colors.accent;
      default:
        return theme.colors.secondary;
    }
  }};

  .icon {
    font-size: 1.2rem;
  }
`;

export const Duration = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
`;

export const ExpandIndicator = styled.div<{ isExpanded: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: ${({ isExpanded, theme }) =>
    isExpanded ? theme.colors.primary : "transparent"};
  color: ${({ isExpanded, theme }) =>
    isExpanded ? "white" : theme.colors.primary};
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  transform: ${({ isExpanded }) =>
    isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
`;

export const CardMain = styled.div`
  padding: 10px 34px 34px 34px;
`;

export const InstitutionInfo = styled.div`
  margin-bottom: 20px;
`;

export const InstitutionName = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 6px;
  line-height: 1.3;
`;

export const Location = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`;

export const DegreeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Degree = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const Field = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
`;

export const Grade = styled.div`
  display: inline-flex;
  align-items: center;
  background: ${({ theme }) => theme.gradients.subtle};
  color: ${({ theme }) => theme.colors.text};
  padding: 6px 12px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.8rem;
  align-self: flex-start;
`;

export const DetailsSection = styled.div<{ isExpanded: boolean }>`
  max-height: ${({ isExpanded }) => (isExpanded ? "600px" : "0")};
  opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.3s ease-in-out;
  margin-top: ${({ isExpanded }) => (isExpanded ? "1rem" : "0")};
  color: ${({ isExpanded }) => (isExpanded ? "red" : "inherit")};
`;

export const DetailRow = styled.div`
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border}20;

  &:last-child {
    border-bottom: none;
  }
`;

export const CardFooter = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 20px;
  padding: 0px 0px 10px 0px;
`;

export const ViewMore = styled.div<{ isActive: boolean }>`
  text-align: center;
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.primary
      : props.theme.colors.textSecondary};
  font-size: 0.85rem;
  font-weight: 600;
  transition: color 0.3s ease;
`;

export const DetailLabel = styled.h5`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DetailContent = styled.div`
  animation: ${fadeIn} 0.5s ease-out 0.2s both;
`;

export const AchievementGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AchievementItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;

  .bullet {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    margin-top: 2px;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SkillChip = styled.span`
  background: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary}25;
`;

export const TimelineSection = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
`;

export const TimelineHeader = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 40px;
`;

export const TimelineWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: ${({ theme }) => theme.gradients.accent};
  transform: translateX(-50%);
  border-radius: 2px;
  z-index: 1;

  @media (max-width: 768px) {
    left: 30px;
    transform: translateX(0);
  }
`;

export const TimelineItem = styled.div<{ index: number; delay: number }>`
  position: relative;
  margin-bottom: 60px;
  display: flex;
  z-index: 2;
  &.visible {
    animation: ${slideInFromBottom} 2s ease-out both;
  }

  ${({ index }) =>
    index % 2 === 0
      ? css`
          justify-content: flex-start;

          @media (min-width: 769px) {
            justify-content: flex-end;

            & > div:last-child {
              margin-right: 80px;
            }
          }
        `
      : css`
          justify-content: flex-start;

          @media (min-width: 769px) {
            & > div:last-child {
              margin-left: 80px;
            }
          }
        `}

  @media (max-width: 768px) {
    justify-content: flex-start;

    & > div:last-child {
      margin-left: 80px;
      margin-right: 0;
    }
  }
`;

export const TimelineMarker = styled.div`
  position: absolute;
  left: 50%;
  top: 30px;
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.primary};
  border: 4px solid white;
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}30;
  z-index: 3;

  @media (max-width: 768px) {
    left: 30px;
    transform: translateX(-50%);
  }
`;

export const TimelineCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;
  max-width: 400px;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadows.card};
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    border-color: ${({ theme }) => theme.colors.primary}40;
  }

  @media (max-width: 768px) {
    max-width: calc(100vw - 140px);
  }
`;

export const TimelineIcon = styled.div`
  font-size: 2rem;
  flex-shrink: 0;
`;

export const TimelineContent = styled.div`
  flex: 1;
`;

export const TimelineYear = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`;

export const TimelineTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;

export const TimelineSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  margin-bottom: 12px;
`;
