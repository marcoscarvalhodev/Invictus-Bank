import styled, { css } from 'styled-components';

interface AdvantagesProps {
  $small: boolean;
  $xsmall: boolean;
}

export const StyledAdvantages = styled.section<AdvantagesProps>`
  ${({ theme, $small, $xsmall }) => css`
    ${theme.boxProps.flex.flex_column};

    .advantages {
      display: flex;
      justify-content: start;
      align-items: start;
      position: relative;
      border-radius: 50px;
      background: ${theme.colors.white_auxiliary.white_normal};
      padding: ${theme.spacing.gap_4} ${theme.spacing.gap_3};

    }

    .entail {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      
    }

    ${$small &&
    css`
      .advantages {
        flex-direction: column;
        justify-content: center;
      align-items: center;
      }
    `}

    .advantages-item {
      display: flex;
      flex-direction: column;
      justify-content: start;
      padding: 0px 16px;
      align-items: start;
    }

     
      ${$small &&
      css`
        .advantages-item {
          justify-content: center;
          align-items: center;
          padding: 0px;
          
        }
      `}
    

    .auto-title {
      ${theme.boxProps.flex_items.flex_item_auto};
    }

    .advantages-icons-description {
      padding: 2.4rem 0rem;
    }

    .advantages-title {
      padding: 1.6rem 0rem;
    }
  `}
`;
