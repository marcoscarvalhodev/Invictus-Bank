import styled, { css } from 'styled-components';

interface StyledDownloadAppProps {
  $small: boolean;
}

export const StyledDownloadApp = styled.header<StyledDownloadAppProps>`
  ${({ theme, $small }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .download-app-item {
      flex: 1;
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
          transform: scale(1.05);
        }
      }

      display: flex;
      gap: ${theme.spacing.gap_2};
    }

    ${$small && css`
      flex-direction: column;
    `}
  `}
`;
