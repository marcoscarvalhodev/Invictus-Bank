import styled, { css } from 'styled-components';
import iconCheck from '../../../assets/svg/icon-check.svg?url';

interface PeopleProps {
  $icon: string;
}

export const StyledPeople = styled.section<PeopleProps>`
  ${({ theme, $icon }) => css`
    && {
      ${theme.boxProps.flex.flex_column};
      .flex-item-4-people {
        ${theme.boxProps.flex_items.flex_item_4};
        flex-direction: column;
        margin-right: 30px;
      }

      .flex-item-3-people {
        ${theme.boxProps.flex_items.flex_item_3};
        flex-direction: column;
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
        

        margin-bottom: 4.8rem;
      }

      /*.people-list-item:after {
        
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 4rem;
          height: 4rem;
        
      }*/

      .list-wrapper {
        display: flex;
        gap: 16px;
      }

      .check-icon {
        width: 40px;
        height: 40px;
        ${$icon};
        margin-top: 5px;

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
    }
  `}
`;
