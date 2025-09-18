import { keyframes, styled } from "styled-components";

export const slideInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px) scale(0.8);
  }
  60% {
    opacity: 1;
    transform: translateX(10px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

export const slideInFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px) scale(0.8);
  }
  60% {
    opacity: 1;
    transform: translateY(10px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const slideInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px) scale(0.8);
  }
  60% {
    opacity: 1;
    transform: translateY(-10px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const fadeInLeft = keyframes`
  from { 
    opacity: 0; 
    transform: translateX(-20px); 
  }
  to { 
    opacity: 1; 
    transform: translateX(0); 
  }
`;

export const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  60% {
    opacity: 1;
    transform: translateY(-8px); 
  }
  80% {
    transform: translateY(4px); 
  }
  100% {
    transform: translateY(0);   
  }
`;

export const fadeInRight = keyframes`
  from { 
    opacity: 0; 
    transform: translateX(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateX(0); 
  }
`;

export const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0,0,0,0.2); }
  70% { box-shadow: 0 0 0 8px rgba(0,0,0,0); }
  100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
`;

export const sway = keyframes`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
`;

export const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

export const floatReverse = keyframes`
  0%,100% { transform: translateY(-5px); }
  50% { transform: translateY(5px); }
`;

export const wave = keyframes`
  0%,100% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  75% { transform: rotate(-5deg); }
`;

export const bounce = keyframes`
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

export const typing = keyframes`
  from { border-right-color: ${({ theme }) => theme.colors.primary}; }
  to { border-right-color: transparent; }
`;

export const subtleShift = keyframes`
  0%, 100% { transform: translateX(0) translateY(0); }
  25% { transform: translateX(2px) translateY(-2px); }
  50% { transform: translateX(-1px) translateY(2px); }
  75% { transform: translateX(-2px) translateY(-1px); }
`;

export const dropBounce = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-850px);
    animation-timing-function: ease-in;
  }
  22% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  32% {
    transform: translateY(-100px);
    animation-timing-function: ease-in;
  }
  42% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  48% {
    transform: translateY(-50px);
    animation-timing-function: ease-in;
  }
  54% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  58% {
    transform: translateY(-25px);
    animation-timing-function: ease-in;
  }
  62% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  65% {
    transform: translateY(-12px);
    animation-timing-function: ease-in;
  }
  68% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  70% {
    transform: translateY(-6px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  74% {
    transform: translateY(-3px);
  }
  76% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const elasticBounce = keyframes`
  0% {
    opacity: 0;
    transform: scale(0) rotate(-180deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.2) rotate(-90deg);
  }
  70% {
    transform: scale(0.9) rotate(-45deg);
  }
  85% {
    transform: scale(1.05) rotate(-10deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

export const popRotate = keyframes`
  0% {
    opacity: 0;
    transform: scale(0) rotate(180deg);
    filter: blur(5px);
  }
  60% {
    opacity: 0.8;
    transform: scale(1.15) rotate(-10deg);
    filter: blur(1px);
  }
  80% {
    transform: scale(0.95) rotate(5deg);
    filter: blur(0px);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
    filter: blur(0px);
  }
`;

export const magneticAttraction = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3) translateX(200px) translateY(-200px) rotate(360deg);
  }
  30% {
    opacity: 0.7;
    transform: scale(0.7) translateX(100px) translateY(-100px) rotate(180deg);
  }
  60% {
    opacity: 1;
    transform: scale(1.1) translateX(20px) translateY(-20px) rotate(45deg);
  }
  80% {
    transform: scale(0.95) translateX(-5px) translateY(5px) rotate(10deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateX(0) translateY(0) rotate(0deg);
  }
`;

export const glitchEntrance = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px) scaleX(0.5);
    filter: hue-rotate(90deg);
  }
  20% {
    opacity: 0.8;
    transform: translateX(20px) scaleX(1.2);
    filter: hue-rotate(180deg);
  }
  40% {
    opacity: 0.6;
    transform: translateX(-10px) scaleX(0.8);
    filter: hue-rotate(270deg);
  }
  60% {
    opacity: 1;
    transform: translateX(5px) scaleX(1.1);
    filter: hue-rotate(360deg);
  }
  80% {
    transform: translateX(-2px) scaleX(0.95);
    filter: hue-rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scaleX(1);
    filter: hue-rotate(0deg);
  }
`;

export const waveRipple = keyframes`
  0% {
    opacity: 0;
    transform: scale(0) rotateY(180deg);
    box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.7);
  }
  30% {
    opacity: 0.7;
    transform: scale(0.8) rotateY(90deg);
    box-shadow: 0 0 0 20px rgba(74, 144, 226, 0.3);
  }
  60% {
    opacity: 1;
    transform: scale(1.1) rotateY(30deg);
    box-shadow: 0 0 0 40px rgba(74, 144, 226, 0.1);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotateY(0deg);
    box-shadow: 0 0 0 0 rgba(74, 144, 226, 0);
  }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const expandAnimation = keyframes`
  from { 
    max-height: 0; 
    opacity: 0; 
  }
  to { 
    max-height: 500px; 
    opacity: 1; 
  }
`;

export const scaleIn = keyframes`
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

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
  isVisible?: boolean;
}>`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 20%,
        rgba(1, 4, 183, 0.03) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(223, 5, 5, 0.03) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 60% 40%,
        rgba(0, 17, 6, 0.02) 0%,
        transparent 60%
      );
  }
`;

export const FloatingOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.primary};
  opacity: 0.05;
  animation: ${float} 12s ease-in-out infinite, ${pulse} 8s ease-in-out infinite;
  filter: blur(1px);

  &.orb-1 {
    width: 200px;
    height: 200px;
    top: 15%;
    left: 10%;
    animation-delay: 0s;
  }

  &.orb-2 {
    width: 150px;
    height: 150px;
    bottom: 20%;
    right: 15%;
    background: ${({ theme }) => theme.gradients.accent};
    animation-delay: 4s;
  }

  &.orb-3 {
    width: 100px;
    height: 100px;
    top: 50%;
    right: 30%;
    background: ${({ theme }) => theme.gradients.tertiary};
    animation-delay: 8s;
  }

  @media (max-width: 768px) {
    &.orb-1 {
      width: 120px;
      height: 120px;
    }
    &.orb-2 {
      width: 100px;
      height: 100px;
    }
    &.orb-3 {
      width: 80px;
      height: 80px;
    }
  }
`;

export const slideInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

export const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

export const ripple = keyframes`
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(4); opacity: 0; }
`;

export const progressLoad = keyframes`
  from { width: 0%; }
  to { width: var(--progress-width); }
`;

export const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px ${(props) => props.theme.colors.primary}40; }
  50% { box-shadow: 0 0 30px ${(props) => props.theme.colors.primary}60; }
`;

export const pulseGlow = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
`;

export const StatCard = styled.div<{
  delay: string;
}>`
  background: ${({ theme }) => theme.colors.cardBg};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  &.visible {
    animation: ${slideInLeft} 2s both;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: ${({ theme }) => theme.gradients.accent};
    opacity: 0.05;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.6s ease;
  }

  &:hover::before {
    transform: scale(1);
  }
`;

export const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  background: ${({ theme }) => theme.gradients.accent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const StatLabel = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
  margin-bottom: 15px;
`;

export const StatIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.7;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const drift = keyframes`
  0% {
    transform: translateX(0px);
  }
  33% {
    transform: translateX(30px);
  }
  66% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(0px);
  }
`;

export const FloatingTechBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

export const FloatingTechIcon = styled.div<{
  size: string;
  duration: string;
  driftDuration: string;
  delay: number;
}>`
  position: absolute;
  font-size: ${(props) => props.size || "24px"};
  color: ${(props) => props.color || "#64ffda"};
  animation: ${float} ${(props) => props.duration || "6s"} ease-in-out infinite,
    ${drift} ${(props) => props.driftDuration || "8s"} ease-in-out infinite;
  animation-delay: ${(props) => props.delay || "0s"};
  opacity: 0.7;
  filter: blur(0.5px);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    opacity: 1;
    filter: blur(0);
  }
`;
