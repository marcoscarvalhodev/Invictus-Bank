import styled, { css } from 'styled-components';

export const StyledCareersAdvantages = styled.section`
  ${({ theme }) => css`
    && {
      ${theme.sub_pages.sub_pages_advantages};

      .advantages-flex {
        padding: 4.8rem 0rem;
      }
    }
  `}
`;
