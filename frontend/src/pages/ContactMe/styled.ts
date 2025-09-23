import styled from "styled-components";
import { fadeInRight, slideInFromBottom, slideInFromLeft } from "../../globalStyled";

export const ContactContainer = styled.section`
  background: ${({ theme }) => theme.gradients.hero};
  padding: 5rem 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.gradients.hero};
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const MainCard = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 3rem auto 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  min-height: 650px;
  border-radius: 24px;
  backdrop-filter: blur(20px);
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 2rem 1rem 0 1rem;
    border-radius: 20px;
  }
`;

export const CharacterSection = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 300px;
  }
`;

export const FormSection = styled.div`
  padding: 3rem;

  position: relative;

  &.visible {
    animation: ${slideInFromLeft} 1s ease-out;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const CharacterContainer = styled.div`
  position: absolute;
  margin-bottom: 2rem;

  &.visible {
    animation: ${fadeInRight} 2s ease-out;
  }

  img {
    height: 600px;
    width: 600px;
    margin-left: 80px;
    object-fit: contain;
    background: none;
    transition: all 0.3s ease;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 20px;
    border-radius: 50%;
  }

  @media (max-width: 1024px) {
    position: relative;
    margin: 0 auto 1.5rem;
    text-align: center;

    img {
      height: 400px;
      width: 400px;
      margin-left: 0;
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto 1rem;

    img {
      height: 400px;
      width: auto;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 400px;
    }
  }
`;
export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  text-align: left;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.8rem;
  position: relative;

  &:nth-child(1) {
    --delay: 0s;
  }
  &:nth-child(2) {
    --delay: 0.1s;
  }
  &:nth-child(3) {
    --delay: 0.2s;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-within {
    transform: translateY(-3px);

    svg {
      color: ${({ theme }) => theme.colors.primary} !important;
      transform: scale(1.1);
    }
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  z-index: 2;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem 1.2rem 1.2rem 3.5rem;
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 12px;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
    background: #fafafa;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
    transition: all 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0.7;
    transform: translateX(5px);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1.2rem 1.2rem 1.2rem 3.5rem;
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 12px;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  resize: vertical;
  min-height: 120px;
  font-family: ${({ theme }) => theme.fonts.body};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primaryLight};
    background: #fafafa;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
    transition: all 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0.7;
    transform: translateX(5px);
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.6s;
  }

  &:hover {
    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const ContactInfo = styled.div`
  text-align: center;
  position: absolute;
  z-index: 2;
  margin-left: 15%;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-left: 10%;
    margin-top: 5%;
  }
`;

export const ContactText = styled.p`
  font-size: 1.1rem;
  color: white;
  margin-bottom: 2rem;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 1001px) {
    margin-left: 80px;
    margin-top: 1rem;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;

  background: ${({ theme }) => theme.colors.card};
  backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;

  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid
    ${({ theme }) => theme.colors.border || "rgba(255, 255, 255, 0.2)"};
  min-width: 140px;
  justify-content: center;
  font-weight: 500;

  span {
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }

  &.visible {
    animation: ${slideInFromBottom} 2s ease-out;
  }

  @media (max-width: 1024px) {
    min-width: 120px;
  }

  @media (max-width: 768px) {
    width: 90%;         
    font-size: 0.85rem;
    padding: 0.6rem 1rem;

    span {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.8rem;

    span {
      font-size: 0.75rem;
    }
  }
`;

export const CharacterSVG = styled.svg`
  width: 180px;
  height: 220px;
  filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1));

  @media (max-width: 768px) {
    width: 120px;
    height: 150px;
  }
`;
