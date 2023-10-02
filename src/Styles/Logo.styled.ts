import styled, { css } from "styled-components";

export const StyledLogo = styled.div`
  ${({ theme }) => css`
    svg {
      width: 64px;
      height: 48px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
