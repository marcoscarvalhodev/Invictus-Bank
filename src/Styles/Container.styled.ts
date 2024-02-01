import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;

  `}
`;
