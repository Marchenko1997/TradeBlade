import styled from "styled-components";

export const TariffsPriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 24px;
`;

export const TariffsPrice = styled.p`
  font-size: 35px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -1.4px;
  margin-bottom: 0;

  span {
    color: var(--primary-green);
    vertical-align: super;
    font-size: 18px;
    line-height: 1.11;
    letter-spacing: -0.72px;
  }
`;

export const TariffsCardTerms = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 6px 8px;

  p {
    line-height: 1.25;
    margin-bottom: 0;
  }
`;


export const TarrifsCardBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  padding: 0;
  svg {
    width: 24px;
    height: 24px;
  }
`;


export const ButtonTry = styled.button`
  padding: 8px 24px;
  text-align: center;
  box-shadow: 0px 0px 4px 0px #57e1ff;
  line-height: 1.42;
  font-weight: 500;
  border: 1.5px solid var(--Q, #57e1ff);
  font-size: 14px;
  background-color: var(--primary-cyan);
  color: var(--dark-background);
  border-radius: 3px;
  transition: background-color, 0.2s;
  text-transform: uppercase;
  width: 310px;
  height: 52px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.3;
    width: initial;
    height: 52px;
  }

  @media (min-width: 1024px) {
    width: 365px;
  }

  &:hover {
    background-color: var(--primary-purple);
    color: var(--primary-cyan);
    border: 2px solid rgb(87, 225, 255);
  }

  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.33;
    opacity: 0.56;
    text-transform: lowercase;
    display: block;
  }
`;
