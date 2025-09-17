import { keyframes, styled, css } from "styled-components";

const slideInFromLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInFromRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const markerPop = keyframes`
  0% { transform: translateX(-50%) scale(0.4); opacity: 0; }
  80% { transform: translateX(-50%) scale(1); opacity: 1; }
  100% { transform: translateX(-50%) scale(0.8); }
`;

export const EducationSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: ${({ theme }) => theme.gradients.background};
  position: relative;
  overflow: hidden;
  animation: ${slideInUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at 20% 80%,
        ${({ theme }) => theme.colors.primary}15 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        ${({ theme }) => theme.colors.accent}15 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 40%,
        ${({ theme }) => theme.colors.tertiary}10 0%,
        transparent 50%
      );
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
  animation: ${slideInUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
`;

export const Title = styled.h2`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  background: ${({ theme }) => theme.gradients.accent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const EducationCard = styled.div<{ isActive: boolean; delay: number }>`
  background: ${({ theme }) => theme.colors.cardBg};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  padding: 30px;
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${slideInUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1)
    ${({ delay }) => delay}s both;
  overflow: hidden;
  height: ${({ isActive }) => (isActive ? "auto" : "400px")};
  min-height: ${({ isActive }) => (isActive ? "600px" : "400px")};

  &:hover {
    transform: translateY(-10px) scale(${({ isActive }) => (isActive ? "1.02" : "1")});
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Icon = styled.div`
  font-size: 2.5rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
`;

export const TypeBadge = styled.span<{ type: string }>`
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  background: ${({ theme, type }) => {
    switch (type) {
      case "Masters":
        return theme.gradients.primary;
      case "Bachelors":
        return theme.gradients.tertiary;
      case "School":
        return theme.gradients.accent;
      default:
        return theme.gradients.secondary;
    }
  }};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Duration = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
  background: ${({ theme }) => theme.colors.gray[100]}20;
  padding: 8px 16px;
  border-radius: 16px;
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
`;

export const Degree = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
  line-height: 1.3;
`;

export const Field = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  margin-bottom: 12px;
`;

export const InstitutionName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;

export const Institution = styled.div`
  margin-bottom: 12px;
`;

export const Location = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  gap: 5px;

  &::before {
    content: "📍";
    font-size: 0.8rem;
  }
`;

export const Grade = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 16px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 0.8rem;
`;

export const ExpandedContent = styled.div<{ isActive: boolean }>`
  position: relative;
  z-index: 2;
  max-height: ${(props) => (props.isActive ? "400px" : "0")};
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Section = styled.div`
  margin-bottom: 25px;
`;

export const SectionTitle = styled.h5`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    width: 4px;
    height: 20px;
    background: ${({ theme }) => theme.gradients.accent};
    border-radius: 2px;
  }
`;

export const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Achievement = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 6px 0;
`;

export const AchievementIcon = styled.span`
  font-size: 0.8rem;
`;

export const CoursesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Course = styled.span`
  background: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
`;

export const CardFooter = styled.div`
  position: relative;
  z-index: 2;
  margin-top: auto;
`;

export const ViewMore = styled.div<{ isActive: boolean }>`
  text-align: center;
  color: ${(props) => (props.isActive ? props.theme.colors.primary : props.theme.colors.textSecondary)};
  font-size: 0.85rem;
  font-weight: 600;
  transition: color 0.3s ease;
`;

export const TimelineContainer = styled.div`
  margin-top: 80px;
`;

export const TimelineTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 50px;
  animation: ${slideInUp} 0.8s ease both;
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.gradients.accent};
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

export const TimelineItem = styled.div<{ index: number }>`
  position: relative;
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  ${({ index }) =>
    index % 2 === 0
      ? css`
          justify-content: flex-start;
          animation: ${slideInFromLeft} 0.8s ease both;
          @media (min-width: 769px) {
            justify-content: flex-end;
            text-align: right;
          }
        `
      : css`
          justify-content: flex-start;
          animation: ${slideInFromRight} 0.8s ease both;
          @media (min-width: 769px) {
            justify-content: flex-start;
          }
        `}

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 50px;
  }
`;

export const TimelineMarker = styled.div`
  position: absolute;
  left: 50%;
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0 4px #fff, 0 0 0 8px rgba(37, 99, 235, 0.2);
  animation: ${markerPop} 1s cubic-bezier(0.25, 1, 0.5, 1) both infinite;

  @media (max-width: 768px) {
    left: 20px;
  }
`;


export const TimelineContent = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  backdrop-filter: blur(10px);
  padding: 20px 25px;
  border-radius: 16px;
  max-width: 350px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  animation: ${slideInUp} 0.8s ease both;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-3px);
  }
`;

export const TimelineYear = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TimelineDegree = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.text};
`;

export const TimelineInstitution = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.body};
`;
