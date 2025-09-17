import { styled } from "styled-components";


export const StyledBadgeIcon = styled.span`
  font-size: 1.1rem;
`;

export const TitleBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const MainTitle = styled.h2`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const GradientText = styled.span`
  background: ${({ theme }) => theme.gradients.accent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p<{
    isVisible?: boolean
}>`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;