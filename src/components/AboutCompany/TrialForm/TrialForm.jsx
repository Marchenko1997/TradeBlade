import {
  TrialFormContainer,
  FormTitle,
  Form,
  TrialInput,
  StartBtn,
} from "./TrialForm.styled";

const TrialForm = () => {
  return (
    <TrialFormContainer>
      <FormTitle>
        Попробуйте сейчас и получите 5 дней бесплатного пользования
      </FormTitle>
      <Form>
        <TrialInput type="email" placeholder="Ваш e–mail" />
        <StartBtn type="submit">Попробовать</StartBtn>
      </Form>
    </TrialFormContainer>
  );
}

export default TrialForm