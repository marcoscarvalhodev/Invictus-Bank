import styled, { css } from 'styled-components';

interface AdvantagesProps {

}

export const StyledAdvantages = styled.section<AdvantagesProps>`
  ${({ theme }) => css`
    ${theme.boxProps.flex.flex_column};

    .advantages {
      display: flex;
      justify-content: start;
      align-items: start;
      position: relative;
      border-radius: 50px;
      background: ${theme.colors.white_auxiliary.white_normal};
      padding: ${theme.spacing.gap_4} ${theme.spacing.gap_3};
      width: 100%;
    }

    .entail {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }

    .advantages-item {
      display: flex;
      flex-direction: column;
      justify-content: start;
      padding: 0px 16px;
      align-items: start;
    }

    .auto-title {
      ${theme.boxProps.flex_items.flex_item_auto};
    }

    .advantages-icons-description {
      padding: 2.4rem 0rem;
    }

    .advantages-title {
      padding: 1.6rem 0rem;
    }

    ${theme.media_query.small`
      .advantages {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .advantages-item {
        justify-content: center;
        align-items: center;
        padding: 0px;
      }
    `}//query-small
  `}
`;
