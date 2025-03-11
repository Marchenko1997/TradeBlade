import {
  TarrifsUL,
  StandartTariff,
  TariffStandartDescr,
} from "./TariffsList.styled";
import Standart from "../Standart/Standart";
import Vip from "../Vip/Vip";

const TariffsList = () => {
  return (
    <TarrifsUL>
      <StandartTariff>
        <h3>Standart</h3>
        <TariffStandartDescr>
          <Standart />
        </TariffStandartDescr>
      </StandartTariff>
      <StandartTariff>
        <Vip />
      </StandartTariff>
    </TarrifsUL>
  );
};

export default TariffsList;
