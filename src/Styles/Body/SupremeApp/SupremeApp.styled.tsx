import styled, { css } from 'styled-components';

interface SupremeAppProps {

}

export const StyledSupremeApp = styled.section<SupremeAppProps>`
  ${({ theme }) => css`
    .SupremeApp-item-1 {
      ${theme.boxProps.flex_items.flex_item_1};
      height: 100vh;
      

      .bullet-title {
        background: ${theme.colors.black_auxiliary.black_normal};
        
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
        padding-bottom: 8px;
        
      }
    }
  `}
`;
