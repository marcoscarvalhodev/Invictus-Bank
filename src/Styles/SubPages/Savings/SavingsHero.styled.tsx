import styled, { css } from 'styled-components';

interface SavingsHeroProps {
  $small: boolean;
}

export const StyledSavingsHero = styled.section<SavingsHeroProps>`
  ${({ theme, $small }) => css`
    && {
      ${theme.sub_pages.sub_pages_hero};

      ${$small &&
      css`
        flex-direction: column;

        .flex-hero-2 {
          padding-top: 0px;
        }
      `}
    }
  `}
`;
