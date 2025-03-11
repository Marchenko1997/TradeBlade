import { FooterSection, FooterContainer, FooterContent } from "./Footer.styled"
import FooterNav from "./FooterNav/FooterNav"
import FooterInfo from "./FooterInfo/FooterInfo"

const Footer = () => {
  return (
      <FooterSection>
          <FooterContainer>
              <FooterContent>
          <FooterNav />
          <FooterInfo />
              </FooterContent>
          </FooterContainer>
    </FooterSection>
  )
}

export default Footer