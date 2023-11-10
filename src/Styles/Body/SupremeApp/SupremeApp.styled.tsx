import styled, { css } from 'styled-components';

interface SupremeAppProps {}

export const StyledSupremeApp = styled.section<SupremeAppProps>`
  ${({ theme }) => css`
    .supremeapp-item-1 {
      ${theme.boxProps.flex_items.flex_item_1};

      .title {
        ${theme.bullets.title};
      }

      .item-1 {
        background: red;
        height: 100px;
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
