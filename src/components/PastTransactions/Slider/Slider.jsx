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
  const totalSlides = Math.ceil(cards.length / 4); 

  const settings = {
    dots: false,
    infinite: true,
    speed: 250, 
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true, 
    autoplay: true,
    autoplaySpeed: 2000, 
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10, 
    easing: "ease-in-out",
    cssEase: "ease-in-out",
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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



  const progressWidth = ((currentSlide + 1) / totalSlides) * 100;

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
