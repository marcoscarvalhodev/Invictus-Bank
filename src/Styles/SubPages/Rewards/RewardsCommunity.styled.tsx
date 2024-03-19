import styled, { css } from 'styled-components';

export const StyledRewardsCommunity = styled.section`
  ${({ theme }) => css`
    &&& {
      ${theme.sub_pages.sub_pages_advantages};

      .people-hands {
        width: 60rem;
        border-radius: 0.4rem;
      }

      .access-link {
        margin-left: -0.6rem;
      }

      ${theme.media_query.small`
    flex-direction: column-reverse;

    .people-hands {
      width: 100%;
      
    }
    `}//query-small
    }
  `}
`;
