import styled, { css } from 'styled-components';

export const StyledError = styled.div`
  ${({ theme }) => css`
  
  .error-input {
      color: ${theme.colors.red_auxiliary.red_normal};
      padding-top: 8px;
    }
  
  `}
`;
