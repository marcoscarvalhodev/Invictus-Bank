import styled, { css } from 'styled-components';
import Arrow from '../../../assets/svg/icon-arrow.svg?url';

interface TestimonialsProps {
  $small: boolean;
}

export const StyledTestimonials = styled.section<TestimonialsProps>`
  ${({ theme, $small }) => css`
    && {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;

      .swiper {
        position: relative;
        padding: 24px 0px;
        width: 100%;
        overflow: visible;
      }

      .swiper-wrapper {
        display: flex;
        width: max-content;
      }
      

      .testimonials-subtitle {
        margin-left: 4px;
      }

      .testimonials-title {
        ${$small ? 'width: auto': 'width: 580px'};
        padding-top: 16px;
      }

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
        height: 36px;
        width: 36px;
        position: absolute;
        --swiper-theme-color: ${theme.colors.blue_main.primary_dark};
        left: auto;
        top: auto;
        bottom: -20px;
        right: -5px;
        &:after {
          font-size: 0px;
          content: '';
          display: inline-block;
          width: 36px;
          height: 36px;
          background: url(${Arrow}) no-repeat center center;
        }

        &:hover {
          transform: scale(1.1);
        }
      }

      .swiper-button-prev {
        right: 35px;
        bottom: -21px;
        &:after {
          transform: rotate(180deg);
        }
      }


      .photo-profile {
        width: 56px;
        height: 56px;
        border-radius: 50%;
      }

      .testimonials-name {
        margin: ${theme.spacing.gap_1} 0px;
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
