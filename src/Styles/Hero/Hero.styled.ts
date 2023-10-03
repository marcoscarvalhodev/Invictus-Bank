import styled, { css } from "styled-components";

export const StyledHero = styled.main`
  ${({ theme }) => css`
    padding: 9.6rem 2.4rem;
    max-width: ${theme.containerSizes.container_xl};
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow: hidden;

    .flex-item-1 {
      ${theme.boxProps.flex_items.flex_item_1};
    }

    .flex-item-3 {
      ${theme.boxProps.flex_items.flex_item_3};
    }

    &.container-small {
      flex-direction: column;
      padding: 3.2rem 1.8rem;
    }
  `}
`;
