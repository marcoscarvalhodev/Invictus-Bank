import styled, { css } from 'styled-components';

export const StyledRewardsHero = styled.section`
  ${({ theme }) => css`
    ${theme.sub_pages.sub_pages_hero};
    overflow: hidden;

    &&& {
      ${theme.media_query.small`
      flex-direction: column;
      padding: ${theme.spacing.global_padding_sides};

      .flex-hero-1 {
        background: ${theme.colors.white_auxiliary.white_light};
      }
    `}
    }
  `}
`;
