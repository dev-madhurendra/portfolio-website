import React from "react";
import { CloseButton, CloseButtonWrapper, IframeWrapper, ModalContent, ModalOverlay } from "../../../utils/styled";
import { ITerminalModel } from "../../../interfaces/types";

const TerminalPortfolioModal: React.FC<ITerminalModel> = ({ isOpen, onClose, url }) => {
  if (!isOpen) return null;

  return (
    <>
      <CloseButtonWrapper>
        <CloseButton onClick={onClose}>✖</CloseButton>
      </CloseButtonWrapper>

      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <IframeWrapper src={url} />
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default TerminalPortfolioModal;
