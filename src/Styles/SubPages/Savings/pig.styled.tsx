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



export const StyledPig = styled.div<PigProps>`
  ${({ theme, $small }) => css`
    && {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 4;

      .container-coin {
        width: 40px;
        height: 40px;
        position: absolute;
        perspective: 100rem;
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

      ${theme.coin.coin_parameters};

      

      ${eachFigure()};
      

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
