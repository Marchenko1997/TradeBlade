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

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1328px;
  padding: 0 24px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const LogoIcon = styled.div`
  img {
    width: 107px;
    height: 52px;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 132px;
      height: 64px;
    }
  }
`;
