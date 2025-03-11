import styled from "styled-components";

export const TarrifsUL = styled.ul`
  display: flex;
  gap: 20px 20px;
  flex-wrap: wrap;
`;

export const StandartTariff = styled.li`
  border-radius: 8px;
  border: 1px solid var(--primary-purple);
  padding: 16px;
  height: max-content;
  display: flex;
  flex-direction: column;
  transition: background-color, 0.2s;

  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -1.28px;
    margin-bottom: 0;
    text-transform: uppercase;
  }
`;

export const TariffStandartDescr = styled.ul`
  margin-top: 24px;
  flex: 1 1 auto;
  list-style-image: url(./marker-checked.png);
  margin-left: 16px;
`;

