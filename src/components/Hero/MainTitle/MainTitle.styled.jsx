import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 343px;
  height: 132px;
  gap: 12px;
  margin-top: 33px;

  @media (min-width: 768px) {
    max-width: 630px;
    height: 216px;
  }
`;

export const MainHeading = styled.h1`
  font-size: 34px;
  font-weight: 700;
  line-height: 1.26em;
  letter-spacing: -1.4px;
  text-align: left;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 60px;
    line-height: 1.2;
    letter-spacing: -2.4px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgb(231, 247, 248);
  line-height: 1.25em;
  opacity: 0.8;

  @media screen and (min-width: 768px) {
        max-width: 565px;
    }
`;