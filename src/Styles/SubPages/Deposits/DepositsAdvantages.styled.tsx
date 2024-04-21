import styled, { css } from 'styled-components';

export const StyledDepositsAdvantages = styled.section`
  ${({ theme }) => css`
    &&& {
      padding-top: 4rem;
      ${theme.sub_pages.sub_pages_advantages};

      .deposits-hourglass {
        width: 60rem;
        border-radius: 0.4rem;
      }

      ${theme.media_query.small`
    flex-direction: column-reverse;

    .deposits-hourglass {
      width: 100%;
      
    }
    `}//query-small
    }
  `}
`;
