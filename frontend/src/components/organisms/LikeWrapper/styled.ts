import { keyframes, styled } from "styled-components";

const bubble = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1.2); }
  60% { transform: scale(0.95); }
  100% { transform: scale(1); }
`;

const pop = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1.4); }
  60% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  z-index: 10;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    animation: ${bubble} 2s ease-in-out infinite; /* 👈 subtle looping bubble */
    transition: transform 0.2s ease;

    &.liked {
      color: #e1306c;
      animation: ${pop} 0.4s ease; /* 👈 strong pop when liked */
    }
  }

  span {
    font-weight: 600;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 480px) {
    button {
      font-size: 1.25rem;
    }
  }
`;
