import styled from "styled-components";

export const TarrifsUL = styled.div`
  display: flex;
  gap: 20px 20px;
  flex-wrap: wrap;


`;

export const StandartTariff = styled.div`
  border-radius: 8px;
  border: 1px solid var(--primary-purple);
  padding: 16px;
  height: max-content;
  display: flex;
  flex-direction: column;
  transition: background-color, 0.2s;

  &:hover,
  &:focus {
    background-color: var(--primary-purple);
  }

  @media (min-width: 768px) {
    height: 556px;
    width: 413px;
    padding: 24px;
    justify-content: space-between;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -1.28px;
    margin-bottom: 0;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 32px;
    }
  }
`;

export const TariffStandartDescr = styled.ul`
  margin-top: 24px;
  flex: 1 1 auto;
  list-style-image: url(./marker-checked.png);
  margin-left: 16px;
`;

