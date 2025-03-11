import hero from "/hero.png";
import {
  CryptoContainer,
 
} from "./ETHUSDT.styled";

const ETHUSDT = () => {
  return (
    <CryptoContainer>
      <img src={hero} alt="hero" />
    </CryptoContainer>
  );
};

export default ETHUSDT;
