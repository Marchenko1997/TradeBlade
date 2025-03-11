import {
  VipItem,
  TariffVipDescr,
  TariffVipDescrItem,
  TariffsPriceBlock,
  TrariffPrice,
  TariffsCardTerms,
  TarrifsCardBtn,
  ButtonTry,
} from "./Vip.styled.jsx";

const Vip = () => {
  return (
    <>
      <VipItem>
        <h3>VIP</h3>
        <TariffVipDescr>
          <TariffVipDescrItem>Ручной трейдинг</TariffVipDescrItem>
          <TariffVipDescrItem>
            Автоматическое или полуавтоматическое копирование сделок
          </TariffVipDescrItem>
          <TariffVipDescrItem>Личный кабинет со статистикой</TariffVipDescrItem>
          <TariffVipDescrItem>
            Краткосрочные, среднесрочные и инвест сделки
          </TariffVipDescrItem>
          <TariffVipDescrItem>Доступ в Vip чат с командой</TariffVipDescrItem>
          <TariffVipDescrItem>
            Наш авторский курс по трейдингу
          </TariffVipDescrItem>
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
        </TariffVipDescr>
      </VipItem>
    </>
  );
};

export default Vip;
