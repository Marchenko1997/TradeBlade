import {
  TarrifsUL,
  StandartTariff,
  TariffStandartDescr,
} from "./TariffsList.styled";
import Standart from "../Standart/Standart";
import Vip from "../Vip/Vip";
import PriceBlockStandard from "../Standart/PriceBlockStandard/PriceBlockStandard"
import PriceBlockVip from "../Vip/PriceBlockVip/PriceBlockVip";

const TariffsList = () => {
  return (
    <>
      <TarrifsUL>
        <StandartTariff>
          <h3>Standart</h3>
          <TariffStandartDescr>
            <Standart />
          </TariffStandartDescr>
          <PriceBlockStandard />
        </StandartTariff>
        <StandartTariff>
          <Vip />
          <PriceBlockVip />
        </StandartTariff>
      </TarrifsUL>
    </>
  );
};

export default TariffsList;
