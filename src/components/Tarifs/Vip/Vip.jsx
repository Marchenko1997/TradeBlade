import {
  VipItem,
  TariffVipDescr,
  TariffVipDescrItem,
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
        </TariffVipDescr>
      </VipItem>
    </>
  );
};

export default Vip;
