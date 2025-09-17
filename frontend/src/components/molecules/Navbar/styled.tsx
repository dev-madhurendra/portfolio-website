import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

export const NavbarWrapper = styled.nav`
  width: 80%;
  height: 70px;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.navbar};
  border-radius: 50px;
  box-shadow: ${({ theme }) => theme.shadows.navbar};
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.body};

  @media (max-width: 768px) {
    width: 80%;
    padding: 0.75rem 1.5rem;
    border-radius: 40px;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 80%;
    padding: 0.5rem 1rem;
    border-radius: 35px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  .logo-circle {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${fadeIn} 0.5s ease forwards;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
`;

export const LinksWrapper = styled.ul<{ open?: boolean }>`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.body};

  @media (max-width: 768px) {
    position: absolute;
    top: calc(100% + 1rem);
    right: 1rem;
    left: 1rem;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.navbar};
    border-radius: 25px;
    padding: 1.5rem;
    box-shadow: ${({ theme }) => theme.shadows.dropdown};
    backdrop-filter: blur(20px);
    border: 1px solid ${({ theme }) => theme.colors.border};
    display: ${({ open }) => (open ? "flex" : "none")};
    animation: ${slideDown} 0.3s ease;
    gap: 0.5rem;
  }
`;

export const LinkItem = styled.li<{ active?: boolean }>`
  a {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: 30px;
    font-weight: 500;
    font-size: 0.95rem;
    color: ${({ theme, active }) =>
      active ? theme.colors.white : theme.colors.textSecondary};
    background: ${({ theme, active }) =>
      active ? theme.colors.primary : "transparent"};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    font-family: ${({ theme }) => theme.fonts.body};

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${({ theme }) => theme.gradients.primary};
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: 30px;
      z-index: 0;
    }

    ${({ active, theme }) =>
      !active &&
      `
        &:hover {
          color: ${theme.colors.textPrimary};
          background: transparent;
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.navbar};
        }
      `}

    span {
      position: relative;
      z-index: 1;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    a {
      width: 90%;
      padding: 0.6rem 1rem;  
      font-size: 0.85rem;    
      margin: 0.3rem auto;   
      border-radius: 24px;   
    }
  }
`;

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .menu-toggle {
    display: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: all 0.3s ease;
    padding: 0.5rem;
    border-radius: 8px;
    font-family: ${({ theme }) => theme.fonts.body};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.primary}10;
    }
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }
  }
`;
