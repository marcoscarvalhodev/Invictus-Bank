import styled, { css } from 'styled-components';
import Arrow from '../../../assets/svg/icon-arrow.svg?url';

interface TestimonialsProps {}

export const StyledTestimonials = styled.section<TestimonialsProps>`
  ${({ theme }) => css`
    && {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;

      .swiper {
        position: relative;
        padding: 2.4rem 0rem;
        width: 100%;
        overflow: visible;
      }

      .swiper-wrapper {
        display: flex;
        width: max-content;
      }

      .testimonials-subtitle {
        margin-left: 0.4rem;
      }

      .testimonials-title {
        width: 58rem;
        padding-top: 1.6rem;
      }

      ${theme.media_query.small`
      
      .testimonials-title {
        width: auto;
      }
      
      `}

      .swiper-pagination {
        position: absolute;
        width: 150px;
        height: 6px;
        z-index: 999;
        left: 50%;
        transform: translateX(-50%);
        top: auto;
        bottom: 0px;
      }

      .swiper-slide {
        max-width: 100%;
        padding: 2.4rem 3.6rem;
        border-radius: 50px;
        background-color: ${theme.colors.white_auxiliary.white_normal};
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        min-height: max-content;
      }

      .swiper-button-next,
      .swiper-button-prev {
        height: 3.6rem;
        width: 3.6rem;
        position: absolute;
        --swiper-theme-color: ${theme.colors.blue_main.primary_dark};
        left: auto;
        top: auto;
        bottom: -2rem;
        right: -0.5rem;
        &:after {
          font-size: 0rem;
          content: '';
          display: inline-block;
          width: 3.6rem;
          height: 3.6rem;
          background: url(${Arrow}) no-repeat center center;
        }

        &:hover {
          transform: scale(1.1);
        }
      }

      .swiper-button-prev {
        right: 3.5rem;
        bottom: -2.1rem;
        &:after {
          transform: rotate(180deg);
        }
      }

      .photo-profile {
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
      }

      .testimonials-name {
        margin: ${theme.spacing.gap_1} 0px;
      }

      .testimonials-review {
        margin-top: 0 auto;
      }

      .swiper-pagination-progressbar-fill {
        --swiper-theme-color: linear-gradient(
          220.94deg,
          ${theme.colors.blue_main.primary_normal} 14.43%,
          ${theme.colors.blue_main.secondary_dark} 85.28%
        );
      }
    }
  `}
`;
