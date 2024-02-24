import styled, { css } from 'styled-components';

interface PigProps {
  $small: boolean;
}

function eachFigure() {
  let figureValue = '';

  for (let i = 0; i < 20; i++) {
    figureValue += `
      .figureSide-${i} {
        transform: translate3d(-50%, -50%, 0) rotateY(90deg)
          rotateX(calc((${i + 1} - 1) * 18deg)) translateZ(2rem);
      };
    `;
  }

  return `
    ${figureValue}
  `;
}

function eachCoin() {
  let eachCoin = '';

  for (let i = 0; i < 16; i++) {
    eachCoin += `
      .container-${i + 1} {
        &:not(:first-child) {
          position: absolute;
          top: calc(${i} * 8px);
          height: 10px;
          z-index: -${i};

        }
      }
    `;
  }

  return `${eachCoin}`;
}

export const StyledPig = styled.div<PigProps>`
  ${({ theme, $small }) => css`
    && {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 4;

      .container-pig {
        width: 40px;
        height: 40px;
        position: absolute;
        perspective: 300px;
        animation: moveCoin 5s linear infinite;
        top: calc(-9.6rem + -15px + ${$small ? `-40px` : '-70px'});
        left: calc(50% + -20px);
        z-index: 0;
      }

      .pig-section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        position: relative;
      }

      .pig-wrapper {
        position: relative;

        .firework {
          width: 0.4rem;
          height: 4rem;

          position: absolute;
          transform: translateY(-5px);
          transform-origin: 50% 100%;
          top: -4rem;
          left: calc(50% + -0.2rem);
          overflow: hidden;
          border-radius: 50%;
        }

        .firework:nth-child(1) {
          transform: rotate(45deg) translateY(-5px);
        }
        .firework:nth-child(2) {
          transform: rotate(90deg) translateY(-5px);
        }
        .firework:nth-child(3) {
          transform: rotate(270deg) translateY(-5px);
        }
        .firework:nth-child(4) {
          transform: rotate(315deg) translateY(-5px);
        }

        .firework::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 100%;
          height: 2rem;
          background: ${theme.colors.blue_main.primary_light};
          border-radius: 50%;
          animation: firework 5s 0s ease-in-out infinite;
        }
      }

      .pig {
        width: 200px;
      }

      .hole {
        width: 13px;
        height: 60px;
        background-color: #e7a7ab;
        position: absolute;
        left: calc(50% + -7px);
        top: ${$small ? '22px' : '21.5px'};
        z-index: 998;
      }

      .container-pig {
        .coined {
          width: 40px;
          height: 40px;
          position: absolute;
          transform-style: preserve-3d;
          animation: spinCoin 5s linear infinite;
          backface-visibility: hidden;
        }
      }

      .face {
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 40px;
        backface-visibility: hidden;
      }

      .front {
        transform: translate3d(0, 0, 0.32rem) rotateY(0deg);
      }

      .back {
        transform: rotateY(180deg) translate3d(0, 0, 0.32rem);
      }

      .side {
        width: 0.64rem;
        height: 0.32rem;
        background: #f7e259;
        position: absolute;
        left: 50%;
        top: 50%;
        backface-visibility: hidden;
        border-top: #f7e259 0.32rem solid;
        border-bottom: #f7e259 0.32rem solid;
      }

      .figureSide-0,
      .figureSide-10,
      .figureSide-11,
      .figureSide-12,
      .figureSide-13,
      .figureSide-14,
      .figureSide-15,
      .figureSide-16,
      .figureSide-17,
      .figureSide-18,
      .figureSide-19 {
        background-color: #f8d548;
        border-top: #f8d548 0.32rem solid;
        border-bottom: #f8d548 0.32rem solid;
      }

      .container-1,
      .container-2,
      .container-3,
      .container-4,
      .container-5,
      .container-6,
      .container-7,
      .container-8,
      .container-9,
      .container-10,
      .container-11,
      .container-12,
      .container-13,
      .container-14,
      .container-15,
      .container-16 {
        width: 40px;

        perspective: 300px;

        transform: translateZ(-0.4em);

        .coined {
          width: 40px;
          height: 40px;
          position: absolute;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          transform: rotateX(75deg);
        }
      }

      .container-4 {
        left: 10px;
      }

      ${eachFigure()};
      ${eachCoin()};

      @keyframes spinCoin {
        0%,
        20% {
          transform: rotateX(0deg) rotateY(0deg) rotateZ(90deg);
        }

        40% {
          transform: rotateX(45deg) rotateY(-180deg) rotateZ(0deg);
        }
        ${$small ? '68%' : '70%'},
        100% {
          transform: rotateX(60deg) rotateY(calc(-2 * 180deg + -90deg))
            rotateZ(0deg);
        }
      }

      @keyframes moveCoin {
        0%,
        20% {
          transform: translateY(${$small ? '-6px' : '-10px'});
        }

        80%,
        100% {
          transform: translateY(
            calc(9.6rem + 35px + ${$small ? `45px` : '75px'})
          );
        }
      }

      @keyframes firework {
        0%,
        80% {
          top: 100%;
        }

        100% {
          top: -50%;
        }
      }

      ${$small &&
      css`
        .pig-section {
          padding: 9.4rem 0rem;
        }
      `}
    }
  `}
`;
