import {
 DescripItem,
  TariffsPriceBlock,
  TariffsPrice,
  TariffsCardTerms,
  TarrifsCardBtn,
  ButtonTry,
} from "./Standart.styled.jsx";

const Standart = () => {
  return (
    <>
      <DescripItem>Ручной трейдинг</DescripItem>
      <DescripItem>
        Автоматическое или полуавтоматическое копирование сделок
      </DescripItem>
      <DescripItem>Личный кабинет со статистикой</DescripItem>
      <DescripItem>Среднесрочные сделки с уровнями набора портфеля</DescripItem>
      <TariffsPriceBlock>
        <TariffsPrice>
          $234
          <span>-35%</span>
        </TariffsPrice>
        <TariffsCardTerms>
          <p>12 месяцев</p>
          <TarrifsCardBtn>
            <svg>
              <use xlinkHref="/sprite.svg#icon-arrowDown"></use>
            </svg>
          </TarrifsCardBtn>
        </TariffsCardTerms>
      </TariffsPriceBlock>

      <ButtonTry>
        Попробовать
        <span>5 дней бесплатно</span>
      </ButtonTry>
    </>
  );
};

export default Standart;
