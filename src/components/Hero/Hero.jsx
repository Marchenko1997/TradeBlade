import { MainContainer } from "./Hero.styled"
import ETHUSDT from "./ETHUSDT/ETHUSDT"
import MainTitle from "./MainTitle/MainTitle"
import EmailInput from "./EmailInput/EmailInput"

const Hero = () => {
  return (
      <MainContainer>
          <ETHUSDT />
          <MainTitle />
          <EmailInput />
    </MainContainer>
  )
}

export default Hero