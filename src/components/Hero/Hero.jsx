import { MainContainer } from "./Hero.styled"
import ETHUSDT from "./ETHUSDT/ETHUSDT"
import MainTitle from "./MainTitle/MainTitle"
import EmailInput from "./EmailInput/EmailInput"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
 useEffect(() => {
   Aos.init({ duration: 1500 });
 }, []);

  return (
      <MainContainer>
          <ETHUSDT />
          <MainTitle />
          <EmailInput />
    </MainContainer>
  )
}

export default Hero