import styled, { css } from "styled-components";

interface headingProps {
  $device: "desktop" | "mobile";
  as: "h1" | "h2" | "h3" | "h4" | "h5";
}

export const StyledHeadings = styled.h1<headingProps>`
  ${({ as, $device }) => css`
    font-family: "Sora", sans-serif;

    //H1

    ${as === "h1" &&
    $device === "desktop" &&
    `
  font-size: 6.4rem;
  line-height: 100%;
`}

    ${as === "h1" &&
    $device === "mobile" &&
    `
  font-size: 3.6rem;
  line-height: 120%;

`}

//H2

${as === "h2" &&
    $device === "desktop" &&
    `
  font-size: 5.2rem;
  line-height: 110%;
`}

${as === "h2" &&
    $device === "mobile" &&
    `
  font-size: 3.6rem;
  line-height: 120%;

`}

//H3

${as === "h3" &&
    $device === "desktop" &&
    `
  font-size: 3.6rem;
  line-height: 120%;
`}

${as === "h3" &&
    $device === "mobile" &&
    `
  font-size: 2.4rem;
  line-height: 120%;

`}

//H4

${as === "h4" &&
    $device === "desktop" &&
    `
  font-size: 2.4rem;
  line-height: 130%;
`}

${as === "h4" &&
    $device === "mobile" &&
    `
  font-size: 1.8rem;
  line-height: 130%;

`}

//H5

${as === "h5" &&
    $device === "desktop" &&
    `
  font-size: 1.8rem;
  line-height: 140%;
`}

${as === "h5" &&
    $device === "mobile" &&
    `
  font-size: 1.6rem;
  line-height: 150%;

`}
  `}
`;
