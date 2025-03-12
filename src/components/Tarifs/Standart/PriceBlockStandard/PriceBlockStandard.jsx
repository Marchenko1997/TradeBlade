import { TariffsPriceBlock,
  TariffsPrice,
  TariffsCardTerms,
  TarrifsCardBtn,
  ButtonTry} from "./PriceBlockStandard.styled"

const PriceBlockStandard = () => {
    return (
      <>
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
}

export default PriceBlockStandard