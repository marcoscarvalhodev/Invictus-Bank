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
        padding: 9.6rem 2.4rem;

        .flex-hero-2 {
          padding-top: 0px;
        }
      `}
    }
  `}
`;
