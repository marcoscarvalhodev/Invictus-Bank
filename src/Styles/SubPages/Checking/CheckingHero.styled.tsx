import styled, { css } from 'styled-components';

interface CheckingHeroProps {
  $small: boolean;
}

export const StyledCheckingHero = styled.section<CheckingHeroProps>`
  ${({ theme, $small }) => css`
    && {
      ${theme.sub_pages.sub_pages_hero};
      .flex-hero-2 {
        padding-top: 0px;
        
      }
      ${$small &&
      css`
        flex-direction: column;
        padding: 9.6rem 2.4rem 0rem 2.4rem;
      `}
    }
  `}
`;
