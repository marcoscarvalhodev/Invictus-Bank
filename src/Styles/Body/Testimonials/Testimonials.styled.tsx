import styled, {css} from 'styled-components';

export const StyledTestimonials = styled.section`
  ${({theme}) => css`

  && {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  .swiper {
      position: relative;
      padding: 30px 0px;
      width: 100vw;
    }

  .testimonials-subtitle {
    margin-left: 4px;
  }
    
  .testimonials-title {
    width: 500px;
    padding: 1.6rem 0rem;
  }

  h1 {
    font-size: 48px;
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
        width: 100vw;
      }

      .swiper-pagination-progressbar-fill {
        --swiper-theme-color: linear-gradient(220.94deg, ${theme.colors.blue_main.primary_normal} 14.43%, ${theme.colors.blue_main.secondary_dark} 85.28%);
      }
    
    }
  `}
    
    
`;
