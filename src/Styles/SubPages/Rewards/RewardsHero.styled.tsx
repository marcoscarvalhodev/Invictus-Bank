import styled, { css } from 'styled-components';

interface StyledRewardsHeroProps {
  $small: boolean;
}

export const StyledRewardsHero = styled.section<StyledRewardsHeroProps>`
  ${({ theme, $small }) => css`
    ${theme.sub_pages.sub_pages_hero};
    overflow: hidden;
    &&& {
      ${$small &&
      css`
        flex-direction: column;
        padding: 9.6rem 2.4rem;

        .flex-hero-1 {
          background: ${theme.colors.white_auxiliary.white_light};
        }
        
      `}
    }
  `}
`;
