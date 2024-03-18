import styled, { css } from 'styled-components';

interface CardsSlidesProps {
}

export const StyledCardsSlides = styled.section<CardsSlidesProps>`
  ${({ theme }) => css`
    ${theme.sub_pages.sub_pages_slides};
    ${theme.sub_pages.sub_pages_advantages};
    && {
      background: ${theme.colors.white_auxiliary.white_dark};
      min-width: 100vw;

      .container {
        display: flex;
        flex-direction: column;
        padding: 9.6rem 2.4rem;
      }

      .slides-wrapper {
        grid-template-columns: 1fr 1fr;
      }

      .slides {
        justify-content: start;
        align-items: center;

        .bullet-card {
          width: 20rem;
          height: auto;
        }
      }

      ${theme.media_query.small`
        .slides-wrapper {
          grid-template-columns: 1fr;
        }
      `}//query-small
    }
  `}
`;
