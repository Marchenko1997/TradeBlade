import {
  CardWrapper,
  CardBackground,
  CardTitle,
  CardDescription,
  CardText,
  CardPercent,
  CardFooter,
  CardGoal,
  CardData,
} from "./CardTransaction.styled";

const CardTransaction = ({ card }) => {
  return (
    <CardWrapper data-aos="flip-left">
      <CardBackground src="/log.svg" alt="log" />
      <CardTitle>{card.title}</CardTitle>
      <CardDescription>{card.description}</CardDescription>
      <CardText>{card.text}</CardText>
      <CardPercent>
        {card.percent}{" "}
        <svg width={9} height={16}>
          <use xlinkHref="/sprite.svg#icon-longArrowUp"></use>
        </svg>
      </CardPercent>
      <CardFooter>
        <CardGoal>{card.goal}</CardGoal>
        <CardData>{card.data}</CardData>
      </CardFooter>
    </CardWrapper>
  );
};

export default CardTransaction;
