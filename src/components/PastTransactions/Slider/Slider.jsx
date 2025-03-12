import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardTransaction from "../CardTransaction/CardTransaction";
import {
  SliderContainer,
  ProgressContainer,
  ProgressBar,
  StyledSlider, 
} from "./Slider.styled";
import { cards as mockData } from "../../data/cards";

const CustomSlider = () => {
  const [cards] = useState(mockData);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
    
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };


  const progressWidth = ((currentSlide + 1) / cards.length) * 100;

  return (
    <SliderContainer>
      <StyledSlider {...settings}>
        {cards.map((card) => (
          <CardTransaction key={card.id} card={card} />
        ))}
      </StyledSlider>
      <ProgressContainer>
        <ProgressBar style={{ width: `${progressWidth}%` }} />
      </ProgressContainer>
    </SliderContainer>
  );
};

export default CustomSlider;
