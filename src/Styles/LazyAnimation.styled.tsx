import styled, { css } from 'styled-components';

export const StyledLazyAnimation = styled.div`
  ${({ theme }) => css`
    &&& {
      background: ${theme.colors.white_auxiliary.white_normal};
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      min-height: 100dvh;
      min-width: 100vw;
    }

    .logo-suspense {
      width: 8rem;
    }

    #s-letter,
    #b-letter {
      stroke-width: 1.5;
      animation: figsb-letter-suspense 2s linear forwards;
    }

    @keyframes figsb-letter-suspense {
      0% {
        stroke-dasharray: 0 400;
        stroke-opacity: 0;
      }
      30% {
        stroke-dasharray: 0 400;
        stroke-opacity: 1;
      }

      100% {
        stroke-dasharray: 400 0;
        stroke-opacity: 1;
      }
    }
  `}
`;
