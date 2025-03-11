import {
  NumbersSection,
  Rectangle,
  NumbersContainer,
  NumbersTitle,
  NumbersGrid,
  NumbersItem,
  NumbersItemTitle,
  NumbersItemInfo,
  MobileBr,
} from "./Numbers.styled";

const Numbers = () => {
  return (
    <NumbersSection>
      <Rectangle />
      <NumbersContainer>
        <NumbersTitle data-aos="fade-down">
          <h1>Цифры</h1>
          <h5>Cентябрь 2022</h5>
        </NumbersTitle>

        <NumbersGrid>
          <NumbersItem data-aos="fade-up">
            <NumbersItemTitle>
              Торговой <MobileBr /> прибыли
            </NumbersItemTitle>
            <NumbersItemInfo>2756%</NumbersItemInfo>
          </NumbersItem>

          <NumbersItem data-aos="fade-down">
            <NumbersItemTitle>
              Фьючерсных <MobileBr /> и спотовых сделок
            </NumbersItemTitle>
            <NumbersItemInfo>67</NumbersItemInfo>
          </NumbersItem>

          <NumbersItem data-aos="fade-up" style={{ gridColumn: "span 2" }}>
            <NumbersItemTitle>
              Прибыль <MobileBr />
              подписчиков
            </NumbersItemTitle>
            <NumbersItemInfo>375000</NumbersItemInfo>
          </NumbersItem>
        </NumbersGrid>
      </NumbersContainer>
    </NumbersSection>
  );
};

export default Numbers;
