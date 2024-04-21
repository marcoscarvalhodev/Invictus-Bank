import styled, { css } from 'styled-components';

interface StyledMenuMobileProps {
  $loginState: boolean;
}

export const StyledMenuMobile = styled.nav<StyledMenuMobileProps>`
  ${({ theme, $loginState }) => css`
    && {
      width: 100vw;
      height: 100vh;
      position: absolute;
      opacity: 0;
      pointer-events: none;
      background-color: ${theme.colors.white_auxiliary.white_normal};
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.7s ease;

      &.active-menu-mobile {
        opacity: 1;
        pointer-events: all;
      }

      .nav-list-mobile {
        display: flex;
        max-width: ${theme.containerSizes.container_xl};
        flex-direction: column;
        justify-content: start;
        width: 100%;
        height: 100%;
        padding: 2.4rem;
      }

      .nav-link-mobile {
        color: ${theme.colors.gray_auxiliary.gray_2};

        transition: 0.5s ease;

        width: 100%;
        &:hover {
          color: ${theme.colors.blue_main.primary_normal};
        }
      }

      .nav-link-mobile:not(:last-child) {
        position: relative;

        display: inline-block;

        &::after {
          content: '';
          position: absolute;
          top: 42%;
          right: 0rem;
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 0.1rem;
          margin-left: 3rem;
          border-bottom: 0.2rem solid ${theme.colors.blue_main.primary_normal};
          border-right: 0.2rem solid ${theme.colors.blue_main.primary_normal};

          transform: rotate(45deg);
          transition: 0.2s linear infinite alternate;
        }

        &:hover {
          &::after {
            ${theme.animations.arrow_up_down};
          }
        }
      }

      .nav-link-mobile-active {
        color: ${theme.colors.blue_main.primary_normal};
      }

      .nav-link-mobile-active::after {
        ${theme.animations.arrow_up_down};
      }

      .social-icons {
        ${$loginState
          ? css`
              padding: 0;
            `
          : css`
              padding: ${theme.spacing.gap_3} 0rem;
            `};

        ${theme.boxProps.flex.flex_center};
      }

      .social-icons a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 ${theme.spacing.gap_1};

        svg {
          width: 3.6rem;
          height: 3.6rem;

          path {
            stroke: ${theme.colors.gray_auxiliary.gray_3};
            transition: 0.3s ease;
          }

          &:hover {
            path {
              stroke: ${theme.colors.blue_main.primary_normal};
            }
          }
        }
      }

      .dropdown-wrapper {
        ${theme.animations.dropdown_wrapper};
        transition: 0.3s ease;
        border-radius: 0px;
        margin-bottom: 2.4rem;
        .nav-link-dropdown {
          padding: 1.6rem;

          display: inline-block;
          position: relative;
          &:hover {
            color: ${theme.colors.blue_main.primary_normal};

            &::after {
              width: 100%;
            }
          }

          &::after {
            content: '';
            position: absolute;
            top: 90%;
            left: ${theme.spacing.gap_2};
            width: 0%;
            height: 0.2rem;
            transition: 1s ease;
            background-color: ${theme.colors.blue_main.secondary_normal};
          }
        }
      }

      .dropdown-wrapper-active {
        margin-top: 1.6rem;
        height: max-content;
        width: 100%;
        opacity: 1;
        pointer-events: all;
      }
    }
  `}
`;
