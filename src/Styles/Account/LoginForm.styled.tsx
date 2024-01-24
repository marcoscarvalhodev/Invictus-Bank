import styled, { css } from 'styled-components';

export const StyledLoginForm = styled.div`
  ${({ theme }) => css`
    ${theme.form.login_signup};
  `}
`;
