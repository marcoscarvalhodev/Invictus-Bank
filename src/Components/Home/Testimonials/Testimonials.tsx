import React from 'react';
import { ContentTestimonials } from '../../../Contents';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledTestimonials } from '../../../Styles/Home/Testimonials/Testimonials.styled';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

interface TestimonialsProps {
  xsmall: boolean;
  small: boolean;
  xlarge: boolean;
}

const Testiominials = ({ xsmall, small, xlarge }: TestimonialsProps) => {
  const [slideState, setSlideState] = React.useState(2);

  React.useEffect(() => {
    if (xsmall) {
      setSlideState(1);
    } else if (xlarge) {
      setSlideState(3);
    } else {
      setSlideState(2);
    }
  }, [xlarge, xsmall]);

  return (
    <StyledTestimonials className='container'>
      <div className='box'>
        <StyledHeadings className='testimonials-subtitle' as='h5'>
          {ContentTestimonials.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings className='testimonials-title' as='h2'>
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
        {ContentTestimonials.list_testimonials.map(
          ({ name, testimonial, photo, id, alt }) => {
            return (
              <SwiperSlide key={id}>
                <img src={photo} className='photo-profile' alt={alt}></img>
                <StyledHeadings className='testimonials-name' as='h4'>
                  {name}
                </StyledHeadings>
                <StyledTexts $size='p4' className='testimonials-review'>
                  {testimonial}
                </StyledTexts>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </StyledTestimonials>
  );
};

export default Testiominials;
