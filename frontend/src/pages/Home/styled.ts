import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  wave,
  typing,
  fadeInLeft,
  slideUp,
  float,
  sway,
  bounce,
  fadeInRight,
  pulse,
  dropBounce,
  slideInFromTop,
  slideInFromLeft,
  floatReverse,
  slideInFromBottom,
  elasticBounce,
  popRotate,
  magneticAttraction,
  glitchEntrance,
  waveRipple,
  subtleShift,
} from "../../globalStyled";

export const HeroContainer = styled.section`
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.gradients.background};
  padding: 0 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 25% 25%,
        rgba(37, 99, 235, 0.03) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 75% 75%,
        rgba(124, 58, 237, 0.03) 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  @media (min-width: 1920px) {
    padding: 0 4rem;
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    padding: 0 3rem;
  }

  @media (min-width: 1200px) and (max-width: 1439px) {
    padding: 0 2.5rem;
  }

  @media (min-width: 1025px) and (max-width: 1199px) {
    padding: 0 2rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 1.5rem;
    min-height: 100vh;
  }

  @media (min-width: 601px) and (max-width: 768px) {
    padding: 0 1.25rem;
    min-height: 100vh;
  }

  @media (min-width: 481px) and (max-width: 600px) {
    padding: 0 1rem;
    min-height: 100vh;
  }

  @media (min-width: 321px) and (max-width: 480px) {
    padding: 0 0.75rem;
    min-height: 100vh;
  }

  @media (max-width: 320px) {
    padding: 0 0.5rem;
    min-height: 100vh;
  }

  @media (max-height: 600px) {
    min-height: 600px;
  }

  @media (max-height: 500px) {
    min-height: 500px;
    padding: 0 1rem;
  }

  @media (min-width: 2560px) {
    padding: 0 6rem;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  align-items: center;
  justify-items: center;
  z-index: 2;

  @media (min-width: 1920px) {
    max-width: 1400px;
    gap: 5rem;
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    max-width: 1300px;
    gap: 4.5rem;
  }

  @media (min-width: 1200px) and (max-width: 1439px) {
    gap: 4rem;
  }

  @media (min-width: 1025px) and (max-width: 1199px) {
    gap: 3.5rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  @media (min-width: 601px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  @media (min-width: 321px) and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    text-align: center;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }

  @media (orientation: landscape) and (max-height: 500px) and (max-width: 900px) {
    gap: 1.5rem;
  }
`;

export const GreetingText = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .wave {
    font-size: 1.3rem;
    animation: ${wave} 2s ease-in-out infinite;
    transform-origin: 70% 70%;
    display: inline-block;
  }

  @media (min-width: 1920px) {
    font-size: 1.3rem;
    .wave {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    font-size: 1.2rem;
    .wave {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    justify-content: center;
    font-size: 1.05rem;
    .wave {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 601px) and (max-width: 768px) {
    justify-content: center;
    font-size: 1rem;
    .wave {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 481px) and (max-width: 600px) {
    justify-content: center;
    font-size: 0.95rem;
    .wave {
      font-size: 1.15rem;
    }
  }

  @media (min-width: 321px) and (max-width: 480px) {
    justify-content: center;
    font-size: 0.9rem;
    .wave {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 320px) {
    justify-content: center;
    font-size: 0.85rem;
    .wave {
      font-size: 1rem;
    }
  }
`;

export const TypedText = styled.span`
  color: ${({ theme }) => theme.colors.warning};
  font-weight: 600;
  position: relative;

  &::after {
    content: "|";
    animation: ${typing} 1s infinite;
    margin-left: 2px;
  }
`;

export const LeftSection = styled.div`
  animation: ${fadeInLeft} 0.8s ease-out;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.025em;

    .name {
      background: ${({ theme }) => theme.gradients.accent};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: inline-block;
      font-weight: 800;
    }
  }

  @media (min-width: 1920px) {
    h1 {
      font-size: clamp(3.5rem, 6vw, 5rem);
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    h1 {
      font-size: clamp(3rem, 5.5vw, 4.5rem);
      margin-bottom: 1.75rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    order: 2;
    text-align: center;
    h1 {
      font-size: clamp(2.25rem, 4.5vw, 3.5rem);
      margin-bottom: 1.25rem;
    }
  }

  @media (min-width: 601px) and (max-width: 768px) {
    order: 2;
    text-align: center;
    h1 {
      font-size: clamp(2rem, 4vw, 3rem);
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 481px) and (max-width: 600px) {
    order: 2;
    text-align: center;
    h1 {
      font-size: clamp(1.75rem, 3.5vw, 2.5rem);
      margin-bottom: 0.875rem;
    }
  }

  @media (min-width: 321px) and (max-width: 480px) {
    order: 2;
    text-align: center;
    h1 {
      font-size: clamp(1.5rem, 3vw, 2.25rem);
      margin-bottom: 0.75rem;
    }
  }

  @media (max-width: 320px) {
    order: 2;
    text-align: center;
    h1 {
      font-size: clamp(1.25rem, 2.5vw, 2rem);
      margin-bottom: 0.625rem;
    }
  }

  @media (orientation: landscape) and (max-height: 600px) {
    order: 1;
    text-align: left;
    h1 {
      font-size: clamp(1.5rem, 3vw, 2.5rem);
      margin-bottom: 0.75rem;
    }
  }
`;

export const IntroText = styled.p`
  font-size: 1.125rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
  max-width: 500px;
  font-weight: 400;
  text-align: justify;

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }

  @media (min-width: 1920px) {
    font-size: 1.3rem;
    max-width: 600px;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    font-size: 1.2rem;
    max-width: 550px;
    margin-bottom: 2.25rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 700px;
    margin: 0 auto 2rem;
    font-size: 1.1rem;
  }

  @media (min-width: 601px) and (max-width: 768px) {
    max-width: 600px;
    margin: 0 auto 1.75rem;
    font-size: 1.05rem;
  }

  @media (min-width: 481px) and (max-width: 600px) {
    max-width: 100%;
    margin: 0 auto 1.5rem;
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (min-width: 321px) and (max-width: 480px) {
    max-width: 100%;
    margin: 0 auto 1.25rem;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: 320px) {
    max-width: 100%;
    margin: 0 auto 1rem;
    font-size: 0.9rem;
    line-height: 1.55;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    margin-bottom: 1rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${slideUp} 4s ease-out forwards;
  }

  @media (min-width: 1920px) {
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    gap: 1.25rem;
    margin-bottom: 2.75rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 601px) and (max-width: 768px) {
    justify-content: center;
    gap: 0.875rem;
    margin-bottom: 1.75rem;
  }

  @media (min-width: 481px) and (max-width: 600px) {
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    flex-direction: row;
  }

  @media (min-width: 321px) and (max-width: 480px) {
    justify-content: center;
    gap: 0.625rem;
    margin-bottom: 1.25rem;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 320px) {
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    flex-direction: column;
    align-items: center;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    margin-bottom: 1rem;
    gap: 0.75rem;
    flex-direction: row;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s ease;
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
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 1920px) {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    gap: 0.75rem;
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    padding: 0.9375rem 2.25rem;
    font-size: 1rem;
    gap: 0.625rem;
  }

  @media (min-width: 601px) and (max-width: 768px) {
    padding: 0.8125rem 1.75rem;
    font-size: 0.9rem;
  }

  @media (min-width: 481px) and (max-width: 600px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }

  @media (min-width: 321px) and (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.85rem;
    width: 100%;
    max-width: 200px;
    justify-content: center;
  }

  @media (max-width: 320px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.8rem;
    width: 100%;
    max-width: 180px;
    justify-content: center;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.8rem;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 1920px) {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    gap: 0.75rem;
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    padding: 0.9375rem 2.25rem;
    font-size: 1rem;
    gap: 0.625rem;
  }

  @media (min-width: 601px) and (max-width: 768px) {
    padding: 0.8125rem 1.75rem;
    font-size: 0.9rem;
  }

  @media (min-width: 481px) and (max-width: 600px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }

  @media (min-width: 321px) and (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.85rem;
    width: 100%;
    max-width: 200px;
    justify-content: center;
  }

  @media (max-width: 320px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.8rem;
    width: 100%;
    max-width: 180px;
    justify-content: center;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.8rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 0;

  /* Large Desktop */
  @media (min-width: 1920px) {
    left: 2rem;
    gap: 1.5rem;
  }

  /* Desktop */
  @media (min-width: 1440px) and (max-width: 1919px) {
    left: 1.5rem;
    gap: 1.3rem;
  }

  /* iPad Pro & Large Tablets */
  @media (min-width: 769px) and (max-width: 1024px) {
    position: static;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
  }

  /* iPad & Standard Tablets */
  @media (min-width: 601px) and (max-width: 768px) {
    position: static;
    justify-content: center;
    flex-direction: row;
    gap: 0.875rem;
  }

  /* Large Mobile */
  @media (min-width: 481px) and (max-width: 600px) {
    position: static;
    justify-content: center;
    flex-direction: row;
    gap: 0.75rem;
  }

  /* Standard Mobile */
  @media (min-width: 321px) and (max-width: 480px) {
    position: static;
    justify-content: center;
    flex-direction: row;
    gap: 0.625rem;
  }

  /* Small Mobile */
  @media (max-width: 320px) {
    position: static;
    justify-content: center;
    flex-direction: row;
    gap: 0.5rem;
    margin-top: 0.625rem;
  }

  /* Landscape adjustments */
  @media (orientation: landscape) and (max-height: 600px) {
    left: 0.5rem;
    gap: 0.75rem;
  }

  @media (orientation: landscape) and (max-height: 500px) and (max-width: 900px) {
    position: static;
    flex-direction: row;
    justify-content: center;
    margin-top: 0.5rem;
  }
`;

export const SocialIcon = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 12px;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 1.1rem;
  overflow: hidden;
  transition: all 0.3s ease;

  &:nth-child(1) {
    animation: ${float} 1s linear infinite;
  }
  &:nth-child(2) {
    animation: ${wave} 1s linear infinite;
  }
  &:nth-child(3) {
    animation: ${sway} 1s linear infinite;
  }
  &:nth-child(4) {
    animation: ${wave} 1s linear infinite;
  }
  &:nth-child(5) {
    animation: ${bounce} 1s linear infinite;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px) scale(1.05);

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -150%;
      width: 200%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      background-size: 200% auto;
    }
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<{ label: string }>`
  color: ${({ theme, label }) => theme.colors.iconColors[label]};
  transition: color 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const RightSection = styled.div`
  position: relative;
  animation: ${fadeInRight} 0.8s ease-out 0.2s both;

  @media (max-width: 968px) {
    order: 1;
  }
`;

export const HeroImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  &::before {
    content: "";
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    background: ${({ theme }) => theme.gradients.subtle};
    border-radius: 50%;
    opacity: 0.5;
    animation: ${pulse} 4s ease-in-out infinite;
  }

  @media (max-width: 1024px) {
    max-width: 320px;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    &::before {
      border-radius: 50%;
    }
  }

  @media (max-width: 480px) {
    width: 180px
    height: 180px;
    &::before {
      border-radius: 50%;
    }
  }
`;

export const HeroImage = styled.img`
  width: clamp(180px, 35vw, 480px);
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  animation: ${float} 3s ease-in-out infinite;
  border: 3px solid ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.cardHover};
  position: relative;
  z-index: 1;

  &.visible {
    animation: ${dropBounce} 5s ease-out forwards;
  }

  @media (max-width: 768px) {
    width: clamp(220px, 45vw, 780px);
  }
`;

export const FloatingCard = styled.div<{ animationType?: string }>`
  position: absolute;
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  z-index: 10;

  opacity: 0;
  transform: scale(0);

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }

  .icon {
    font-size: 1.1rem;
  }

  /* Card base positions */
  &.card-1 {
    top: 0%;
    right: -20%;
  }
  &.card-2 {
    top: 50%;
    left: -20%;
  }
  &.card-3 {
    bottom: 0%;
    right: -20%;
  }
  &.card-4 {
    top: 0%;
    left: -20%;
  }
  &.card-5 {
    bottom: -15%;
    left: 35%;
  }
  &.card-6 {
    top: -15%;
    left: 35%;
  }

  /* =============== Animations when .visible is added =============== */
  &.visible.card-1 {
    animation: ${slideInFromTop} 0.8s ease-out 0.2s forwards,
      ${float} 3s ease-in-out infinite 1s;
  }
  &.visible.card-2 {
    animation: ${slideInFromLeft} 0.8s ease-out 0.4s forwards,
      ${floatReverse} 3s ease-in-out infinite 1.2s;
  }
  &.visible.card-3 {
    animation: ${slideInFromBottom} 0.8s ease-out 0.6s forwards,
      ${float} 3s ease-in-out infinite 1.4s;
  }
  &.visible.card-4 {
    animation: ${elasticBounce} 1s ease-out 0.8s forwards,
      ${floatReverse} 3s ease-in-out infinite 1.6s;
  }
  &.visible.card-5 {
    animation: ${popRotate} 1s ease-out 1s forwards,
      ${float} 3s ease-in-out infinite 1.8s;
  }
  &.visible.card-6 {
    animation: ${magneticAttraction} 1.2s ease-out 1.2s forwards,
      ${float} 3s ease-in-out infinite 2s;
  }

  /* Optional: alternative animation modes */
  &.visible.glitch {
    animation: ${glitchEntrance} 0.8s ease-out forwards;
  }
  &.visible.wave {
    animation: ${waveRipple} 1s ease-out forwards;
  }
  &.visible.magnetic {
    animation: ${magneticAttraction} 1.2s ease-out forwards;
  }

  /* ================= Responsive ================= */
  @media (max-width: 1024px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
    &.card-1 {
      right: -10%;
      top: 5%;
    }
    &.card-2 {
      left: -10%;
      top: 50%;
    }
    &.card-3 {
      right: -8%;
      bottom: 5%;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.7rem;
    gap: 0.4rem;
    &.card-1 {
      right: 15%;
      top: 20%;
    }
    &.card-2 {
      left: 45%;
      top: 55%;
    }
    &.card-3 {
      right: 15%;
      bottom: 20%;
    }
    &.card-4,
    &.card-5,
    &.card-6 {
      display: none;
    }
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.6rem;
    font-size: 0.65rem;
    &.card-1 {
      right: 5%;
      top: -5%;
    }
    &.card-2 {
      left: -35%;
      top: 30%;
    }
    &.card-3 {
      right: 5%;
      bottom: -5%;
    }
  }
`;

export const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

export const GradientOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.03;
  animation: ${pulse} 8s ease-in-out infinite,
    ${subtleShift} 20s ease-in-out infinite;
  filter: blur(2px);

  &.orb-1 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 10%;
    background: ${({ theme }) => theme.gradients.primary};
    animation-delay: 0s;
  }

  &.orb-2 {
    width: 200px;
    height: 200px;
    bottom: 20%;
    right: 20%;
    background: ${({ theme }) => theme.gradients.accent};
    animation-delay: 4s;
  }

  &.orb-3 {
    width: 150px;
    height: 150px;
    top: 50%;
    right: 10%;
    background: ${({ theme }) => theme.gradients.tertiary};
    animation-delay: 2s;
  }

  @media (max-width: 768px) {
    &.orb-1 {
      width: 200px;
      height: 200px;
    }

    &.orb-2 {
      width: 150px;
      height: 150px;
    }

    &.orb-3 {
      width: 100px;
      height: 100px;
    }
  }
`;

export const ScrollIndicator = styled.a`
  position: absolute;
  bottom: 2rem;
  left: 48%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;
  animation: ${bounce} 2s ease-in-out infinite;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: lowercase;
    letter-spacing: 0.025em;
    text-align: center;
  }

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    left: 35%;
    bottom: 1%;
    transform: translateX(-50%);
    text-align: center;
  }
`;