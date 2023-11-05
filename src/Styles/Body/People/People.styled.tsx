import styled, { css } from 'styled-components';

interface PeopleProps {
  $small: boolean;
  $xsmall: boolean;
}

export const StyledPeople = styled.section<PeopleProps>`
  ${({ theme, $small, $xsmall }) => css`
    && {
      ${theme.boxProps.flex.flex_column};
      gap: 24px;
      flex-direction: row;
      .flex-item-4-people {
        display: flex;
        flex-direction: column;
        
      }

      .title {
        padding: 1.6rem 0rem;
      }

    
      .flex-item-3-people {
        ${theme.boxProps.flex_items.flex_item_3};
        
        flex-direction: column;
        
        
      }

      .flex-item-1-people {
        ${theme.boxProps.flex_items.flex_item_1};
        flex-direction: column;
        display: flex;
        gap: 24px;
      }

      .subtitle {
        margin-left: 0.4rem;
      }

      .people-svg {
        border-radius: 6rem;
      }

      .bullet-title {
        background: ${theme.colors.black_auxiliary.black_normal};
        
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

      .bullet-icons {
        
        margin-top: -10px;
        
        
        
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
