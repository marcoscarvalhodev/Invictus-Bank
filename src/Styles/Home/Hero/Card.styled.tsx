import styled, { css } from 'styled-components';

interface CardProps {
  $supreme: string;
  $supremeVerse: string;
  $xsmall: boolean;
  $xlarge: boolean;
}

export const StyledCard = styled.div<CardProps>`
  ${({ theme, $supreme, $supremeVerse, $xsmall, $xlarge }) => css`
    width: ${theme.animations.card.card_normal.width_card};
    height: ${theme.animations.card.card_normal.height_card};
    border-radius: 12px;
    transform-origin: center center;
    transform-style: preserve-3d;

    animation: flip-card 5.9s linear infinite alternate,
      change-bg-card 5.9s linear infinite alternate;

    @keyframes flip-card {
      0% {
        transform: rotateX(-10deg) rotateY(10deg) rotateY(-15deg);
      }
      42% {
        transform: rotateX(0deg) rotateY(20deg);
      }
      ${$xsmall ? '60%' : '58%'} {
        transform: rotateX(180deg) rotateY(20deg);
      }
      100% {
        transform: rotateX(190deg) rotateY(10deg) rotateY(15deg);
      }
    }

    ${$supreme && $supremeVerse
      ? css`
          @keyframes change-bg-card {
            0%,
            49.998% {
              background-image: url(${$supreme});
              background-size: cover;
            }
            50%,
            100% {
              background-image: url(${$supremeVerse});
              background-size: cover;
            }
          }
        `
      : ''};

    ${$xsmall &&
    css`
      width: ${theme.animations.card.card_small.width_card_small};
      height: ${theme.animations.card.card_small.height_card_small};
    `};

    
  `}
`;
