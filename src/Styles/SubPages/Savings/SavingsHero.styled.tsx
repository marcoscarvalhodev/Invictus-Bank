import styled, { css } from 'styled-components';


export const StyledSavingsHero = styled.section`
  ${({ theme }) => css`
    && {
      ${theme.sub_pages.sub_pages_hero};

      .flex-hero-2 {
        position: relative;
        height: max-content;
      }

      .coin-pile-wrapper {
        position: absolute;
        transform: translate(50%, 0%);
        left: calc(50% + -29rem);
        bottom: -3rem;

        .coin-pile {
          width: 16rem;
          height: calc(16rem / 0.74);
        }
      }

      .money-bag-wrapper {
        position: absolute;
        transform: translate(50%, 50%);
        bottom: calc(50% + -4rem);
        right: calc(50% + -11.5rem);

        .money-bag {
          width: 12rem;
        }
      }

      .shadow-pig {
        width: 50rem;
        height: calc(50rem / 2.3);
        bottom: -7rem;
        position: absolute;
        z-index: 2;
      }

      
        ${theme.media_query.small`
          flex-direction: column;
          padding: 9.6rem 2.4rem 0rem 2.4rem;

          .coin-pile-wrapper {
            left: calc(50% + -29rem);
            bottom: 6rem;
          }

          .money-bag-wrapper {
            bottom: calc(50% + -2rem);
          }

          .shadow-pig {
            height: calc(50rem / 2.3);
            bottom: 15px;
          }
          .flex-hero-2 {
            padding-top: 0rem;
          }

          .flex-hero-1 {
            background: ${theme.colors.white_auxiliary.white_light};

            .buttons-flex-hero {
              padding-bottom: 0rem;
            }
          }
        `}//query-small
      
      
    }
  `}
`;
