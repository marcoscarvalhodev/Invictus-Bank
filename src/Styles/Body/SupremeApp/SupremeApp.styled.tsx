import styled, { css } from 'styled-components';

interface SupremeAppProps {
  $small: boolean;
  $xlarge: boolean;
  $xsmall: boolean;
}

export const StyledSupremeApp = styled.section<SupremeAppProps>`
  ${({ theme, $small, $xlarge, $xsmall }) => css`
    && {
      
      display: flex;
      flex-direction: row;
      gap: 80px;
      .item-1 {
        padding: ${theme.spacing.gap_1};

        #figsb2-screen1 {
          animation: figsb2-screen1 20s ease infinite alternate;
        }

        @keyframes figsb2-screen1 {
          0%,
          15% {
            opacity: 1;
          }
          20%,
          100% {
            opacity: 0;
          }
        }

        #figsb2-screen2 {
          animation: figsb2-screen2 20s ease infinite alternate;
        }

        @keyframes figsb2-screen2 {
          0%,
          15% {
            opacity: 0;
          }
          20%,
          35% {
            opacity: 1;
          }
          40%,
          100% {
            opacity: 0;
          }
        }

        #figsb2-screen3 {
          animation: figsb2-screen3 20s ease infinite alternate;
        }

        @keyframes figsb2-screen3 {
          0%,
          35% {
            opacity: 0;
          }
          40%,
          55% {
            opacity: 1;
          }
          60%,
          100% {
            opacity: 0;
          }
        }

        #figsb2-screen4 {
          animation: figsb2-screen4 20s ease infinite alternate;
        }

        @keyframes figsb2-screen4 {
          0%,
          55% {
            opacity: 0;
          }
          60%,
          75% {
            opacity: 1;
          }
          80%,
          100% {
            opacity: 0;
          }
        }

        #figsb2-screen5 {
          animation: figsb2-screen5 20s ease infinite alternate;
        }

        @keyframes figsb2-screen5 {
          0%,
          75% {
            opacity: 0;
          }
          80%,
          100% {
            opacity: 1;
          }
        }

        #figsb2-icon1 {
          animation: figsb2-icon-move 3s ease 0s infinite alternate;
        }

        #figsb2-icon2 {
          animation: figsb2-icon-move 3s ease 2s infinite alternate;
        }

        #figsb2-icon3 {
          animation: figsb2-icon-move 3s ease 3s infinite alternate;
        }

        #figsb2-icon4 {
          animation: figsb2-icon-move 3s ease 1.5s infinite alternate;
        }

        #figsb2-icon5 {
          animation: figsb2-icon-move 3s ease 0s infinite alternate;
        }

        @keyframes figsb2-icon-move {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(10px, -40px, 0);
          }
        }
      }

      .supremeapp-item-1 {
        ${theme.boxProps.flex_items.flex_item_1};
        flex: 1;
        .title {
          ${theme.bullets.title};
        }

        .supremeapp-list-item {
          ${theme.bullets.list_item};
        }

        .list-wrapper {
          ${theme.bullets.list_wrapper};
        }

        .bullet-icons {
          ${theme.bullets.bullet_icons};
        }

        .supremeapp-list {
          ${theme.bullets.list};
        }

        .bullet-title {
          ${theme.bullets.bullet_title};
        }
      }

      ${$small &&
      css`
        & {
          flex-direction: column-reverse;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }
      `}

      ${($small ||
      $xlarge) &&
        css`
          .phone-mockup {
            width: 500px;
          }
        `}

      ${$xsmall && css`
        
      .phone-mockup {
            width: 400px;
          }
      `}

      ${$xlarge && css`
        .item-1 {
          display: flex;
          justify-content: center;
          
        }
      `}
    }
  `}
`;
