import React from 'react';
import { ContentTestimonials } from '../../../Contents';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledTestimonials } from '../../../Styles/Body/Testimonials/Testimonials.styled';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';

const Testiominials = () => {
  return (
    <StyledTestimonials className='container'>

      <div className='box'>
        <StyledHeadings className='testimonials-subtitle' $device='mobile' as='h5'>{ContentTestimonials.h5_subtitle}</StyledHeadings>
        <StyledHeadings className='testimonials-title' $device='mobile' as='h2'>{ContentTestimonials.h2_title}</StyledHeadings>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        grabCursor={true}
        pagination={{ clickable: true, type: 'progressbar' }}
      >
        
            <SwiperSlide>
              
            </SwiperSlide>
         
      </Swiper>
    </StyledTestimonials>
  );
};

export default Testiominials;
