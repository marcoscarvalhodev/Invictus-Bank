import styled, { css } from 'styled-components';


export const StyledSavingsSlides = styled.section`
  ${({ theme}) => css`
    && {
      .container {
        flex-direction: column;
      }
      ${theme.sub_pages.sub_pages_slides};

      ${theme.media_query.small`
        .slides-wrapper {
          flex-direction: column;
          grid-template-columns: 1fr 1fr;
        }

        .container {
          padding: 9.6rem 2.4rem;
        }
      `}//query-small

      ${theme.media_query.medium`
        .slides-wrapper {
          grid-template-columns: 1fr 1fr 1fr;
        }
      `}//query-medium

      ${theme.media_query.xsmall`
        .slides-wrapper {
          grid-template-columns: 1fr;
        }
      `}//query-extra-small
    }
  `}
`;
