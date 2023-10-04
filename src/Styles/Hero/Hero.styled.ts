import styled, { css } from "styled-components";

export const StyledHero = styled.main`
  ${({ theme }) => css`
    
     
  ${theme.containerHero.container_xl};
  background: ${theme.colors.white_auxiliary.white_normal};

    &.container {
      
      padding: ${theme.spacing.gap_5} 2.4rem;
    }
    

    .flex-item-1 {
      ${theme.boxProps.flex_items.flex_item_1};
      padding: ${theme.spacing.gap_3} 0;

      p {
        margin: ${theme.spacing.gap_2} 0;
      }
    }

    .flex-interact {
      ${theme.boxProps.flex.flex_start};
      gap: ${theme.spacing.gap_2};
    }

    .flex-item-3 {
      ${theme.boxProps.flex_items.flex_item_3};
      
    }

    &.container-small {
      flex-direction: column;
      height: auto;
    }
  `}
`;
