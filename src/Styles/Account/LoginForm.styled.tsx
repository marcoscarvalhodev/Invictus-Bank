import styled, { css } from 'styled-components';

export const StyledLoginForm = styled.div`
  ${({ theme }) => css`
    && {
      ${theme.form.login_signup};
      gap: 48.8px;

      .form {
        gap: 48.8px;
      }
    }
  `}
`;
