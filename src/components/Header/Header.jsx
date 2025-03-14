import { HeaderContainer, LogoIcon, HeaderContent } from "./Header.styled";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import { useState, useEffect } from "react";
import MobileModal from "./MobileModal/MobileModal";
import Navigation from "./Navigation/Navigation";
import AuthButtons from "./AuthButtons/AuthButtons";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoIcon>
          <img src="/icons/logo.svg" alt="logo" />
        </LogoIcon>
        {isDesktop ? (
          <>
            <Navigation />
            <AuthButtons />
          </>
        ) : (
          <BurgerBtn fn={setIsMobileMenuOpen} />
        )}
      </HeaderContent>
      {isMobileMenuOpen && <MobileModal fn={setIsMobileMenuOpen} />}
    </HeaderContainer>
  );
};

export default Header;
