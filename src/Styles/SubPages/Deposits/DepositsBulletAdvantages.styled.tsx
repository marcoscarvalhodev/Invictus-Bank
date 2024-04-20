import styled, { css } from 'styled-components';

export const StyledDepositsBulletAdvantages = styled.section`
  ${({ theme }) => css`
    && {
      min-width: 100vw;
      height: max-content;
      ${theme.sub_pages.sub_pages_advantages};
      background: ${theme.colors.white_auxiliary.white_dark};
      margin-bottom: 9.6rem;
      .container {
        flex-direction: column;
        padding: 4.8rem 2.4rem;
        
      }
    }
  `}
`;
