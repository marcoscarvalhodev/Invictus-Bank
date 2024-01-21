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

export const StyledLogin = styled.section`
  ${({ theme }) => css`
    .background-wrapper {
      position: relative;
      padding: 8rem 0rem;
      
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
      right: -15px;
      top: -50px;
    }

    .dots-login-2 {
      left: 14px;
      bottom: -15px;
    }
  `}
`;
