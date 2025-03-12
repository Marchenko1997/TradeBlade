import { useState, useEffect } from "react";
import {
  ButtonContainer,
  RegisterButton,
  EnterButton,
} from "./AuthButtons.styled";

const AuthButtons = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ButtonContainer>
      {isDesktop ? (
        <>
          <EnterButton>ВХОД</EnterButton>
          <RegisterButton>РЕГИСТРАЦИЯ</RegisterButton>
        </>
      ) : (
        <>
          <RegisterButton>РЕГИСТРАЦИЯ</RegisterButton>
          <EnterButton>Войти</EnterButton>
        </>
      )}
    </ButtonContainer>
  );
};

export default AuthButtons;
