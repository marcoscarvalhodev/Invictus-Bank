import styled, { css } from 'styled-components';
import SVGPeople1_1 from '../../../assets/img/elderly-holding-phone.jpg'
export const StyledPeople = styled.section`
  ${({ theme }) => css`
    && {
      flex-direction: column;
      .flex-item-4-people {
        ${theme.boxProps.flex_items.flex_item_4};
        flex-direction: column;
        margin-right: 30px;
      };

      .flex-item-3-people {
        ${theme.boxProps.flex_items.flex_item_3};
        flex-direction: column;
      };

      .flex-item-1-people {
        ${theme.boxProps.flex_items.flex_item_1};
        flex-direction: column;
      };

      .subtitle {
        margin-left: 0.4rem;
      };
      
      .people-svg {
        border-radius: 6.0rem;
      }
    };
  `}
`;
