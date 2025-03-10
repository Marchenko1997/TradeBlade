import { HeaderContainer, LogoIcon } from "./Header.styled"
import BurgerBtn from "./BurgerBtn/BurgerBtn"
import { useState } from "react";
import MobileModal from "./MobileModal/MobileModal";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <HeaderContainer>
      <LogoIcon />
      <BurgerBtn fn={setIsMobileMenuOpen} />
      {isMobileMenuOpen && <MobileModal fn={setIsMobileMenuOpen} />}
    </HeaderContainer>
  );
}

export default Header