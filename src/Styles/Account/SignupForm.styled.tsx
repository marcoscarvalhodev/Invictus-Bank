import styled, { css } from 'styled-components';

interface SignupFormProps {}

export const StyledSignupForm = styled.div<SignupFormProps>`
  ${({ theme }) => css`
    && {
      ${theme.form.login_signup};

      ${theme.media_query.max_large`
        gap: 16px;
        padding: 24px;
        width: 400px;
        .form {
          gap: 16px;
        }
      `} //query-max width from 0 to 1140px

      ${theme.media_query.xsmall`
        width: 350px;
      `}//query-extra-small
    }
  `}
`;
