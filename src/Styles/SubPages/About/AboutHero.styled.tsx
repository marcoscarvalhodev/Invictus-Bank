import styled, { css } from 'styled-components';

export const StyledAboutHero = styled.section`
  ${({ theme }) => css`
    && {
      display: flex;
      flex-direction: column;

      .title {
        padding: ${theme.spacing.gap_2} 0rem;
      }

      padding-bottom: 4.8rem;
    }
  `}
`;
