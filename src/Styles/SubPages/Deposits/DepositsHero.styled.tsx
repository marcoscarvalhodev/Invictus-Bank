import styled, { css } from 'styled-components';

export const StyledDepositsHero = styled.section`
  ${({ theme }) => css`
    ${theme.sub_pages.sub_pages_hero};

    .safe {
      width: 230px;
    }

    .safe-wrapper {
      position: relative;
      perspective: 500px;
    }

    .shadow-wrapper {
      position: absolute;
      width: 400px;
      transform: translate(-50%, -50%);
      bottom: calc(-50% + -50px);
      left: calc(50% + -50px);
    }

    .safe-door,
    .safe-shadows {
      position: absolute;
      width: calc(232px * 0.78779840848);
      height: 183px;
      animation: safe-door 3s linear alternate infinite;
      right: 50%;
      top: calc(50% + 8.8px);
      transform: translate(50%, -50%);
      overflow: visible;
    }

    .safe-door {
      z-index: 3;

      #digits-shadow,
      #opener-shadow {
        animation: safe-shadows 3s linear alternate infinite;
      }
    }

    .safe-shadows {
      z-index: 1;
      animation: door-shadows 3s linear alternate infinite;

      #safe-shadow-2 {
        animation: door-shadows-2 3s linear alternate infinite;

        #lock-ball-wrapper {
          animation: lock-ball 3s linear infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
      }
    }

    @keyframes lock-ball {
      0%,
      60% {
        transform: rotateY(70deg);
      }

      100% {
        transform: rotateY(50deg);
      }
    }}

    @keyframes door-shadows-2 {
      0%,
      70% {
        transform: translateX(0px);
      }

      100% {
        transform: translateX(20px);
      }
    }

    @keyframes door-shadows {
      0%,
      30% {
        transform: rotateY(0deg) translate(50%, -50%) translateX(0px);
      }

      100% {
        transform: rotateY(-60deg) translate(50%, -50%) translateX(25px);
      }
    }

    @keyframes safe-shadows {
      0%,
      30% {
        transform: translateX(0px);
      }

      100% {
        transform: translateX(7px);
      }
    }

    @keyframes safe-door {
      0%,
      30% {
        transform: rotateY(0deg) translate(50%, -50%);
      }

      100% {
        transform: rotateY(-60deg) translate(50%, -50%);
      }
    }
  `}
`;
