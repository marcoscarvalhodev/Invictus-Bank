import styled, { css } from "styled-components";

export const StyledNavDesktop = styled.nav`
  ${({ theme }) => css`
  
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

  .logo {
    width: 48px;
    height: 48px;
    background: blue;
    justify-content: center;
    align-items: center;
  }

  .menu-desktop {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .menu-item {
      margin-left: 1.6rem;
    }
  }

  .nav-link-desktop {
    display: inline-block;
    padding: 1.2rem 1.6rem;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 42%;
      right: -0.3rem;
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 0.1rem;

      border-bottom: 0.2rem solid ${theme.colors.blue_main.primary_normal};
      border-right: 0.2rem solid ${theme.colors.blue_main.primary_normal};

      transform: rotate(45deg);
      transition: .2s linear;
    }

    &:hover {
      &::after{
        top: 45%;
      }
    }
  }
  
  `}
`;
