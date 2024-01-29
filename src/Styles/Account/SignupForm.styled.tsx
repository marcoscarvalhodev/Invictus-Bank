import styled, { css } from 'styled-components';

interface SignupFormProps {
  $small: boolean;
  $medium: boolean;
  $xsmall: boolean;
}

export const StyledSignupForm = styled.div<SignupFormProps>`
  ${({ theme, $small, $medium, $xsmall }) => css`
    && {
      ${theme.form.login_signup};

      ${($small || $medium) &&
      css`
        gap: 16px;
        padding: 24px;
        width: 400px;
        .form {
          gap: 16px;
        }
      `}

      ${$xsmall &&
      css`
        width: 350px;
      `}
    }
  `}
`;
