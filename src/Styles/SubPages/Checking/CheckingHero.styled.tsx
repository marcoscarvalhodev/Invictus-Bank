import styled, { css } from 'styled-components';

export const StyledCheckingHero = styled.section`
  ${({ theme }) => css`
    && {
      position: relative;
      ${theme.sub_pages.sub_pages_hero};
      .flex-hero-2 {
        padding-top: 0px;
      }
      ${theme.media_query.small`
        flex-direction: column;
        padding: 9.6rem 2.4rem 9.6rem 2.4rem;
      `}//query-small
    }
  `}
`;
