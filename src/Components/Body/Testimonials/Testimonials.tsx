import React from 'react';
import { ContentTestimonials } from '../../../Contents';

import {Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledTestimonials } from '../../../Styles/Body/Testimonials/Testimonials.styled';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import ContainerSizes from '../../../ContainerSizes';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

const Testiominials = () => {
  const {xsmall} = ContainerSizes();

  return (
    <StyledTestimonials className='container'>
      <div className='box'>
        <StyledHeadings
          className='testimonials-subtitle'
          $device='mobile'
          as='h5'
        >
          {ContentTestimonials.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings className='testimonials-title' $device='mobile' as='h2'>
          {ContentTestimonials.h2_title}
        </StyledHeadings>
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={xsmall ? 1 : 2}
        navigation
        grabCursor={true}
        pagination={{ clickable: true, type: 'progressbar' }}
      >
        {ContentTestimonials.list_testimonials.map(({name, testimonial, photo, id}) => {
          return <SwiperSlide key={id}>
            <img src={photo} className='photo-profile'></img>
            <StyledHeadings className='testimonials-name' $device="mobile" as="h4">{name}</StyledHeadings>
            <StyledTexts $device='mobile' $size='p1'>{testimonial}</StyledTexts>
          </SwiperSlide>;
        })}
      </Swiper>
    </StyledTestimonials>
  );
};

export default Testiominials;
