import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 40px 16px;
  background-color: var(--dark-background);
  margin-top: 52px;
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1328px;
  padding: 0 24px;
  margin: 0 auto;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
