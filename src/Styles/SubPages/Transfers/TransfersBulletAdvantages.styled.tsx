import styled, { css } from 'styled-components';

export const StyledTransfersBulletAdvantages = styled.section`
  ${({ theme }) => css`
    && {
      min-width: 100vw;
      height: max-content;
      ${theme.sub_pages.sub_pages_advantages};
      margin-bottom: 9.6rem;
      background: ${theme.colors.white_auxiliary.white_dark};
      .container {
        flex-direction: column;
        padding: 4.8rem 2.4rem;
      }
    }
  `}
`;
