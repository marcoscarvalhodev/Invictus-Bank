import styled, { css } from "styled-components";

interface DesktopProps {
  $dropdown: boolean;
}

export const StyledNavDesktop = styled.nav<DesktopProps>`
  ${({ theme, $dropdown }) => css`
    max-width: ${theme.containerSizes.container_xl};
    margin: 0 auto;
    padding: 1rem 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar-desktop-item-1 {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .navbar-desktop-item-2 {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .menu-desktop {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .menu-item {
        margin-left: ${theme.spacing.gap_2};
        position: relative;
        
      }
    }

    .nav-link-desktop {
      display: inline-block;
      padding: 1.2rem 1.6rem;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 42%;
        right: -0.3rem;
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 0.1rem;

        border-bottom: 0.2rem solid ${theme.colors.blue_main.primary_normal};
        border-right: 0.2rem solid ${theme.colors.blue_main.primary_normal};

        transform: rotate(45deg);
        transition: 0.2s linear;
      }

      &:hover {
        &::after {
          top: 45%;
        }
      }
    }

    .dropdown-menu {
      background: ${theme.colors.white_auxiliary.white_light};
      padding: 1.6rem 2.4rem;
      border-radius: 1.6rem;
      box-shadow: 0px 51px 80px rgba(27, 108, 231, 0.08),
        0px 15px 24px rgba(27, 108, 231, 0.05),
        0px 6px 10px rgba(27, 108, 231, 0.04),
        0px 2.3px 3.6px rgba(27, 108, 231, 0.02);
      position: absolute;
      top: 4.2rem;
      left: 2.4rem;
      
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      transition: .5s ease;
      
      opacity: 0;
      pointer-events: none;

      &.active-dropdown {
        pointer-events: all;
        opacity: 1;
       
      }

      .dropdown-item {
        min-width: 100%;
        white-space: nowrap;
      }
    }

    .nav-link-dropdown {
      display: inline-block;
      width: 100%;
      padding: 0.8rem 1.6rem;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 90%;
        left: 0;
        width: 0%;
        height: 0.2rem;
        background-color: ${theme.colors.blue_main.secondary_normal};
        transition: 0.5s ease;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }


  `}
`;
