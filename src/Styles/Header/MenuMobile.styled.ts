import styled, { css } from "styled-components";

export const StyledMenuMobile = styled.nav`
  ${({ theme }) => css`
    width: 100vw;
    height: calc(100vh - 7.4rem);
    position: absolute;
    opacity: 0;
    pointer-events: none;
    background-color: ${theme.colors.white_auxiliary.white_light};
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
    }

    .nav-list-mobile li {
      margin-bottom: ${theme.spacing.gap_1};
    }

    .nav-link-mobile {
      display: inline-block;
      color: ${theme.colors.gray_auxiliary.gray_2};
      padding: 1.6rem 2.4rem;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 90%;
        left: ${theme.spacing.gap_2};
        width: 0%;
        height: 0.2rem;
        transition: 1s ease;
        background-color: ${theme.colors.blue_main.secondary_normal};
      }

      &:hover {
        color: ${theme.colors.blue_main.primary_normal};
        &::after {
          width: 100%;
        }
      }
    }

    .social-icons {
      margin-top: ${theme.spacing.gap_3};
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
          transition: .7s ease;
        }

        &:hover {
          path {
            stroke: ${theme.colors.blue_main.primary_normal};
          }
        }
      }
    }
  `}
`;
