import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.green_auxiliary.green_light};
    width: 300px;
    height: 300px;
    
  `}
`;
