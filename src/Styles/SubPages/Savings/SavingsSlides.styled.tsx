import styled, { css } from 'styled-components';

export const StyledSavingsSlides = styled.section`
  ${({ theme }) => css`
    && {
      background: ${theme.colors.white_auxiliary.white_dark};
      flex-direction: column;
      .title {
        
        padding-top: 9rem;
      }

      .description {
        padding: calc(${theme.spacing.gap_2} + 1rem) 0;
      }

      .savings-slides-wrapper {
        display: flex;
        gap: 3rem;
        width: 100%;
        justify-content: center;
        .savings-slides {
          border-radius: 0.5rem;
          width: 28rem;
          flex-direction: column;
          display: flex;
          
          align-items: center;
          padding: 3rem;
          background: ${theme.colors.white_auxiliary.white_light};
          gap: 3rem;
        .savings-slide-titles {
          text-align: center;
        }


        
        .savings-slide-links {
          margin-top: auto;
        }
          
        }
        svg {
          width: 10rem;
          height: 10rem;
        }
      }
    }
  `}
`;
