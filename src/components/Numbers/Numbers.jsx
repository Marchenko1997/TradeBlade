import {
  NumbersSection,
  Rectangle,
  NumbersContainer,
  NumbersTitle,
  NumbersGrid, // Используем CSS Grid
  NumbersItem,
  NumbersItemTitle,
  NumbersItemInfo,
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

        {/* Используем Grid */}
        <NumbersGrid>
          <NumbersItem data-aos="fade-up">
            <NumbersItemTitle>
              Торговой <br />
              прибыли
            </NumbersItemTitle>
            <NumbersItemInfo>2756%</NumbersItemInfo>
          </NumbersItem>

          <NumbersItem data-aos="fade-down">
            <NumbersItemTitle>
              Фьючерсных <br /> и спотовых сделок
            </NumbersItemTitle>
            <NumbersItemInfo>67</NumbersItemInfo>
          </NumbersItem>

          <NumbersItem data-aos="fade-up" style={{ gridColumn: "span 2" }}>
            {/* Этот элемент занимает 2 колонки */}
            <NumbersItemTitle>
              Прибыль <br />
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
