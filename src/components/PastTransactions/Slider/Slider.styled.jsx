import styled from "styled-components";
import Slider from "react-slick";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  padding: 40px 0;
  overflow: hidden;
`;

export const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
    width: auto !important;
  }

  .slick-track {
    display: flex;
    gap: 8px; 
    width: auto ;

    @media (min-width: 768px) {
      gap: 20px;
    }
  }
`;

export const ProgressContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 311px;
  height: 6px;
  background-color: #434f70;
  border-radius: 3px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 955px;
    height: 6px;
  }
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: #6073a1;
  transition: width 0.3s ease-in-out;
`;
