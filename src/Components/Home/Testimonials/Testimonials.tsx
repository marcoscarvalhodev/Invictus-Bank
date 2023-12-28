import React from 'react';
import { ContentTestimonials } from '../../../Contents';

import {Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledTestimonials } from '../../../Styles/Home/Testimonials/Testimonials.styled';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import ContainerSizes from '../../../ContainerSizes';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

interface TestimonialsProps {
  smallState: 'desktop' | 'mobile';
}

const Testiominials = ({smallState}: TestimonialsProps) => {
  const {xsmall, xlarge, small} = ContainerSizes();
  const [slideState, setSlideState] = React.useState(2);

  React.useEffect(() => {
    if(xsmall) {
      setSlideState(1);
    } else if(xlarge){ 
      setSlideState(3);
    } else {
      setSlideState(2);
    }
  }, [xlarge, xsmall])

  return (
    <StyledTestimonials className='container' $small={small}>
      <div className='box'>
        <StyledHeadings
          className='testimonials-subtitle'
          $device={smallState}
          as='h5'
        >
          {ContentTestimonials.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings className='testimonials-title' $device={smallState} as='h2'>
          {ContentTestimonials.h2_title}
        </StyledHeadings>
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={slideState}
        navigation
        grabCursor={true}
        pagination={{ clickable: true, type: 'progressbar' }}
      >
        {ContentTestimonials.list_testimonials.map(({name, testimonial, photo, id}) => {
          return <SwiperSlide key={id}>
            <img src={photo} className='photo-profile'></img>
            <StyledHeadings className='testimonials-name' $device={smallState} as="h4">{name}</StyledHeadings>
            <StyledTexts $device={smallState} $size='p4' className='testimonials-review'>{testimonial}</StyledTexts>
          </SwiperSlide>;
        })}
      </Swiper>
    </StyledTestimonials>
  );
};

export default Testiominials;
