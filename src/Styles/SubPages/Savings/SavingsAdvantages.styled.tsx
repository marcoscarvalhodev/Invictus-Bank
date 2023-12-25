import styled, { css } from 'styled-components';

export const StyledSavingsAdvantages = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.white_auxiliary.white_light};

    && {
      display: flex;

      .title {
        padding-top: 9rem;
      }

      .description {
        padding: calc(${theme.spacing.gap_2} + 1rem) 0;
      }

      .bullet-wrapper {
        display: flex;
        align-items: center;
        padding: 1rem;
        gap: 3rem;
      }
      .bullet-2 {
        
      }

      .savings-advantages-flex {
        
        flex: 1;
      }
    }
  `}
`;
