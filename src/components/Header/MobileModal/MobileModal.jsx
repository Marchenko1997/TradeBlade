import { useEffect } from "react";
import { ModalContainer, CloseButton } from "./MobileModal.styled";
import Navigation from "../Navigation/Navigation";
import AuthButtons from "../AuthButtons/AuthButtons";

const MobileModal = ({ fn }) => {
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        fn(false); 
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [fn]);

  return (
    <ModalContainer>
      <CloseButton onClick={() => fn(false)}>
        <svg width={24} height={24}>
          <use xlinkHref="/sprite.svg#icon-cross"></use>
        </svg>
      </CloseButton>
      <Navigation />
      <AuthButtons />
    </ModalContainer>
  );
};

export default MobileModal;
