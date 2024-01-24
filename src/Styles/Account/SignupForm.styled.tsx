import styled, { css } from 'styled-components';

export const StyledSignupForm = styled.div`
  ${({ theme }) => css`
    ${theme.form.login_signup};
  `}
`;
