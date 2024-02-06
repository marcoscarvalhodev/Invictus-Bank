import styled, { css } from 'styled-components';

interface SavingsHeroProps {
  $small: boolean;
}

export const StyledSavingsHero = styled.section<SavingsHeroProps>`
  ${({ theme, $small }) => css`
    && {
      ${theme.sub_pages.sub_pages_hero};

      .flex-hero-2 {
        position: relative;
        height: max-content;
      }

      .coin-pile-wrapper {
        position: absolute;
        transform: translate(50%, 0%);
        left: calc(50% + -290px);
        bottom: -30px;

        .coin-pile {
          width: 160px;
          height: calc(160px / 0.74);
        }
      }

      .money-bag-wrapper {
        position: absolute;
        transform: translate(50%, 50%);
        bottom: calc(50% + -40px);
        right: calc(50% + -115px);

        .money-bag {
          width: 120px;
        }
      }

      .shadow-pig {
        width: 500px;
        height: calc(500px / 2.3);
        bottom: -70px;
        position: absolute;
        z-index: 2;
      }

      ${$small &&
      css`
        flex-direction: column;
        padding: 9.6rem 2.4rem 0rem 2.4rem;

        .coin-pile-wrapper {
          left: calc(50% + -290px);
          bottom: 60px;
        }

        .money-bag-wrapper {
          bottom: calc(50% + -20px);
        }

        .shadow-pig {
          height: calc(500px / 2.3);
          bottom: 15px;
        }
        .flex-hero-2 {
          padding-top: 0px;
        }
      `}
    }
  `}
`;
