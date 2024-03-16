import styled, { css } from 'styled-components';

interface LoginFormProps {}

export const StyledLoginForm = styled.div<LoginFormProps>`
  ${({ theme }) => css`
    && {
      ${theme.form.login_signup};
      gap: 4.88rem;

      .form {
        gap: 4.88rem;
      }

      ${theme.media_query.max_large`
        gap: 31px;
        width: 400px;
        padding: 24px;
        .form {
          gap: 31px;
        }
      `} //query from 0 to 1140px

      ${theme.media_query.xsmall`
        width: 35rem;
        gap: 3.67rem;

        .form {
          gap: 3.67rem;
        }
      `}//query-extra-small
    }
  `}
`;
