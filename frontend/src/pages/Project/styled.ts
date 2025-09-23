import styled from "styled-components";
import { slideInFromBottom } from "./../../globalStyled"; 

export const StyledBadge = styled.span<{ variant?: "primary" | "secondary" }>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s ease;

  ${({ variant, theme }) =>
    variant === "secondary"
      ? `
        background: ${theme.colors.backgroundSecondary};
        color: ${theme.colors.textSecondary};
        border: 1px solid ${theme.colors.border};
        
        &:hover {
          background: ${theme.colors.primaryLight};
          color: ${theme.colors.primary};
        }
      `
      : `
        background: ${theme.colors.primaryLight};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
      `}
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const StyledButton = styled.button<{
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  disabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid transparent;

  ${({ size }) => {
    switch (size) {
      case "sm":
        return `
          padding: 0.375rem 0.75rem;
          font-size: 0.875rem;
        `;
      case "lg":
        return `
          padding: 0.75rem 2rem;
          font-size: 1rem;
        `;
      default:
        return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
    }
  }}

  ${({ variant, theme, disabled }) => {
    if (disabled) {
      return `
        opacity: 0.5;
        cursor: not-allowed;
        background: ${theme.colors.backgroundSecondary};
        color: ${theme.colors.textLight};
      `;
    }

    switch (variant) {
      case "outline":
        return `
          background: transparent;
          color: ${theme.colors.text};
          border-color: ${theme.colors.border};
          
          &:hover {
            background: ${theme.colors.backgroundSecondary};
            border-color: ${theme.colors.primary};
          }
        `;
      case "ghost":
        return `
          background: transparent;
          color: ${theme.colors.textSecondary};
          
          &:hover {
            background: ${theme.colors.backgroundSecondary};
            color: ${theme.colors.text};
          }
        `;
      default:
        return `
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
          
          &:hover {
            background: ${theme.colors.primaryDark};
            transform: translateY(-1px);
          }
        `;
    }
  }}
`;

export const SearchContainer = styled.div`
  position: relative;
  flex: 1;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textLight};
  pointer-events: none;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const FilterText = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SearchAndFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const NoResultsContainer = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

export const NoResultsText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

export const PaginationNumbers = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const IconButton = styled(StyledButton)`
  width: 2rem;
  height: 2rem;
  padding: 0;
`;

export const ProjectLinksContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ProjectsContainer = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.gradients.hero};
  padding: 5rem 1rem;

  @media (min-width: 640px) {
    padding: 5rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 2rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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
`;

export const MainTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  text-wrap: balance;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

export const GradientText = styled.span`
  background: ${({ theme }) => theme.gradients.accent};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

export const HeaderDescription = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 48rem;
  margin: 0 auto;
  text-wrap: pretty;
`;

export const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
`;

export const CategoryButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
  border: 1px solid;
  font-weight: 500;
  cursor: pointer;

  ${({ active, theme }) =>
    active
      ? `
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
        border-color: ${theme.colors.primary};
        box-shadow: ${theme.shadows.glow};
      `
      : `
        background: ${theme.colors.cardBg};
        color: ${theme.colors.textSecondary};
        border-color: ${theme.colors.border};
        
        &:hover {
          background: ${theme.colors.backgroundSecondary};
          color: ${theme.colors.primary};
        }
      `}
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProjectsGrid = styled.div<{ featured?: boolean }>`
  display: grid;
  gap: 2rem;

  ${({ featured }) =>
    featured
      ? `
        @media (min-width: 1024px) {
          grid-template-columns: repeat(2, 1fr);
        }
      `
      : `
        @media (min-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
        }
        
        @media (min-width: 1024px) {
          grid-template-columns: repeat(3, 1fr);
        }
      `}
`;

export const ProjectCard = styled.div<{ featured?: boolean }>`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.cardBg};
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ featured }) => (featured ? "1.5rem" : "1rem")};
  box-shadow: ${({ theme, featured }) =>
    featured ? theme.shadows.cardHover : theme.shadows.card};
  transition: all 0.3s ease;
  &.visible {
    animation: ${slideInFromBottom} 2s ease-in-out;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }
`;

export const ProjectImage = styled.div<{ featured?: boolean }>`
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: ${({ featured }) =>
    featured ? "1.5rem 1.5rem 0 0" : "1rem 1rem 0 0"};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(${({ featured }) => (featured ? "1.1" : "1.05")});
  }
`;

export const ProjectContent = styled.div<{ featured?: boolean }>`
  padding: ${({ featured }) => (featured ? "2rem" : "1.5rem")};
`;

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const ProjectTitle = styled.h3<{ featured?: boolean }>`
  font-size: ${({ featured }) => (featured ? "1.5rem" : "1.125rem")};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;

  ${ProjectCard}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  text-wrap: pretty;
  line-height: 1.6;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const TechBadge = styled.span`
  padding: 0.25rem 0.75rem;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.textLight};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const HoverIndicator = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.colors.cardBg};
  backdrop-filter: blur(12px);
  border-radius: 9999px;
  padding: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;
