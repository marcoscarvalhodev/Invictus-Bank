import styled, { css } from "styled-components";

export const StyledLogo = styled.div`
  ${({ theme }) => css`
      width: 48px;
      height: 48px;
      background: blue;
      justify-content: center;
      align-items: center;
  `}
`;
