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
        overflow: visible;
        perspective: 500px;
        .drop {
          width: 30px;
          height: 30px;
          position: absolute;
          transform: matrix(0.98, 0.17, -0.21, 0.98, 0, 0) translate(0, -50%);
          animation: drop-show 5s linear infinite alternate;
          top: 50%;
          left: calc(50% + -30px);
          z-index: 999;
          background: #3a67da;
          border-radius: 50%;
          border: none;
        }

        .phone {
          width: 200px;
          overflow: visible;

          #background {
            animation: background-hide 5s linear infinite alternate;
          }

          #bank-card {
            animation: bank-move 10s linear infinite;
          }
        }
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
        0% {
          transform: translateY(0px);
        }

        30% {
          transform: translateY(100px) translateX(-300px) rotateZ(70deg) rotateX(-20deg);
          scale: 1.3;
        }

        40% {
          transform: translateY(150px) translateX(-300px) rotateZ(40deg)
            rotateX(-20deg);
          scale: 1.3;
        }

        60% {
          transform: translateY(100px) translateX(-300px) rotateZ(60deg)
            rotateX(-20deg);
          scale: 1.3;
        }

        80% {
          transform: translateY(150px) translateX(-300px) rotateZ(30deg)
            rotateX(-20deg);
          scale: 1.3;
        }

        100% {
          transform: translateY(100px) translateX(-300px) rotateZ(50deg)
            rotateX(-20deg);
          scale: 0;
        }

        
      }

      //drops

      @keyframes drop-show {
        0%,
        10% {
          opacity: 0;
        }

        40% {
          opacity: 1;
        }

        60% {
          opacity: 1;
          box-shadow: 0 0 1px 10px rgba(38, 89, 216, 0.8),
            0 0 1px 20px rgba(38, 89, 216, 0.2),
            0 0 30px 30px rgba(38, 89, 216, 0.4);
        }

        100% {
          opacity: 1;
          box-shadow: 0 0 1px 10px rgba(38, 89, 216, 0.8),
            0 0 1px 20px rgba(38, 89, 216, 0.2),
            0 0 30px 30px rgba(38, 89, 216, 0.4);
        }
      }
    }
  `}
`;
