import styled from "styled-components";

export const FooterInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 80px;

  @media (min-width: 768px) {
    gap: 142px;
    justify-content: initial;
  }

  ::before {
    content: "";
    width: calc(100% + 48px);
    height: 1px;
    background-color: var(--white);
    opacity: 0.8;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: -20px;
    margin-left: -24px;
    opacity: 0.3;

    @media (min-width: 768px) {
      height: calc(100% + 68px);
      width: 1px;
      margin-top: -27px;
    }
  }
`;

export const LogoIcon = styled.div`
  img {
    width: 165px;
    height: auto;
  }
`;

export const FooterInfoText = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  line-height: 1.42;
  opacity: 0.5;
`;
