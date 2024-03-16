import styled, { css } from 'styled-components';

export const StyledRewardsHero = styled.section`
  ${({ theme }) => css`
    ${theme.sub_pages.sub_pages_hero};
    overflow: hidden;

    &&& {
      ${theme.media_query.small`
      flex-direction: column;
      padding: 9.6rem 2.4rem;

      .flex-hero-1 {
        background: ${theme.colors.white_auxiliary.white_light};
      }
    `}
    }
  `}
`;
