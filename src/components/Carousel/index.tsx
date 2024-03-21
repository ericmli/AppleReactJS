import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';
import { ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode; // Tipo ReactNode para as props children
}

const StyledSlider = styled(Slider)`

  .slick-slide{
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }
  .slick-slide.slick-current{
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }
  .slick-active{
    opacity: 1;
  }
`;

export function Carousel({ children }: CarouselProps) {
  const settings = {
    infinite: true,
    slidesToShow: 1.65,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 8000,
    dots: true,
  };
  return (
    <>
      <br />
      <StyledSlider {...settings} >
        {children}
      </StyledSlider>
      <br />
    </>
  );
}