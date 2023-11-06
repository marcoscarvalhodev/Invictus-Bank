import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSlides } from '../../../Styles/Body/Slides/Slides.styled';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slides = () => {
  return (
    <StyledSlides className='container'>
      <Swiper modules={[Pagination]} spaceBetween={40} slidesPerView={3} grabCursor={true} pagination={{clickable: true}} >
        <SwiperSlide>
          <h1>Slide 1</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Slide 2</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Slide 3</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Slide 4</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Slide 5</h1>
        </SwiperSlide>
      </Swiper>
    </StyledSlides>
  );
};

export default Slides;
