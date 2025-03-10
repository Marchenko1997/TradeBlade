import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  z-index: 1000;
  background-color: var(--dark-background);
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoIcon = styled.div`
  width: 107.11px;
  height: 52px;
  left: 10px;
  top: 0;
  background-image: url("/icons/logo.svg");
  background-size: contain;
  background-repeat: no-repeat;
`;


