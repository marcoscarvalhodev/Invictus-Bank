import styled, { css } from 'styled-components';

interface StyledDownloadAppProps {
  
}

export const StyledDownloadApp = styled.section<StyledDownloadAppProps>`
  ${({ theme}) => css`
    && {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .download-app-item {
        flex: 1;
      }

      .logo-sb {
        width: 400px;
      }

      #letter-figsb4-s, #letter-figsb4-b {
        animation: fig4sb-letter 4s ease infinite alternate;
        stroke-width: 10;
      }

      .title {
        ${theme.bullets.title};
      }

      .flex-item-2 {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .download-app-buttons {
        padding: 2.4rem 0rem;

        .button-download-app {
          cursor: pointer;
          transition: 0.5s ease;
          ${theme.colors.drop_shadow};
          &:hover {
            filter: drop-shadow(-10px 20px 20px rgba(27, 108, 231, 0.3));
            transform: scale(1.05);
          }
        }

        display: flex;
        gap: ${theme.spacing.gap_2};
      }


      @keyframes fig4sb-letter {
        0% {
          stroke-width: 4;
          stroke-dasharray: 0 400;
          stroke-opacity: 1;
        }

        60%,100% {
          stroke-width: 4;
          stroke-dasharray: 400 0;
          stroke-opacity: 1;
        }
      }

      ${theme.media_query.small`
        flex-direction: column;

        .logo-sb {
          width: 300px;
        }
      `}//query-small

      
    }
  `}
`;
