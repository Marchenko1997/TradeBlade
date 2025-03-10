import { InputContainer, Input, StartBtn, FreeTrial } from "./EmailInput.styled"

const EmailInput = () => {
    return (
      <>
        <InputContainer>
          <Input type="email" placeholder="Ваш e–mail" />
          <StartBtn type="submit">Начать</StartBtn>
        </InputContainer>
        <FreeTrial>5 дней бесплатного пользования</FreeTrial>
      </>
    );
}

export default EmailInput