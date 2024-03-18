import styled, { css } from 'styled-components';

export const StyledLazyAnimation = styled.div`
  ${({ theme }) => css`
    &&& {
      width: 100vw;
      height: 100%;
      position: fixed;

      background: ${theme.colors.white_auxiliary.white_normal};
      .logo-suspense {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8rem;
      }

      #s-letter,
      #b-letter {
        stroke-width: 1.5;
        animation: figsb-letter-suspense 7s ease forwards;
      }

      @keyframes figsb-letter-suspense {
        0% {
          stroke-dasharray: 0 400;
          stroke-opacity: 1;
        }

        100% {
          stroke-dasharray: 400 0;
          stroke-opacity: 1;
        }
      }
    }
  `}
`;
