import styled, { css } from 'styled-components';

export const StyledSavings = styled.section`
  ${({ theme }) => css`
  height: 200vh;
  background: ${theme.colors.white_auxiliary.white_light};

  && {
    ${theme.boxProps.flex.flex_start};
    
  .flex-savings {
    padding: ${theme.spacing.gap_3} 0;
    flex: 1;
    
    
    .title {
      ${theme.bullets.title};
    }
  }
  }
  
  
  `}
`;


