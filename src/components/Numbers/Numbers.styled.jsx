import styled from "styled-components";

export const NumbersSection = styled.section`
  background-color: var(--white);
  position: relative;
  padding-top: 24px;
  padding-bottom: 48px;

  @media (min-width: 768px) {
    padding-top: 90px;
    padding-bottom: 61px;
  }
`;

export const Rectangle = styled.div`
  position: absolute;
  background-color: var(--white);
  top: 0;
  left: 0;
  margin-top: -20px;
  height: 24px;
  width: 70%;
  clip-path: polygon(0% 0%, 90% 0%, 95% 100%, 0% 100%);
`;

export const NumbersContainer = styled.div`
  width: 100%;
  max-width: 1328px;
  padding: 0 24px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 153px;

  }
`;

export const MobileBr = styled.br`
  @media (min-width: 768px) {
    display: none;
  }
`;


export const NumbersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 72px;

  @media (min-width: 768px) {
    display: flex;
    gap: 129px;
  }
`;

export const NumbersTitle = styled.div`
  h1 {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 700;
    font-size: 44px;
    line-height: 56px;
    color: var(--primary-dark);
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 28px;
      line-height: 36px;
    }
  }

  h5 {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--primary-dark);
  }
`;

export const NumbersItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NumbersItemTitle = styled.p`
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--primary-dark);
  text-transform: uppercase;
`;

export const NumbersItemInfo = styled.p`
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  font-size: 60px;
  line-height: 66px;
  color: var(--primary-purple);

  @media (max-width: 768px) {
    font-size: 35px;
    line-height: 38.5px;
  }
`;
