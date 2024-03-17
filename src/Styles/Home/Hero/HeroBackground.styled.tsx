import styled, { css } from 'styled-components';

import SVGHeroSmall from '../../../assets/svg/bg-home-mobile.svg?url';
import SVGHeroLarge from '../../../assets/svg/bg-home.svg?url';
import SVGHeroExtraLarge from '../../../assets/svg/bg-home-extra-large.svg?url';

interface HeroBackgroundProps {}

export const StyledHeroBackground = styled.div<HeroBackgroundProps>`
  ${({ theme }) => css`
    width: 100vw;
    height: 100%;
    z-index: -1;
    position: absolute;
    overflow: hidden;
    .svg-background {
      
      ${theme.media_query.xsmall`width: 180%;`};
      ${theme.media_query.small`width: 150%;`};
    }

    ${theme.media_query.xsmall`
      .svg-background-mobile {
        
      }

      .svg-background-desktop, .svg-background-extra-desktop {
        display: none;
      }
    `} //query-extra-small

    ${theme.media_query.xsmall_xlarge`
      .svg-background-desktop {
        
        
        max-width: 144rem;
        
      }

      .svg-background-mobile, .svg-background-extra-desktop {
        display: none;
      }
    `}//query-xsmall_xlarge

${theme.media_query.xlarge`
      .svg-background-extra-desktop {
        
        
      }

      .svg-background-mobile, .svg-background-desktop {
        display: none;
      }
    `}//query- above extra-large



   /* #rect-1 {
      animation: bg-home-rect 3s ease 0.5s infinite alternate;
    }

    #rect-2 {
      animation: bg-home-rect 3s ease 1s infinite alternate;
    }

    #rect-3 {
      animation: bg-home-rect 3s ease 1.5s infinite alternate;
    }

    #rect-4 {
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
