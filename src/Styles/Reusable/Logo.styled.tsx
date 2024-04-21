import styled, { css } from 'styled-components';

export const StyledLogo = styled.div`
  ${({ theme }) => css`
    svg {
      width: ${theme.spacing.gap_3};
      height: ${theme.spacing.gap_3};
    }

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
