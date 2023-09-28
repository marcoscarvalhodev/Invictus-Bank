import styled, { css } from "styled-components";

interface ParagraphsProps {
  $device: 'mobile' | 'desktop';
  $size: 'p1' | 'p2' | 'p3';
}

export const StyledParagraphs = styled.p<ParagraphsProps>`
  ${({ $size, $device }) => css`
    font-family: "Source Sans 3", sans-serif;

    //P1

    ${$size === "p1" &&
    $device === "desktop" &&
    `
  font-size: 2.4rem;
  line-height: 130%;
`}

    ${$size === "p1" &&
    $device === "mobile" &&
    `
  font-size: 1.8rem;
  line-height: 130%;

`}


//P2

${$size === "p2" &&
    $device === "desktop" &&
    `
  font-size: 1.6rem;
  line-height: 140%;
`}

${$size === "p2" &&
    $device === "mobile" &&
    `
  font-size: 1.4rem;
  line-height: 150%;

`}

//P3

${$size === "p3" &&
    $device === "desktop" &&
    `
  font-size: 1.4rem;
  line-height: 150%;
`}

${$size === "p3" &&
    $device === "mobile" &&
    `
  font-size: 1.4rem;
  line-height: 150%;

`}

  `}
`;
