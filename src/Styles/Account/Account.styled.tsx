import styled, { css } from 'styled-components';

function eachDot() {
  let dotValue = '';

  for (let i = 0; i < 145; i++) {
    dotValue += `
      #dot-${i} {
        animation: dot-blink 3s ${0.01 * i * 1}s linear alternate infinite;
      };
    `;
  }

  return `
    ${dotValue}
  `;
}

interface StyledAccountProps {
  $accountState: number;
}

export const StyledAccount = styled.section<StyledAccountProps>`
  ${({ theme, $accountState }) => css`
    && {
      .background-wrapper {
        position: relative;
        padding: 2.5rem 0rem;

        width: 90%;
      }

      .login-wrapper {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
      }

      .dots-login {
        width: 150px;
        position: absolute;
        z-index: -1;
        ${eachDot()};

        @keyframes dot-blink {
          0% {
            opacity: 1;
          }

          100% {
            opacity: 0;
          }
        }
      }

      .dots-login-1 {
        right: -60px;
        top: -25px;
      }

      .dots-login-2 {
        left: -60px;
        bottom: -25px;
      }

      .background-login {
        filter: drop-shadow(-10px 10px 15px rgba(56, 58, 62, 0.35));
      }

      ${($accountState === 1 &&
        css`
          .signup-form {
            animation: shadow-out 1s linear forwards;
          }

          .login-form {
            animation: account-motion 1s linear forwards;
          }
        `) ||
      ($accountState === 2 &&
        css`
          .login-form {
            animation: shadow-out 1s linear forwards;
          }

          .signup-form {
            animation: account-motion 1s linear forwards;
          }
        `)}

      @keyframes shadow-out {
        0% {
          filter: drop-shadow(-10px 10px 15px rgba(56, 58, 62, 0.35));
        }

        90% {
          filter: drop-shadow(-10px 10px 15px rgba(56, 58, 62, 0.35));
        }

        100% {
          filter: drop-shadow(0px 0px 0px rgba(56, 58, 62, 0.35));
          z-index: 0;
        }
      }

      @keyframes account-motion {
        0% {
          transform: translate(0, -50%);
          z-index: 0;
        }

        40% {
          transform: translate(-130%, -50%);
          z-index: 0;
        }

        60% {
          transform: translate(-50%, -50%) scale(1.1);
          z-index: 3;
        }

        100% {
          transform: translate(0%, -50%) scale(1);
          z-index: 3;
        }
      }
    }
  `}
`;
