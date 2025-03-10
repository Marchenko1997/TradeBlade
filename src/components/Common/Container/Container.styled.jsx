import styled from "styled-components";

export const ContainerMain = styled.div`
  max-width: 375px;
  width: 100vw;
  margin: 0 auto;
  padding: 0 10px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 30px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 50px;
  }
`;
