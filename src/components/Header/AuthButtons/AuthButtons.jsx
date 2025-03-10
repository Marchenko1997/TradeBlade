import { ButtonContainer, RegisterButton, EnterButton } from "./AuthButtons.styled"

const AuthButtons = () => {
  return (
      <ButtonContainer>
          <RegisterButton>РЕГИСТРАЦИЯ</RegisterButton>
          <EnterButton>ВОЙТИ</EnterButton>
    </ButtonContainer>
  )
}

export default AuthButtons