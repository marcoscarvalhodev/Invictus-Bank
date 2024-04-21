import styled, { css } from 'styled-components';

export const StyledNoMatch = styled.div`
  ${({ theme }) => css`
    &&& {
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      gap: 3rem;
      padding: ${theme.spacing.global_padding_sides};
      .error-404 {
        width: 30rem;

        #coin {
          animation: coin-spin 3s linear infinite;
        }
      }

      .error-link-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .error-link {
          margin-left: -0.6rem;
        }
      }

      .error-title {
        color: ${theme.colors.blue_main.primary_normal};
      }

      .no-match {
        animation: no-match-blink 2s linear alternate infinite;
      }

      @keyframes coin-spin {
        0% {
          transform: rotate(0deg);
          transform-origin: 50% 50%;
        }
        100% {
          transform: rotate(360deg);
          transform-origin: 50% 50%;
        }
      }

      @keyframes no-match-blink {
        0% {
          opacity: 1;
        }

        100% {
          opacity: 0;
        }
      }
    }
  `}
`;
