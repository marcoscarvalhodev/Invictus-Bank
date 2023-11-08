import styled, { css } from "styled-components";

interface headingProps {
  $device: "desktop" | "mobile";
  as: "h1" | "h2" | "h3" | "h4" | "h5";

}

export const StyledHeadings = styled.h1<headingProps>`
  ${({ theme, as, $device}) => css`
    font-family: "Sora", sans-serif;
    color: ${theme.colors.black_auxiliary.black_normal};
    
    //H1

    ${as === "h1" &&
    css`
    color: ${theme.colors.black_auxiliary.black_normal};

    ${
      ($device === "desktop" &&
        css`
    font-size: 6.4rem;
    line-height: 100%;
    `) ||
      ($device === "mobile" &&
        css`
    font-size: 3.6rem;
      line-height: 120%;
    `)
    }
  `}

    //H2

    ${as === "h2" &&
    css`
    color: ${theme.colors.black_auxiliary.black_normal};
    ${
      ($device === "desktop" &&
        css`
        font-size: 5.2rem;
        line-height: 110%;
    `) ||
      ($device === "mobile" &&
        css`
        font-size: 3.6rem;
        line-height: 120%;
    `)
    }
  `}


//H3

${as === "h3" &&
    css`

    ${
      ($device === "desktop" &&
        css`
        font-size: 3.6rem;
        line-height: 120%;
    `) ||
      ($device === "mobile" &&
        css`
        font-size: 2.4rem;
        line-height: 120%;
    `)
    }
  `}


//H4

${as === "h4" &&
    css`

    ${
      ($device === "desktop" &&
        css`
        font-size: 2.4rem;
        line-height: 130%;
    `) ||
      ($device === "mobile" &&
        css`
        font-size: 1.8rem;
        line-height: 130%;
    `)
    }
  `}


//H5

${as === "h5" &&
    css`
    text-transform: uppercase;
    background: linear-gradient(220.94deg, ${theme.colors.blue_main.primary_normal} 14.43%, ${theme.colors.blue_main.secondary_dark} 85.28%);
    
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    
    ${
      ($device === "desktop" &&
        css`
        font-size: 1.8rem;
        line-height: 140%;
    `) ||
      ($device === "mobile" &&
        css`
        font-size: 1.6rem;
        line-height: 150%;
    `)
    }
  `}
  `}
`;
