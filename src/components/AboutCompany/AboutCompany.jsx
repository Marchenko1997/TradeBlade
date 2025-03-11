import {
  AboutUsSection,
  Rectangle,
  AboutUsTitle,
  AboutParagraphFirst,
  MainIformation,
  AboutParagraphTwo,
  AboutUsContainer,
} from "./AboutCompany.styled";
import TrialForm from "./TrialForm/TrialForm";

const AboutCompany = () => {
  return (
    <AboutUsSection>
      <Rectangle />
      <AboutUsContainer>
        <AboutUsTitle> О компании</AboutUsTitle>
        <MainIformation>
          {" "}
          <AboutParagraphFirst>
            Мы опытная команда, для которой трейдинг – профессия. TradeBlade
            является авторизованным официальным брокером биржи Binance.
          </AboutParagraphFirst>
          <AboutParagraphTwo>
            {" "}
            Он представляет пользователям множество преимуществ, таких как более
            високая скорость синхронизации API и возможность создать учетную
            запись Binance через платформу TradeBlade всего в 1 клик.
          </AboutParagraphTwo>
        </MainIformation>
      </AboutUsContainer>

      <TrialForm />
    </AboutUsSection>
  );
};

export default AboutCompany;
