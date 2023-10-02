import styled, { css } from "styled-components";

export const StyledMenuMobile = styled.nav`
  ${({ theme }) => css`
    width: 100vw;
    height: calc(100vh - 6.8rem);
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

    .nav-link-mobile {
      display: inline-block;
      color: ${theme.colors.gray_auxiliary.gray_2};
      padding: 1.6rem 2.4rem;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 90%;
        left: 1.6rem;
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
      margin-top: 4.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .social-icons svg * {
      stroke: ${theme.colors.gray_auxiliary.gray_2};
    }
  `}
`;
