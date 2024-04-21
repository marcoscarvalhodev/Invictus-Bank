import styled, { css } from 'styled-components';

export const StyledTransfersAdvantages = styled.section`
  ${({ theme }) => css`
    ${theme.sub_pages.sub_pages_advantages};

    .icon {
      width: 5rem;
      animation: icon-expand 1.5s alternate linear infinite;
      cursor: pointer;
    }

    padding-bottom: 4.8rem;

    .icon-description-wrapper {
      position: absolute;
      min-width: 250px;
      max-width: 300px;
      background: rgba(0, 0, 0, 0.7);
      padding: 10px 20px;
      border-radius: 0.4rem;
      margin-top: 1rem;
      left: -100px;

      .icon-description {
        color: ${theme.colors.white_auxiliary.white_light};
      }
    }

    .icon-wrapper-1 {
      top: 30px;
      right: 90px;
    }

    .icon-wrapper-2 {
      bottom: 70px;
      right: 140px;
    }

    .icon-wrapper-3 {
      bottom: 110px;
      left: 120px;
    }

    &&& {
      .wrapper {
        padding: 30px;
      }

      .laptop-mockup-wrapper {
        width: 100%;
        position: relative;

        .laptop-mockup {
          width: 100%;
          margin-left: -2rem;
        }

        //icon-description

        .icon-description-wrapper-enable {
          opacity: 1;
          pointer-events: all;
          transition: 0.5s;
        }

        .icon-description-wrapper-disable {
          background: rgba(0, 0, 0, 0.1);
          opacity: 0;
          pointer-events: none;
          transition: 0.5s;
        }

        //icon-wrapper

        .icon-wrapper {
          position: absolute;
          &:hover {
            #arrow-wrapper {
              animation: spin-arrow 1.5s infinite linear forwards;
              transform-origin: 50%;
            }
          }
        }

        .icon-wrapper-disable {
          #arrow-wrapper {
            animation: spin-arrow-out 1.5s forwards;
            transform-origin: 50%;
          }
        }
      }

      //keyframes

      @keyframes icon-expand {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.1);
        }
      }

      @keyframes spin-arrow-out {
        0% {
          transform: rotateZ(current);
        }
        100% {
          transform: rotateZ(-360deg);
        }
      }

      @keyframes spin-arrow {
        0% {
          transform: rotateZ(0deg);
        }

        100% {
          transform: rotateZ(-360deg);
        }
      }

      ${theme.media_query.small`
        flex-direction: column-reverse;
        padding: 4.8rem 2.4rem;
        .icon {
          width: 4rem;
          svg {
            width: 100%;
          }
        }

        .icon-description-wrapper {
          min-width: 200px;
          max-width: 200px;
          z-index: 3;

          .icon-description {
            color: ${theme.colors.white_auxiliary.white_light};
          }
        }
      `} //query-small

      ${theme.media_query.xsmall`
        .icon {
          width: 3rem;
          svg {
            width: 100%;
          }
        }

        .icon-description-wrapper {
          margin-top: 0rem;
        }

        .icon-wrapper-1 {
          top: 10px;
          right: 50px;

          .icon-description-wrapper {
            position: absolute;
            top: 0px;
            left: -210px;
          }
        }

        .icon-wrapper-2 {
          bottom: 30px;
          right: 60px;
        }

        .icon-wrapper-3 {
          bottom: 50px;
          left: 70px;
        }
      `}//query-extra-small
    }
  `}
`;
