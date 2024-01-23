import styled, { css } from 'styled-components';

export const StyledInput = styled.div`
  ${({ theme }) => css`
    .input:focus,
    .input:hover {
      outline: none;
      border-color: ${theme.colors.blue_main.primary_dark};
      background: #ffffff;
      box-shadow: 0 0 0 3px ${theme.colors.blue_main.primary_light};
    }

    .input {
      border: 1px solid ${theme.colors.white_auxiliary.white_dark};
      color: ${theme.colors.black_auxiliary.black_normal};
      display: block;
      width: 100%;
      font-size: 1.8rem;
      padding: 0.8rem;
      border-radius: 0.4rem;
      background: ${theme.colors.white_auxiliary.white_dark};
      transition: 0.5s;
      font-family: Sora;
      font-weight: 300;
    }

    

    .label-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  `}
`;
