import styled, { css } from 'styled-components';


export const StyledSavingsAdvantages = styled.section`
  ${({ theme }) => css`
    && {
      ${theme.sub_pages.sub_pages_advantages};

      ${theme.media_query.small`
        padding: 9.6rem 2.4rem;

        flex-direction: column;

        .flex-2 {
          width: 100%;
        }

        .advantages-image {
          max-width: 100%;
        }

        .flex-2 {
          margin: 0px;
        }
      `}//query-small
    }
  `}
`;
