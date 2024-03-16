import styled, { css } from 'styled-components';

interface CardHeroProps {}

export const StyledCardsHero = styled.section<CardHeroProps>`
  ${({ theme }) => css`
    && {
      ${theme.sub_pages.sub_pages_hero};

      .circle {
        position: relative;

        width: 100px;
        height: 100px;

        border-radius: 100%;
      }

      .flex-hero-2 {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: visible;
      }

      .card {
        width: 26rem;
        position: absolute;
        transform: translate3d(-50%, -50%, 0);
      }

      .card-1 {
        top: 0;
        right: 0;
        animation: card-move 10s linear infinite;
      }

      .card-2 {
        bottom: 0;
        left: 0;

        animation: card-move-2 10s linear infinite;
      }

      ${theme.media_query.small`
        flex-direction: column;
        padding: 9.6rem 2.4rem 0rem 2.4rem;
        
        .flex-hero-2 {
          padding: 12.8rem 3rem;
        }
        .card {
          width: 15rem;
        }
      `} //query-small

      @keyframes card-move {
        0% {
          transform: rotate(0deg) translateX(60px) rotate(0deg);
        }

        50% {
          transform: rotate(-180deg) translateX(-100px) rotate(180deg);
        }

        70% {
          z-index: 3;
        }

        100% {
          transform: rotate(360deg) translateX(60px) rotate(-360deg);
        }
      }

      @keyframes card-move-2 {
        0% {
          transform: rotate(0deg) translateX(-100px) rotate(0deg);
        }

        50% {
          transform: rotate(180deg) translateX(-100px) rotate(-180deg);
        }

        100% {
          transform: rotate(-360deg) translateX(-100px) rotate(360deg);
        }
      }
    }
  `}
`;
