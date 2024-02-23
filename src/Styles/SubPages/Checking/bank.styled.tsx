import styled, { css } from 'styled-components';

interface BankProps {
  $small: boolean;
}

export const StyledBank = styled.div<BankProps>`
  ${({ theme, $small }) => css`
    && {
      .phone-wrapper {
        position: relative;
        width: max-content;
        overflow-y: hidden;
        overflow-x: visible;
        padding: 2rem 15rem;
        perspective: 70rem;

        .background-phone,
        .bank-card {
          position: absolute;
        }

        .bank-card {
          width: 90px;
          transform: translate(50%, -50%);
          top: calc(50% + -5rem);
          left: calc(50% + -2.8rem);
          animation: bank-move 20s linear infinite alternate;
        }

        .background-phone {
          width: 11rem;
          transform: translate(50%, -50%);
          top: calc(50%);
          right: calc(50% + -6.9rem);
        }
        .drop {
          width: 3rem;
          height: 3rem;
          position: absolute;
          transform: matrix(0.98, 0.17, -0.21, 0.98, 0, 0) translate(-50%, -50%);
          animation: drop-show 20s linear infinite;

          top: 50%;
          right: calc(50% + -4.2rem);
          z-index: 999;
          background: #4488ee;
          border-radius: 50%;
          border: none;
        }

        .phone {
          width: 20rem;
          overflow: visible;
          margin-left: 5rem;
        }

        .shadow-card {
          position: absolute;
          width: 25rem;
          left: 0;
          bottom: 0;
          animation: shadow-card 20s linear infinite;
        }
      }

      .shadow-phone {
        position: absolute;
        transform: translate(-50%, -50%);
        width: 30rem;
        bottom: 2rem;
        right: 8%;
      }

      //background

      @keyframes background-hide {
        0%,
        40% {
          opacity: 1;
        }

        50%,
        100% {
          opacity: 0;
        }
      }

      //bank-card

      @keyframes bank-move {
        0%,
        10% {
          transform: translate(50%, -50%) translateY(0px) rotateZ(0deg);
          scale: 1;
        }

        20% {
          transform: translateY(100px) translateX(-160px) rotateZ(50deg)
            rotateX(-20deg);
          scale: 1.2;
        }

        30% {
          transform: translateY(100px) translateX(-160px) rotateZ(60deg)
            rotateX(-20deg);
          scale: 1.2;
        }

        35% {
          z-index: 2;
        }

        40% {
          transform: translateY(100px) translateX(-150px) rotateZ(50deg)
            rotateX(-20deg);
          scale: 1.2;
          z-index: 2;
        }

        50% {
          transform: translateY(100px) translateX(-150px) rotateZ(60deg)
            rotateX(-20deg);
          scale: 1.2;
          z-index: 2;
        }

        60% {
          transform: translateY(100px) translateX(-150px) rotateZ(50deg)
            rotateX(-20deg);
          scale: 1.2;
          z-index: 2;
        }

        70% {
          transform: translateY(100px) translateX(-150px) rotateZ(60deg)
            rotateX(-20deg);
          scale: 1.2;
          z-index: 2;
        }

        80% {
          transform: translateY(100px) translateX(-160px) rotateZ(50deg)
            rotateX(-20deg);
          scale: 1.2;
          z-index: 2;
        }

        85% {
          z-index: 0;
        }

        90%,
        100% {
          transform: translate(50%, -50%) translateY(0px) rotateZ(0deg);
          scale: 1;
          z-index: 0;
        }
      }

      //drops

      @keyframes drop-show {
        0%,
        15% {
          opacity: 0;
        }

        20% {
          opacity: 1;
        }

        25% {
          opacity: 1;
          ${theme.checking_animation.box_shadow_normal};
          scale: 1;
        }

        35% {
          opacity: 0.9;
          ${theme.checking_animation.box_shadow_reduced};
          scale: 0.95;
        }

        45% {
          opacity: 1;
          ${theme.checking_animation.box_shadow_normal};
          scale: 1;
        }

        55% {
          opacity: 0.9;
          ${theme.checking_animation.box_shadow_reduced};
          scale: 0.95;
        }

        65% {
          opacity: 1;
          ${theme.checking_animation.box_shadow_normal};
          scale: 1;
        }

        75% {
          opacity: 0.9;
          ${theme.checking_animation.box_shadow_reduced};
          scale: 0.95;
        }

        85%,
        100% {
          opacity: 0;
        }
      }

      @keyframes shadow-card {
        0%,
        15% {
          opacity: 0;
          transform: translateX(100px);
          scale: 0.6;
        }

        20% {
          opacity: 1;
          transform: translateX(0px) rotateZ(-10deg) translateY(10px);
          scale: 1;
        }

        30% {
          opacity: 1;
          transform: rotateZ(10deg) translateY(10px);
          scale: 1;
        }

        40% {
          opacity: 1;
          transform: rotateZ(-10deg) translateY(10px);
          scale: 1;
        }

        50% {
          opacity: 1;
          transform: rotateZ(10deg) translateY(10px);
          scale: 1;
        }

        60% {
          opacity: 1;
          transform: rotateZ(-10deg) translateY(10px);
          scale: 1;
        }

        70% {
          opacity: 1;
          transform: rotateZ(10deg) translateY(10px);
          scale: 1;
        }

        80% {
          opacity: 1;
          transform: rotateZ(-10deg) translateY(10px);
          scale: 1;
        }

        90%,
        100% {
          opacity: 0;
          transform: translateX(100px);
          scale: 0.6;
        }
      }
    }
  `}
`;
