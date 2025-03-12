import {
  FooterInfoContainer,
  LogoIcon,
  FooterInfoText,
} from "./FooterInfo.styled.jsx";

const FooterInfo = () => {
  return (
    <FooterInfoContainer>
      <LogoIcon>
        <img src="/icons/logo.svg" alt="logo" />
      </LogoIcon>
      <FooterInfoText>© 2022 TradeBlade. All rights reserved</FooterInfoText>
    </FooterInfoContainer>
  );
}

export default FooterInfo