import styled, { css } from 'styled-components';

export const StyledDoubleCard = styled.section`
  ${({ theme }) => css`
      
      display: flex;
      align-items: center;
      justify-content: center;

      .double-card-flex-item-1 {
        flex: 1;
      }

  .title {
    ${theme.bullets.title};
  }

    .bullet-icons {
      ${theme.bullets.bullet_icons};
      
    }

    .bullet-title {
      ${theme.bullets.bullet_title};
    }

    .list-wrapper {
      ${theme.bullets.list_wrapper};
    }

    .list-item {
      ${theme.bullets.list_item};
    }

    .list {
      ${theme.bullets.list};
    }

    .link {
      padding-right: 0px;
    }
  `}
`;
