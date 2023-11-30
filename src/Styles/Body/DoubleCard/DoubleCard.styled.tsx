import styled, { css } from 'styled-components';

interface DoubleCardsProps {
  $small: boolean | null;
}


export const StyledDoubleCard = styled.section<DoubleCardsProps>`
  ${({ theme, $small }) => css`
      
      display: flex;
      align-items: center;
      justify-content: center;

      .double-card-flex-item-1 {
        flex: 1;
      }

  .title {
    ${theme.bullets.title};
  }

    .bullet-icons {
      ${theme.bullets.bullet_icons};
      
    }

    .bullet-title {
      ${theme.bullets.bullet_title};
    }

    .list-wrapper {
      ${theme.bullets.list_wrapper};
    }

    .list-item {
      ${theme.bullets.list_item};
    }

    .list {
      ${theme.bullets.list};
    }

    .link {
      padding-right: 0px;
    }

    .double-cards {
      width: 500px;
      height: 500px;
    }

    .double-cards-wrapper {
      padding: 24px;
      display: flex;
      justify-content: center;
      
    }

    ${$small && css`
    display: flex;
      flex-direction: column;
    `}


    #double-card-verse {
      transform-origin: center center;
      transform-box: fill-box;
      transform: translate3d(0,-40px,0) rotate(0deg);
      animation: double-card-verse-move 3s ease infinite alternate;
    }

    @keyframes double-card-verse-move {
      0% {
        transform: translate3d(0,-40px,0) rotate(0deg);
      }

      100% {
        transform: translate3d(0,20px,0) rotate(5deg);
      }
    }


    #double-card-front {
      transform-origin: center center;
      transform-box: fill-box;
      transform: translate3d(0,-40px,0) rotate(0deg);
      animation: double-card-front-move 3s ease 1s infinite alternate;
    }

    @keyframes double-card-front-move {
      0% {
        transform: translate3d(0,-40px,0) rotate(0deg);
      }

      100% {
        transform: translate3d(0,20px,0) rotate(-5deg);
      }
    }

    #double-card-shadow {
      transform-origin: center center;
      transform-box: fill-box;
      fill-opacity: 0.15;
      animation: double-card-shadow 3s ease 1s infinite alternate;
    }


    @keyframes double-card-shadow {
      0% {
        fill-opacity: 0.15;
      }

      100% {
        fill-opacity: 0.4;
      }
    }


  `}


`;
