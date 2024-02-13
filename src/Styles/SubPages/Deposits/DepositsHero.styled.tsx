import styled, { css } from 'styled-components';

export const StyledDepositsHero = styled.section`
  ${({ theme }) => css`
    ${theme.sub_pages.sub_pages_hero};

    .safe {
      width: 200px;

      #door {
        animation: safe-door 3s linear infinite alternate;
      }
    }

    @keyframes safe-door {
      0%,
      30% {
        transform: rotateY(0deg);
      }

      100% {
        transform: rotateY(-50deg);
      }
    }
  `}
`;
