import styled, { css } from 'styled-components';

export const StyledSavingsAdvantages = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.white_auxiliary.white_light};

    && {
      display: flex;
      gap: 3rem;
      .title {
        padding-top: 9rem;
      }
      

      .description {
        padding: calc(${theme.spacing.gap_2} + 1rem) 0;
      }

      .bullet-wrapper {
        display: flex;
        align-items: center;
        padding: 1rem 0rem;
        gap: 2.4rem;
      }
      
      .advantages-image {
        max-width: 60rem;
        border-radius: 0.5rem;
      }

      .flex-2 {
        margin-top: 9.4rem;
        padding: 3rem;
        display: flex;
        align-self: center;
        justify-content: center;
        align-items: center;
        
      }

      .savings-advantages-flex {
        
        flex: 1;
      }
    }
  `}
`;
