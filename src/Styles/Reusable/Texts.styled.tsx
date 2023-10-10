import styled, { css } from "styled-components";

interface TextsProps {
  $device: "mobile" | "desktop";
  $size: "p1" | "p2" | "p3";
}

export const StyledTexts = styled.p<TextsProps>`
  ${({theme, $size, $device }) => css`
  && {  
  font-family: "Source Sans 3", sans-serif;
    color: ${theme.colors.gray_auxiliary.gray_1};
    //P1

    ${$size === "p1" &&
    `
    ${
      ($device === "desktop" &&
        `
        font-size: 2.4rem;
        line-height: 130%;
    `) ||
      ($device === "mobile" &&
        `
        font-size: 1.8rem;
        line-height: 130%;
    `)
    }
  `}

    //P2


${$size === "p2" &&
    `
    
    ${
      ($device === "desktop" &&
        `
        font-size: 1.6rem;
        line-height: 140%;
    `) ||
      ($device === "mobile" &&
        `
        font-size: 1.4rem;
        line-height: 150%;
    `)
    }
  `}

//P3

${$size === "p3" &&
    `
    
    ${
      ($device === "desktop" &&
        `
        font-size: 1.4rem;
        line-height: 150%;
    `) ||
      ($device === "mobile" &&
        `
        font-size: 1.4rem;
        line-height: 150%;
    `)
    }
  `}

} 

  `}
`;
