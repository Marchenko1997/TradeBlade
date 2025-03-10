import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; 
  height: 100vh; 
  background-color: var(--primary-purple);
  padding: 16px;
  z-index: 999; 
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 16px;
  background-color: transparent;
  width: 32px;
  height: 32px;

  svg {
    fill: #e7f7f8;
    width: 32px;
    height: 32px;
  }
`;
