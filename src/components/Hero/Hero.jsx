import { useState, useEffect } from "react";
import { MainContainer, HeroContainer, MainInfo } from "./Hero.styled";
import ETHUSDT from "./ETHUSDT/ETHUSDT";
import MainTitle from "./MainTitle/MainTitle";
import EmailInput from "./EmailInput/EmailInput";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    Aos.init({ duration: 1500 });

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MainContainer>
      <HeroContainer>
        <MainInfo>
          {isDesktop ? (
            <>
              <MainTitle />
              <ETHUSDT />
            </>
          ) : (
            <>
              <ETHUSDT />
              <MainTitle />
            </>
          )}
        </MainInfo>
        <EmailInput />
      </HeroContainer>
    </MainContainer>
  );
};

export default Hero;
