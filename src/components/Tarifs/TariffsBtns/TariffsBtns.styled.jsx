import styled from "styled-components";

export const TariffsBtnsContainer = styled.div`
  background-color: #4a3bb3;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  margin-bottom: 24px;
  width: 100%;
  margin-top: 28px;
`;

export const SpotBtn = styled.button`
  background-color: var(--primary-cyan);
  color: var(--dark-background);
  padding: 0;
  border: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -0.96px;
  border-radius: 4px;
  flex-basis: 50%;
  text-transform: uppercase;

  &:hover {
    background-color: var(--primary-purple);
    color: var(--primary-cyan);
    border: 2px solid rgb(87, 225, 255);
  }
`;

export const FeaturedBtn = styled.button`
  background-color: #4a3bb3;
  padding: 0;
  border: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -0.96px;
  color: var(--primary-cyan);
  border-radius: 4px;
  text-transform: uppercase;
  flex-basis: 50%;
  text-transform: uppercase;
`;
