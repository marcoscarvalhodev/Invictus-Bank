import styled, { css } from 'styled-components';

interface StyledContainerProps {
  
}

export const StyledContainer = styled.div<StyledContainerProps>`
  ${({ theme }) => css`
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;
    

    .container-wrapper {
      display: flex;
      flex-direction: column;
      width: 100vw;
    }
  `}
`;
