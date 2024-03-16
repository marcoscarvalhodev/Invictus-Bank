import styled, { css } from 'styled-components';

import SVGHeroSmall from '../../../assets/svg/bg-home-mobile.svg?url';
import SVGHeroLarge from '../../../assets/svg/bg-home.svg?url';

interface HeroBackgroundProps {}

export const StyledHeroBackground = styled.div<HeroBackgroundProps>`
  ${({ theme }) => css`
    .svg-background {
      width: 100%;
      z-index: -1;
      position: absolute;
      height: 100%;
      overflow: hidden;

      ${theme.media_query.xsmall`width: 180%;`};
      ${theme.media_query.small`width: 150%;`};
    }

    ${theme.media_query.xsmall`
      .svg-background {
        background: url(${SVGHeroSmall}) no-repeat;
        
        
      }
    `}

    ${theme.media_query.xsmall_small`
      .svg-background {
        background: url(${SVGHeroLarge}) no-repeat;
        
      }
    `}

    /*.rect-1 {
      animation: bg-home-rect 3s ease 0.5s infinite alternate;
    }

    .rect-2 {
      animation: bg-home-rect 3s ease 1s infinite alternate;
    }

    .rect-3 {
      animation: bg-home-rect 3s ease 1.5s infinite alternate;
    }

    .rect-4 {
      animation: bg-home-rect 3s ease 1s infinite alternate;
    }*/

    .bg-blur-1 {
      transform: translate3d(0, -100px, 0);
    }

    .bg-blur-2 {
      transform: translate3d(0, -150px, 0);
    }

    @keyframes bg-home-rect {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(0, 30px, 0);
      }
    }
  `}
`;
