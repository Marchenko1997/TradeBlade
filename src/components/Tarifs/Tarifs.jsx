import { TarifsSection, SectionContainer, TarifsTitle } from "./Tarifs.styled";
import TariffsBtns from "./TariffsBtns/TariffsBtns";
import TariffsList from "./TariffsList/TariffsList";

const Tarifs = () => {
  return (
    <TarifsSection id="tarifs">
      <SectionContainer>
        <TarifsTitle>Тарифы</TarifsTitle>
              <TariffsBtns />
              <TariffsList />
      </SectionContainer>
    </TarifsSection>
  );
};

export default Tarifs;
