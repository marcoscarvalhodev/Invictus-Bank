import styled, { css } from 'styled-components';

interface LoginFormProps {
  $small: boolean;
  $medium: boolean;
  $xsmall: boolean;
}

export const StyledLoginForm = styled.div<LoginFormProps>`
  ${({ theme, $small, $medium, $xsmall }) => css`
    && {
      ${theme.form.login_signup};
      gap: 48.8px;

      .form {
        gap: 48.8px;
      }

      ${($small || $medium) &&
      css`
        gap: 31px;
        width: 400px;
        padding: 24px;
        .form {
          gap: 31px;
        }
      `}

      ${$xsmall &&
      css`
        width: 350px;
        gap: 36.7px;

        .form {
          gap: 36.7px;
        }
      `}
    }
  `}
`;
