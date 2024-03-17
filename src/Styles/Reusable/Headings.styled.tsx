import styled, { css } from 'styled-components';

interface headingProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

export const StyledHeadings = styled.h1<headingProps>`
  ${({ theme, as }) => css`
    font-family: 'Sora', sans-serif;
    color: ${theme.colors.black_auxiliary.black_normal};

    //H1

    ${as === 'h1' &&
    css`
      color: ${theme.colors.black_auxiliary.black_normal};

      ${theme.media_query.above_small`
        font-size: 6.4rem;
        line-height: 100%;
      `} //query-desktop

      ${theme.media_query.small`
        font-size: 4.2rem;
        line-height: 120%;
      `} //query-mobile
    `}

    //H2

    ${as === 'h2' &&
    css`
      color: ${theme.colors.black_auxiliary.black_normal};
      ${theme.media_query.above_small`
          font-size: 5.2rem;
          line-height: 110%;
        `} //query-desktop

      ${theme.media_query.small`
          font-size: 3.6rem;
          line-height: 120%;
        `} //query-mobile
    `}


//H3

${as === 'h3' &&
    css`
      ${theme.media_query.above_small`
          font-size: 3.6rem;
          line-height: 120%;
        `} //query-desktop

      ${theme.media_query.small`
          font-size: 2.4rem;
          line-height: 120%;
        `} //query-mobile
    `}


//H4

${as === 'h4' &&
    css`
      ${theme.media_query.above_small`
          font-size: 2.4rem;
          line-height: 130%;
        `} //query-desktop

      ${theme.media_query.small`
          font-size: 1.8rem;
          line-height: 130%;
        `} //query-mobile
    `}


//H5

${as === 'h5' &&
    css`
      text-transform: uppercase;
      background: linear-gradient(
        220.94deg,
        ${theme.colors.blue_main.primary_normal} 14.43%,
        ${theme.colors.blue_main.secondary_dark} 85.28%
      );

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;

      ${theme.media_query.above_small`
          font-size: 1.8rem;
          line-height: 140%;
        `} //query-desktop

      ${theme.media_query.small`
          font-size: 1.6rem;
          line-height: 150%;
        `} //query-mobile
    `}
  `}
`;
