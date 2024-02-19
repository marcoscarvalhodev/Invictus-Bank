import styled, { css } from 'styled-components';

interface DepositsHeroProps {
  $small: boolean;
}

export const StyledDepositsHero = styled.section<DepositsHeroProps>`
  ${({ theme, $small }) => css`
    ${theme.sub_pages.sub_pages_hero};

    &&& {
      overflow: hidden;
      .safe {
        width: 230px;
        position: relative;
        z-index: 1;
      }

      .safe-wrapper {
        position: relative;
        perspective: 500px;
        margin-bottom: 4rem;
      }

      .shadow-wrapper {
        position: absolute;
        width: 450px;
        transform: translate(-50%, -50%);
        bottom: calc(-50% + -50px);
        left: calc(50% + -25px);
      }

      .safe-door,
      .safe-shadows {
        position: absolute;
        width: calc(232px * 0.78779840848);
        height: 183px;
        animation: safe-door 5s linear alternate infinite;
        right: 50%;
        top: calc(50% + 8.8px);
        transform: translate(50%, -50%);
        overflow: visible;
      }

      .safe-door {
        z-index: 3;

        #digits-shadow {
          animation: safe-shadows 5s linear alternate infinite;
        }

        #opener-shadow {
          animation: opener-shadows 5s linear alternate infinite;
        }

        #opener-wrapper {
          animation: spin-opener 10s ease infinite;

          transform-origin: center;
        }
      }

      .safe-shadows {
        z-index: 1;
        animation: door-shadows 5s linear alternate infinite;

        #safe-shadow-2 {
          animation: door-shadows-2 5s linear alternate infinite;

          #lock-ball-wrapper {
            animation: lock-ball 5s linear infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
        }
      }

      .door-shadow-animation {
        position: absolute;
        width: 300px;
        transform: translate(-50%, -50%);
        bottom: calc(-50%);
        left: calc(50% + -40px);

        animation: door-shadow-animation 5s linear infinite alternate;
      }

      .safe-clock {
        position: absolute;
        width: 200px;
        transform: translate(0, -50%);
        right: calc(-50% + 30px);
        bottom: calc(-50% + 44px);
        z-index: 0;
      }

      @keyframes door-shadow-animation {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
          opacity: 0;
        }

        100% {
          transform: translate(-50%, -50%) rotate(45deg);
          opacity: 1;
        }
      }

      @keyframes spin-opener {
        0%,
        5% {
          rotate: 0deg;
        }

        40% {
          rotate: -180deg;
        }

        41%,
        85% {
          rotate: -180deg;
        }

        100% {
          rotate: 0deg;
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
      }

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

      @keyframes opener-shadows {
        0%,
        30% {
          transform: translateX(0px);
        }

        100% {
          transform: translateX(-7px);
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

      ${$small &&
      css`
        flex-direction: column;
        padding-bottom: 9.6rem;
      `}
    }
  `}
`;
