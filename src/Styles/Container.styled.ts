import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white_auxiliary.white_normal};
  `}
`;
