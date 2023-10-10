import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  ${({ theme }) => css`
  width: 100%;
  background: transparent;
  box-shadow: none;
  position: fixed;
  z-index: 999;
  transition: .5s ease;
  background-color: ${theme.colors.white_auxiliary.white_normal};
  
    &.active-header {
      box-shadow: 0px 51px 80px rgba(27, 108, 231, 0.08),
        0px 15.375px 24.1177px rgba(27, 108, 231, 0.05),
        0px 6.4px 10px rgba(27, 108, 231, 0.04),
        0px 2.3px 3.6px rgba(27, 108, 231, 0.02);
        
    }

    &.click-header {
      background-color: ${theme.colors.white_auxiliary.white_normal};
      
      
    }

    a {
      font-size: ${theme.spacing.gap_2};
      line-height: 140%;
      color: ${theme.colors.black_auxiliary.black_normal};
      
      transition: .5s ease;
      &:hover {
        opacity: .9;
        
      }

    }

    
    
  `}
`;
