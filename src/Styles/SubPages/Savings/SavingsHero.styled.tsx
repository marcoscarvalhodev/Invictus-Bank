import styled, { css } from 'styled-components';

export const StyledSavingsHero = styled.section`
  ${({ theme }) => css`
    display: flex;
    ${theme.boxProps.flex_items.flex_item_1};
    flex-direction: row;

    .flex-savings {
    padding: ${theme.spacing.gap_3} 0;
    flex: 1;
    
    
    .title {
      ${theme.bullets.title};
    }

    .buttons-flex {
      display: flex;
      gap: 2.4rem;
      padding: 2rem 0rem;
    }
  }
  `}
`;
