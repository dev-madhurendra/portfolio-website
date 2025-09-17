import styled, { keyframes } from 'styled-components';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 
      0 0 50px rgba(74, 144, 226, 0.3),
      inset 0 0 50px rgba(74, 144, 226, 0.1);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 
      0 0 80px rgba(74, 144, 226, 0.5),
      inset 0 0 50px rgba(74, 144, 226, 0.2);
  }
`;

export const particleFloat = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  25% {
    transform: translateY(-15px) rotate(90deg);
    opacity: 1;
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
    opacity: 0.8;
  }
  75% {
    transform: translateY(-20px) rotate(270deg);
    opacity: 1;
  }
`;

export const techIconFloat = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg) scale(1);
    opacity: 0.8;
  }
  33% {
    transform: translateY(-20px) rotate(120deg) scale(1.1);
    opacity: 1;
  }
  66% {
    transform: translateY(-5px) rotate(240deg) scale(0.9);
    opacity: 0.9;
  }
`;

export const iconGlow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 5px currentColor);
  }
  50% {
    filter: drop-shadow(0 0 15px currentColor);
  }
`;

export const ProfileSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const ProfileImageWrapper = styled.div`
  position: relative;
  width: clamp(250px, 60vw, 380px);
  height: clamp(250px, 60vw, 380px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileRings = styled.div`
  position: absolute;
  inset: 0;
  
  .ring {
    position: absolute;
    border: 3px solid transparent;
    border-radius: 50%;
    
    &.ring-1 {
      inset: 0;
      border-top-color: #4A90E2;
      border-right-color: #4A90E2;
      animation: ${rotate} 8s linear infinite;
    }
    
    &.ring-2 {
      inset: 30px;
      border-bottom-color: #50E3C2;
      border-left-color: #50E3C2;
      animation: ${rotate} 12s linear infinite reverse;
    }
    
    &.ring-3 {
      inset: 60px;
      border-top-color: #F5A623;
      border-bottom-color: #F5A623;
      animation: ${rotate} 15s linear infinite;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 260px;
  height: 260px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #4A90E2;
  box-shadow: 
    0 0 60px rgba(74, 144, 226, 0.4),
    inset 0 0 60px rgba(74, 144, 226, 0.2);
  animation: ${pulse} 4s ease-in-out infinite;
  z-index: 2;
  position: relative;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const ProfileParticles = styled.div`
  position: absolute;
  inset: 0;
  
  .particle {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #50E3C2;
    border-radius: 50%;
    box-shadow: 0 0 15px #50E3C2;
    
    &.particle-1 { top: 15%; right: 8%; animation: ${particleFloat} 6s ease-in-out infinite; }
    &.particle-2 { top: 35%; right: -2%; animation: ${particleFloat} 7s ease-in-out infinite 1s; }
    &.particle-3 { bottom: 25%; right: 8%; animation: ${particleFloat} 5s ease-in-out infinite 2s; }
    &.particle-4 { bottom: 15%; left: 8%; animation: ${particleFloat} 8s ease-in-out infinite 3s; }
    &.particle-5 { top: 25%; left: -2%; animation: ${particleFloat} 6s ease-in-out infinite 4s; }
    &.particle-6 { top: 55%; left: 8%; animation: ${particleFloat} 7s ease-in-out infinite 2.5s; }
  }
`;

export const TechIcons = styled.div`
  position: absolute;
  inset: -20px;
  
  .tech-icon {
    position: absolute;
    font-size: 24px;
    animation: ${techIconFloat} 8s ease-in-out infinite, ${iconGlow} 3s ease-in-out infinite;
    z-index: 1;
    cursor: pointer;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.3) !important;
      z-index: 10;
    }
    
    &.react { 
      top: 5%; 
      right: 15%; 
      color: #61DAFB; 
      animation-delay: 0s;
    }
    
    &.nodejs { 
      top: 20%; 
      right: 5%; 
      color: #339933; 
      animation-delay: 1s;
    }
    
    &.mongodb { 
      top: 45%; 
      right: 0%; 
      color: #47A248; 
      animation-delay: 2s;
    }
    
    &.docker { 
      bottom: 35%; 
      right: 8%; 
      color: #2496ED; 
      animation-delay: 3s;
    }
    
    &.python { 
      bottom: 15%; 
      right: 20%; 
      color: #3776AB; 
      animation-delay: 4s;
    }
    
    &.javascript { 
      bottom: 5%; 
      left: 20%; 
      color: #F7DF1E; 
      animation-delay: 5s;
    }
    
    &.typescript { 
      bottom: 15%; 
      left: 5%; 
      color: #3178C6; 
      animation-delay: 6s;
    }
    
    &.nextjs { 
      bottom: 35%; 
      left: 0%; 
      color: #000000; 
      filter: invert(1);
      animation-delay: 7s;
    }
    
    &.tailwind { 
      top: 45%; 
      left: 0%; 
      color: #06B6D4; 
      animation-delay: 0.5s;
    }
    
    &.git { 
      top: 20%; 
      left: 5%; 
      color: #F05032; 
      animation-delay: 1.5s;
    }
    
    &.aws { 
      top: 5%; 
      left: 15%; 
      color: #FF9900; 
      animation-delay: 2.5s;
    }
    
    &.graphql { 
      top: 8%; 
      right: 35%; 
      color: #E10098; 
      animation-delay: 3.5s;
    }
    
    &.redis { 
      top: 35%; 
      right: 25%; 
      color: #DC382D; 
      animation-delay: 4.5s;
    }
    
    &.kubernetes { 
      bottom: 25%; 
      right: 35%; 
      color: #326CE5; 
      animation-delay: 5.5s;
    }
    
    &.postgresql { 
      bottom: 8%; 
      left: 35%; 
      color: #336791; 
      animation-delay: 6.5s;
    }
    
    &.database { 
      top: 35%; 
      left: 25%; 
      color: #4DB33D; 
      animation-delay: 7.5s;
    }
  }
`;
