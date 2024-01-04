import styled, {css} from "styled-components";

interface CheckingHeroProps {
  $small: boolean;
}

export const StyledCheckingHero = styled.section<CheckingHeroProps>`
  ${({theme, $small}) => css`

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

`