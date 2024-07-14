import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Button from './Button';

const StyledSwiper = styled.div`
  position: relative;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover .nav-button {
    display: block;
  }
`;

const NavButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: none;

  &.next {
    right: 10px;
  }

  &.prev {
    left: 10px;
  }
`;

function CustomSwiper({ slides }) {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (nextButtonRef.current && prevButtonRef.current) {
      setSwiperReady(true);
    }
  }, []);

  useEffect(() => {
    if (swiperReady) {
      const swiper = document.querySelector('.swiper').swiper;
      if (swiper) {
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, [swiperReady]);

  return (
    <StyledSwiper>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      <NavButton
        ref={nextButtonRef}
        className="nav-button next"
        size="medium"
        variation="secondary"
      >
        <FaArrowRight />
      </NavButton>

      <NavButton
        ref={prevButtonRef}
        className="nav-button prev"
        size="medium"
        variation="secondary"
      >
        <FaArrowLeft />
      </NavButton>
    </StyledSwiper>
  );
}

export default CustomSwiper;
