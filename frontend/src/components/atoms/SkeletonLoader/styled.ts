import styled, { keyframes } from "styled-components";

const skeletonAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

export const SkeletonPlaceholder = styled.div<{ width?: string; height?: string }>`
  background-color: #e0e0e0;
  border-radius: 8px;
  animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`;

export const SkeletonHeroContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;
`;

export const SkeletonGradientOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, #e0e0e0, #f0f0f0);
  animation: ${skeletonAnimation} 2s infinite ease-in-out;
  
  &.orb-1 {
    width: 200px;
    height: 200px;
    top: 10%;
    left: 10%;
  }
  
  &.orb-2 {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 15%;
  }
  
  &.orb-3 {
    width: 100px;
    height: 100px;
    bottom: 20%;
    left: 20%;
  }
  
  @media (max-width: 768px) {
    &.orb-1, &.orb-2, &.orb-3 {
      width: 80px;
      height: 80px;
    }
  }
`;

export const SkeletonHeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 4rem;
  z-index: 2;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

export const SkeletonLeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SkeletonRightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SkeletonGreeting = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const SkeletonWaveEmoji = styled(SkeletonPlaceholder)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const SkeletonGreetingText = styled(SkeletonPlaceholder)`
  width: 180px;
  height: 24px;
`;

export const SkeletonName = styled(SkeletonPlaceholder)`
  width: 300px;
  height: 48px;
  margin-bottom: 0.5rem;
`;

export const SkeletonTypedText = styled(SkeletonPlaceholder)`
  width: 250px;
  height: 36px;
  margin-bottom: 1rem;
`;

export const SkeletonIntroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const SkeletonIntroLine = styled(SkeletonPlaceholder)`
  height: 20px;
`;

export const SkeletonSocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const SkeletonSocialIcon = styled(SkeletonPlaceholder)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const SkeletonButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SkeletonButton = styled(SkeletonPlaceholder)`
  height: 48px;
  border-radius: 24px;
  
  &.primary {
    width: 120px;
  }
  
  &.secondary {
    width: 140px;
  }
`;

export const SkeletonHeroImageContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

export const SkeletonHeroImage = styled.div`
  
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const SkeletonFloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const SkeletonFloatingCard = styled.div`
  position: absolute;
  
  width: 80px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  
  &.card-1 {
    top: 20%;
    left: -10%;
  }
  
  &.card-2 {
    top: 10%;
    right: -5%;
  }
  
  &.card-3 {
    bottom: 30%;
    left: -15%;
  }
  
  &.card-4 {
    bottom: 10%;
    right: -10%;
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 45px;
  }
`;

export const SkeletonCardIcon = styled.div`
  
  width: 20px;
  height: 20px;
  border-radius: 4px;
`;

export const SkeletonCardLabel = styled.div`
  
  width: 40px;
  height: 12px;
`;

export const SkeletonScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const SkeletonScrollIcon = styled.div`
  
  width: 24px;
  height: 32px;
  border-radius: 12px;
`;

export const SkeletonScrollText = styled.div`
  
  width: 100px;
  height: 14px;
`;
