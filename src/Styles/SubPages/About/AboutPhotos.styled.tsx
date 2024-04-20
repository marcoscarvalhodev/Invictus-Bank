import styled, { css } from 'styled-components';

interface StyledAboutPhotosProps {
  $arrowState: number;
}

export const StyledAboutPhotos = styled.section<StyledAboutPhotosProps>`
  ${({ theme, $arrowState }) => css`
    &&& {
      display: flex;
      flex-direction: column;

      .title {
        padding-bottom: 4.8rem;
      }

      .photos-wrapper {
        display: flex;
        justify-content: space-between;

        .photos-each-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;

          .leader-photos {
            width: 20rem;
            border-radius: 0.4rem;
            padding-bottom: 1.6rem;
          }

          .arrow-wrapper {
            cursor: pointer;
            display: flex;
            width: max-content;
            gap: 1rem;
            align-items: center;

            .arrow {
              width: 0;
              height: 0;
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;
              transition: 0.3s ease;
              border-top: 10px solid ${theme.colors.gray_auxiliary.gray_3};
            }
          }

          .arrow-wrapper-${$arrowState} {
            .arrow {
              transition: 0.3s ease;
              border-top: 0px;
              border-bottom: 10px solid ${theme.colors.blue_main.primary_dark};
            }
          }
        }
      }

      .photos-description-wrapper {
        position: relative;
        height: 30rem;
        padding-top: 4.8rem;

        .photos-description {
          position: absolute;
          transition: 0.5s ease;
          pointer-events: none;
          opacity: 0;
        }

        .photos-description-${$arrowState} {
          opacity: 1;
          pointer-events: all;
          transition: 0.5s ease;
        }
      }

      ${theme.media_query.small_large`
        
        .photos-wrapper {
          .photos-each-wrapper {
            .leader-photos {
              width: 15rem;
            }
          }
        }

      `}

      ${theme.media_query.small`
      padding-top: 9.6rem;
      .photos-wrapper {
          flex-direction: column;
          gap: 4.8rem;
          .photos-each-wrapper {
            display: flex;
            flex-direction: row;

            .arrow-wrapper {
              display: none;
            }

            .photos-role-wrapper {
              display: flex;
              flex-direction: column;
          }

            .leader-photos {
              width: 15rem;
            }
          }
        }

        .photos-description-wrapper {
          display: none;
        }
      `}

        ${theme.media_query.above_small`
          .photos-description-mobile {
            display: none;
          }
        `}

${$arrowState === 0 &&
      css`
        .photos-description-wrapper {
          display: none;
        }
      `}
    }
  `}
`;
