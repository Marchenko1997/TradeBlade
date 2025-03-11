import styled from "styled-components";

export const FooterInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 80px;

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
  }
`;

export const LogoIcon = styled.div`
  width: 165px;
  height: 80.1px;
  background-image: url("/icons/logo.svg");
  background-size: contain;
  background-repeat: no-repeat;
`;

export const FooterInfoText = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  line-height: 1.42;
  opacity: 0.5;
`;

