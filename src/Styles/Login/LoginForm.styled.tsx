import styled, { css } from 'styled-components';

export const StyledLoginForm = styled.div`
  ${({ theme }) => css`
    filter: drop-shadow(-10px 10px 15px rgba(56, 58, 62, 0.35));
    position: absolute;
    background: #f1f7ff;
    width: 500px;
    top: 50%;
    right: 0;
    border-radius: 40px;
    transform: translate(0, -50%);
    padding: 4.8rem 3.2rem;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .login-title {
      margin-bottom: 1.2rem;
      margin-left: -4px;
    }

    .login-form {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .button-login {
      width: max-content;
    }
  `}
`;
