import styled, { css } from 'styled-components';

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

function containerMoveEach() {
  let containerMoveEach = '';

  for (let i = 0; i < 10; i++) {
    const evenOdd = i % 2 === 0 ? 'even' : 'odd';

    containerMoveEach += `
     ${
       evenOdd === 'even'
         ? `
             .container-coin-${i} {
              animation: moveCoinGiftRight 12s ${10 / i}s linear infinite;
              transform: rotateY(0deg) rotateX(100deg) rotateZ(230deg);

              .coined {
                animation: spinCoinGift 5s linear infinite reverse;
              }
             }


             @keyframes moveCoinGiftRight {
              0%,
              20% {
                transform: translateY(0px) rotateZ(0deg) rotateY(180deg);
              }
      

              70%, 90% {
                transform: translateY(500px) rotateZ(calc(-200deg + ${
                  i * -5
                }deg)) rotateY(180deg) translateX(calc(150px));           
                }

                91%, 100% {
                  transform: translateY(500px) rotateZ(calc(-200deg + ${
                    i * -5
                  }deg)) rotateY(180deg) translateX(calc(150px)); 
                }

                
            }

           `
         : `
             .container-coin-${i} {
              animation: moveCoinGiftLeft 12s ${5 / i}s linear infinite;
              transform: rotateY(0deg) rotateX(100deg) rotateZ(230deg);

              .coined {
                animation: spinCoinGift 5s linear infinite;
              }
             }


             @keyframes moveCoinGiftLeft {
              0%,
              20% {
                transform: translateY(0px) rotateZ(100deg) rotateY(180deg);
              }
      

              70%, 90% {
                transform: translateY(500px) rotateZ(calc(200deg + ${
                  i * 5
                }deg)) rotateY(180deg) translateX(calc(-100px));           
                }

                91%, 100% {
                  transform: translateY(500px) rotateZ(calc(200deg + ${
                    i * 5
                  }deg)) rotateY(180deg) translateX(calc(-100px));  
                }
            }
           `
     }
    `;
  }

  return `
    ${containerMoveEach}
  `;
}

interface StyledRewardsCoinsProps {}

export const StyledRewardsCoins = styled.div<StyledRewardsCoinsProps>`
  ${({ theme }) => css`
    &&& {
      height: 100px;
      width: 100px;
      top: -100%;
      left: 100px;
      z-index: 9;
      transform: rotateY(0deg) rotateX(90deg) rotateZ(180deg) translateZ(30px);
      .container-coin {
        width: 4rem;
        height: 4rem;
        position: absolute;

        left: calc(50% + -30px);
        z-index: 9;
      }

      ${theme.media_query.above_small`
        ${theme.coin.coin_parameters};
        ${eachFigure()};
        ${containerMoveEach()};
      `} //media-query

      @keyframes spinCoinGift {
        0% {
          transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
        }

        25% {
          transform: rotateX(45deg) rotateY(180deg) rotateZ(0deg);
        }

        50% {
          transform: rotateX(90deg) rotateY(360deg) rotateZ(0deg);
        }

        75% {
          transform: rotateX(135deg) rotateY(540deg) rotateZ(0deg);
        }

        100% {
          transform: rotateX(180deg) rotateY(720deg) rotateZ(0deg);
        }
      }
    }
  `}
`;
