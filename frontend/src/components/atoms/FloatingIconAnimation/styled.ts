
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const drift = keyframes`
  0% { transform: translateX(0px); }
  50% { transform: translateX(15px); }
  100% { transform: translateX(0px); }
`;

export const FloatingIconWrapper = styled.div<{
  top: number;
  left: number;
  size: number;
  color: string;
  duration: number;
  driftDuration: number;
  delay: number;
  opacity: number;
}>`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  animation: 
    ${float} ${({ duration }) => duration}s ease-in-out infinite,
    ${drift} ${({ driftDuration }) => driftDuration}s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
  pointer-events: none;
`;

export const Container = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`;