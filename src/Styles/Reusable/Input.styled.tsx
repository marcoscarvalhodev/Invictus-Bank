import styled, { css } from 'styled-components';

interface InputProps {
  $inputPassword: boolean;
}

export const StyledInput = styled.div<InputProps>`
  ${({ theme, $inputPassword }) => css`
    .input::-ms-clear,
    .input::-ms-reveal {
      display: none;
    }

    .parent-input:hover {
      border-color: ${theme.colors.blue_main.primary_dark};
      background: #ffffff;
      box-shadow: 0 0 0 3px ${theme.colors.blue_main.primary_light};
      .input,
      .input:focus {
        background: #ffffff;
      }
    }

    .parent-input {
      display: block;
      width: 100%;
      border: 1px solid ${theme.colors.white_auxiliary.white_dark};
      transition: 0.5s;
      border-radius: 0.4rem;
      background: ${theme.colors.white_auxiliary.white_dark};
    }

    .input {
      outline: none;
      font-size: 1.6rem;
      border-radius: 0.4rem;
      width: 100%;
      padding: 0.8rem;
      border: none;
      color: ${theme.colors.black_auxiliary.black_normal};
      transition: 0.5s;
      font-family: Sora;
      font-weight: 300;
      background: ${theme.colors.white_auxiliary.white_dark};
    }

    .label-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding-bottom: 4px;
    }

    .error-input {
      color: ${theme.colors.red_auxiliary.red_normal};
      padding-top: 8px;
    }

    .parent-input {
      position: relative;
    }

    ${$inputPassword &&
    css`
      .input {
        width: 93%;
      }
    `}
  `}
`;
