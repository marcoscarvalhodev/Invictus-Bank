import styled, { css } from 'styled-components';

interface SupremeAppProps {
  $small: boolean;
}

export const StyledSupremeApp = styled.section<SupremeAppProps>`
  ${({ theme, $small }) => css`
  gap: 80px;

  ${$small && css`
  & {
    flex-direction: column-reverse;

    .item-1 {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
      
      width: 500px;
        
      }
    }
  }
  ` }
  
  
    .item-1 {
      width: 100%;
      svg {
      
        
        
      }
    }

    .supremeapp-item-1 {
      ${theme.boxProps.flex_items.flex_item_1};

      .title {
        ${theme.bullets.title};
      }

      .supremeapp-list-item {
        ${theme.bullets.list_item};
      }

      .list-wrapper {
        ${theme.bullets.list_wrapper};
      }

      .bullet-icons {
        ${theme.bullets.bullet_icons};
      }

      .supremeapp-list {
        ${theme.bullets.list};
      }

      .bullet-title {
        ${theme.bullets.bullet_title};
      }
    }
  `}
`;
