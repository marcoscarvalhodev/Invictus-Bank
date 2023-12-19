import styled, { css } from 'styled-components';

interface PigProps {
 $pigTop: number;
}

function eachFigure() {
  let figureValue = '';

  for (let i = 0; i < 20; i++) {
    figureValue += `
      .figureSide-${i} {
        transform: translate3d(-50%, -50%, 0) rotateY(90deg)
          rotateX(calc((${i + 1} - 1) * 18deg)) translateZ(20px);
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
  ${({ theme, $pigTop}) => css`
    && {
      
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      position: relative;

      .container {
        width: 40px;
        height: 40px;
        position: absolute;
        perspective: 300px;
        animation: moveCoin 3s linear infinite;
        top: calc(${-$pigTop}px + -60px);
        left: calc(50% + -16px);
        transform: translateZ(-0.4em);
        z-index: 1;
      }

      .second-section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        position: relative;
        padding-top: 100px;
      }


      .pig-wrapper {
        position: relative;
        
      }

      .first-section {
        flex: 1;
        width: 100%;
        height: 100%;
        position: relative;
        perspective: 300px;
      }

      .pig {
        width: 200px;
        
        
      }

      .hole {
        width: 13px;
        height: 60px;
        background-color: #E7A7AB;
        position: absolute;
        left: 49%;
        top: 13px;
        z-index: 998;
      }

      .container {
        .coined {
          width: 40px;
          height: 40px;
          position: absolute;
          transform-style: preserve-3d;
          animation: spinCoin 3s linear infinite;
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
        transform: translate3d(0, 0, 0.2rem) rotateY(0deg);
      }

      .back {
        transform: rotateY(180deg) translate3d(0, 0, 0.2rem);
      }

      .side {
        width: 0.4rem;
        height: 0.2rem;
        background: #f7e259;
        position: absolute;
        left: 50%;
        top: 50%;
        backface-visibility: hidden;
        border-top: #f7e259 0.2em solid;
        border-bottom: #f7e259 0.2em solid;
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
        border-top: #f8d548 0.2em solid;
        border-bottom: #f8d548 0.2em solid;
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
        0% {
          transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
        }
        50% {
          transform: rotateX(45deg) rotateY(calc(-360deg)) rotateZ(180deg);
        }

        80%,
        100% {
          transform: rotateX(45deg) rotateY(calc(-2 * 360deg + 90deg))
            rotateZ(360deg);
        }
      }

      @keyframes moveCoin {
        0% {
          transform: translateY(0px);
        }

        100% {
          transform: translateY(calc(${$pigTop}px + 15px + 75px));
        }
      }

      @keyframes moveBag {
        0% {
          transform: translateY(0) rotateX(180deg);
        }

        100% {
          transform: translateY(50px) rotateX(180deg);
        }
      }
    }
  `}
`;
