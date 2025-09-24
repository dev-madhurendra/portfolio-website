import { styled } from "styled-components";
import {
  slideInUp,
  pulse,
  glow,
  ripple,
} from "../../../globalStyled";

export const FooterContainer = styled.footer`
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.gradients.hero};
`;

export const FooterWrapper = styled.div`
  position: relative;
  z-index: 10;
  padding: 4rem 2rem 2rem;
  min-height: 500px;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      ${({ theme }) => theme.colors.hero} 100%
    );
    z-index: -1;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
`;

export const FooterSection = styled.div<{
  delay: string;
}>`
  animation: ${slideInUp} 0.6s ease-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
  opacity: 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.gradients.primary};
    transition: width 0.8s ease;
  }

  &:hover::after {
    width: 60px;
  }
`;

export const BrandSection = styled(FooterSection)`
  &::after {
    display: none;
  }
`;

export const SectionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 2px;
    background: ${({ theme }) => theme.gradients.accent};
    border-radius: 1px;
  }
`;

export const BrandName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  font-weight: 800;
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  animation: ${pulse} 3s ease-in-out infinite;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    animation: ${glow} 2s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const JobTitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const BrandDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 0.95rem;
`;

export const CopyrightText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  margin-top: 1rem;
`;

export const SocialMediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 1rem;
  max-width: 200px;

  @media (max-width: 580px) {
    max-width: none;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    margin: 0 auto;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.gradients.card};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.border};

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    transition: all 0.4s ease;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  &:hover {
    transform: translateY(-8px) rotate(5deg) scale(1.1);
    box-shadow: 0 15px 35px rgba(37, 99, 235, 0.4);
    border-color: ${({ theme }) => theme.colors.primary};

    &::before {
      width: 100px;
      height: 100px;
    }

    svg {
      color: white;
      z-index: 2;
      position: relative;
    }
  }

  svg {
    font-size: 1.2rem;
    z-index: 2;
    position: relative;
    transition: all 0.3s ease;
  }
`;

export const QuickLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const QuickLinkItem = styled.div`
  position: relative;
  cursor: pointer;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    display: block;
    position: relative;
    transition: all 0.3s ease;
    border-left: 3px solid transparent;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: ${({ theme }) => theme.gradients.primary};
      border-radius: 10px;
      transition: width 0.3s ease;
      z-index: -1;
    }

    &:hover {
      color: white;
      transform: translateX(10px);
      border-left-color: ${({ theme }) => theme.colors.primary};

      &::before {
        width: 100%;
      }
    }
  }
`;

export const BackToTopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const BackToTopButton = styled.button`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.gradients.primary};
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transition: all 0.4s ease;
    transform: translate(-50%, -50%);
  }

  &:hover {
    transform: translateY(-10px) scale(1.1);
    box-shadow: 0 15px 40px rgba(37, 99, 235, 0.4);
    animation: ${glow} 2s ease-in-out infinite;

    &::before {
      width: 100px;
      height: 100px;
      animation: ${ripple} 0.6s ease-out;
    }
  }

  svg {
    font-size: 1.3rem;
    z-index: 2;
    position: relative;
  }
`;

export const BackToTopText = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  font-weight: 500;
`;

// Bottom Bar
export const BottomBar = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2rem 0;
  text-align: center;
  background: ${({ theme }) => theme.gradients.card};
  border-radius: 20px 20px 0 0;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.gradients.accent};
  }
`;

export const BottomText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  margin: 0;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;
