import styled, { css } from 'styled-components';

interface BankProps {
  $small: boolean;
}

export const StyledBank = styled.div<BankProps>`
  ${({ theme, $small }) => css`
    && {
      .bank-wrapper {
        position: relative;
        width: max-content;
      }
      
      .bank {
        width: 300px;
      }

      .money-1,
      .money-2 {
        width: 3rem;
        position: absolute;
      }

      .money-1 {
        left: 25px;
        bottom: -3px;
        animation: money-spin 5s linear infinite;
      }

      .money-2 {
        right: 25px;
        bottom: -3px;
        animation: money-spin 5s 1.5s linear infinite;
      }

      @keyframes money-spin {
        0% {
          transform: translateY(0px);
        }

        20% {
          transform: translateY(-10px);
        }

        50% {
          transform: rotateY(360deg);
        }
      }

      ${$small &&
      css`
        padding: 9.4rem 0rem;
      `}
    }
  `}
`;
