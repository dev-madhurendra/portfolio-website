import styled, { css } from "styled-components";
import { fadeInUp, float } from "../../../globalStyled";

export const SkillTag = styled.div<{ $isVisible: boolean; $delay?: string }>`
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

export const SkillIcon = styled.span`
  font-size: 1rem;
`

export const SkillName = styled.span`
  color: hsl(var(--foreground));
  transition: color 0.3s ease;
`

export const SkillLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

