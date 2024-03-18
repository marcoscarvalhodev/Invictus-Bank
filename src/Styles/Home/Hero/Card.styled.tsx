import styled, { css } from 'styled-components';

export const StyledCard = styled.div`
  ${({ theme }) => css`
    position: relative;
    perspective: 100rem;
    left: calc(-${theme.animations.card.card_normal.width_card} / 2);
    height: ${theme.animations.card.card_normal.height_card};

    .card-wrapper {
      animation: flip-card 5.9s linear infinite alternate;
      position: absolute;
      border-radius: 12px;
      transform-style: preserve-3d;
      width: ${theme.animations.card.card_normal.width_card};
      height: ${theme.animations.card.card_normal.height_card};
    }
    .cards {
      position: absolute;
      border-radius: 1.2rem;
      width: 100%;
      height: 100%;
    }

    .card-front {
      transform: translateZ(0.1rem);
    }

    @keyframes flip-card {
      0% {
        transform: rotateX(-10deg) rotateY(10deg) rotateY(-15deg);
      }
      42% {
        transform: rotateX(0deg) rotateY(20deg);
      }

      60% {
        transform: rotateX(180deg) rotateY(20deg);
      }
      100% {
        transform: rotateX(190deg) rotateY(30deg);
      }
    }

    ${theme.media_query.xsmall`

  height: ${theme.animations.card.card_small.height_card_small};
  left: calc(-${theme.animations.card.card_small.width_card_small} / 2);
    .card-wrapper {
      width: ${theme.animations.card.card_small.width_card_small};
      height: ${theme.animations.card.card_small.height_card_small};
    }
      
    `}; //query-extra-small
  `}
`;
