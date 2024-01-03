import styled, {css} from "styled-components";

export const StyledCheckingHero = styled.section`
  ${({theme}) => css`
    ${theme.sub_pages.sub_pages_hero};

    .bank-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .bank {
      width: 300px;
    }
  `}

`