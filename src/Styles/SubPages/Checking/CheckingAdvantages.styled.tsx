import styled, { css } from 'styled-components';

export const StyledCheckingAdvantages = styled.section`
  ${({ theme }) => css`
    && {
      ${theme.sub_pages.sub_pages_advantages};

      ${theme.media_query.small`
        padding: ${theme.spacing.global_padding_sides};

        flex-direction: column;

        .flex-2 {
          width: 100%;
        }

        .advantages-image {
          max-width: 100%;
        }

        .flex-2 {
          margin: 0px;
        }
      `}//query-small
    }
  `}
`;
