import styled, { css } from 'styled-components';

export const StyledDoubleCard = styled.section`
  ${({ theme }) => css`

  .title {
    ${theme.bullets.title};
  }

    .bullet-icons {
      ${theme.bullets.bullet_icons}
    }

    .bullet-title {
      ${theme.bullets.bullet_title};
    }

    .list-wrapper {
      ${theme.bullets.list_wrapper}
    }

    .list-item {
      ${theme.bullets.list_item};
    }

    .list {
      ${theme.bullets.list};
    }
  `}
`;
