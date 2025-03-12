import styled from "styled-components";

export const VipItem = styled.div`
  border-radius: 8px;
  color: var(--white);
  padding: 16px;
  height: max-content;
  display: flex;
  flex-direction: column;
  transition: background-color, 0.2s;

  @media (min-width: 768px) {
    padding: 0;
    height: 556px;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -1.28px;
    margin-bottom: 0;

    @media (min-width: 768px) {
      font-size: 32px;
    }
  }
`;

export const TariffVipDescr = styled.ul`
  margin-top: 24px;
  flex: 1 1 auto;
  list-style-image: url(./marker-checked.png);
  margin-left: 16px;
`;

export const TariffVipDescrItem = styled.li`
  line-height: 1.25;
  padding-bottom: 8px;
  padding-top: 8px;
  position: relative;

  ::after {
    content: "";
    width: calc(100% + 48px);
    height: 0;
    border: 2px dotted rgba(255, 255, 255, 0.2);
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: -33px;
  }
`;

