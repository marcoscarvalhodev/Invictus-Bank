import styled, { css } from 'styled-components';

interface PeopleProps {
  $small: boolean;
  $xsmall: boolean;
}

export const StyledPeople = styled.section<PeopleProps>`
  ${({ theme, $small, $xsmall }) => css`
    && {
      ${theme.boxProps.flex.flex_column};
      justify-content: space-between;
      gap: 24px;
      flex-direction: row;
      .flex-item-4-people {
        display: flex;
        flex-direction: column;
      }

      

      .flex-item-3-people {
        justify-content: end;

        flex-direction: column;
      }

      .flex-item-1-people {
        flex-direction: column;
        display: flex;
        gap: 24px;
      }

      .flex-pics {
        display: flex;
        gap: 24px;
      }

      .subtitle {
        margin-left: 0.4rem;
      }

      .people-svg {
        border-radius: 6rem;
      }

      .title {
        ${theme.bullets.title};
      }

      .bullet-title {
        ${theme.bullets.bullet_title};
      }

      .people-list-item {
        ${theme.bullets.list_item};
      }

      .list-wrapper {
        ${theme.bullets.list_wrapper};
      }

      .bullet-icons {
        ${theme.bullets.bullet_icons};
      }

      .people-list {
        ${theme.bullets.list};
      }

      ${$small &&
      css`
        flex-direction: column;

        .flex-pics {
          flex-direction: column;

          align-self: center;
        }

        .flex-item-1-people {
          justify-content: center;
          align-items: center;
        }
      `}
    }
  `}
`;
