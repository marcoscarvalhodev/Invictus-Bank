import styled, { css } from 'styled-components';

export const StyledNavMobile = styled.nav`
  ${({ theme }) => css`
    max-width: ${theme.containerSizes.container_xl};
    margin: 0 auto;
    padding: 1rem 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    position: relative;

    .logo-sb {
      position: absolute;
      top: 0px;
      padding-top: inherit;
      left: 50%;
      transform: translate(-50%, 0);
    }

    .bx {
      width: 3.6rem;
      height: 3.6rem;
      position: relative;
      cursor: pointer;
      z-index: 999;

      &::after {
        content: '';
        position: absolute;
        top: 40%;
        left: 17%;
        width: 70%;
        height: 0.2rem;
        background: ${theme.colors.blue_main.primary_normal};
        transition: 0.7s ease;
      }

      &::before {
        content: '';
        position: absolute;
        top: 64%;
        left: 17%;
        width: 70%;
        height: 0.2rem;
        background: ${theme.colors.blue_main.primary_normal};
        transition: 0.7s ease;
      }
    }

    .activeBx {
      &::after {
        top: 50%;
        transform: rotate(-315deg);
      }

      &::before {
        top: 50%;
        transform: rotate(-45deg);
      }
    }

    //username adjusts
    ${theme.username_data};

    .logo-supreme {
      margin-top: -4px;
    }
  `}
`;
