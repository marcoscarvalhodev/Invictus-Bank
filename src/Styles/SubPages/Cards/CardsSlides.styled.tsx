import styled, { css } from 'styled-components';

export const StyledCardsSlides = styled.section`
  ${({ theme }) => css`
    ${theme.sub_pages.sub_pages_slides};
    ${theme.sub_pages.sub_pages_advantages};
    && {
      background: ${theme.colors.white_auxiliary.white_dark};
      min-width: 100vw;

      .container {
        display: flex;
        flex-direction: column;
      }

      .slides-wrapper {
        grid-template-columns: 1fr 1fr;
      }

      .slides {
        justify-content: center;
        align-items: center;

        .bullet-card {
          width: 15rem;
          height: auto;
        }
      }
    }
  `}
`;
