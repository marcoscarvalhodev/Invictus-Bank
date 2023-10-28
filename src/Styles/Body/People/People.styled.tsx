import styled, { css } from 'styled-components';

interface PeopleProps {
  $icon: string;
  $small: boolean;
  $xsmall: boolean;
}

export const StyledPeople = styled.section<PeopleProps>`
  ${({ theme, $icon, $small, $xsmall }) => css`
    && {
      ${theme.boxProps.flex.flex_column};
      flex-direction: row;
      .flex-item-4-people {
        display: flex;
        flex-direction: column;
        margin-right: 30px;
      }

      .flex-item-3-people {
        display: flex;
        flex-direction: column;
        height: max-content;
      }

      .flex-item-1-people {
        ${theme.boxProps.flex_items.flex_item_1};
        flex-direction: column;
      }

      .subtitle {
        margin-left: 0.4rem;
      }

      .people-svg {
        border-radius: 6rem;
      }

      .bullet-title {
        background: ${theme.colors.black_auxiliary.black_normal};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
        font-size: 1.8rem;
        line-height: 140%;
      }

      .title {
        color: ${theme.colors.black_auxiliary.black_normal};
      }

      .people-list-item {
        position: relative;
        margin-left: 24px;

        margin-bottom: 4.8rem;
      }

      .list-wrapper {
        display: flex;
      }

      .check-icon {
        width: 40px;
        height: 40px;
        ${$icon};
        margin-top: -10px;
        padding: 20px;

        &:hover {
          transform: scale(1.15);
        }
      }

      .bg-icon-check:hover::after {
        transform: scale(1.5);
      }

      .people-list {
        margin-top: ${theme.spacing.gap_3};
      }

      ${$small && css`
      flex-direction: column;
      `}
    }
  `}
`;
