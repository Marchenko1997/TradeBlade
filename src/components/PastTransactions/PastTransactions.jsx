import Slider from "./Slider/Slider";
import {
  TransactionsSection,
  TransactionsContainer,
  TransactionsTitle,
  TransactionsOnline,
  OnlineText,
  OnlineIcon,
} from "./PastTransactions.styled";

const PastTransactions = () => {
  return (
    <TransactionsSection>
      <TransactionsContainer>
        <TransactionsTitle>Прошедшие сделки</TransactionsTitle>
        <TransactionsOnline>
          <OnlineIcon src="/round.svg" alt="round" />
          <OnlineText>Онлайн</OnlineText>
        </TransactionsOnline>
        <Slider />
      </TransactionsContainer>
    </TransactionsSection>
  );
};

export default PastTransactions;