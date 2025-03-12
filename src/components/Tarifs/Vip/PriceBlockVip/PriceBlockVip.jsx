import {TariffsPriceBlock,
  TrariffPrice,
  TariffsCardTerms,
  TarrifsCardBtn,
  ButtonTry} from "./PriceBlockVip.styled"

const PriceBlockVip = () => {
    return (
      <>
        <TariffsPriceBlock>
          <TrariffPrice>
            $585
            <span>-35%</span>
          </TrariffPrice>
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
}

export default PriceBlockVip