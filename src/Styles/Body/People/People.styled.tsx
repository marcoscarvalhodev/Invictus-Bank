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

      .title {
        padding: 1.6rem 0rem;
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

      .bullet-title {
        background: ${theme.colors.black_auxiliary.black_normal};
        
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
        
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
