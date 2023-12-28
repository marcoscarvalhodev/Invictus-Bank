import styled, { css } from 'styled-components';

export const StyledSavings = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.white_auxiliary.white_light};

    && {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      max-width: ${theme.containerSizes.container_xl};
    }
  `}
`;
