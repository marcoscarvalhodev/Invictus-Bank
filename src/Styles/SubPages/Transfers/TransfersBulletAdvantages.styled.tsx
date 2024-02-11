import styled, { css } from 'styled-components';

interface StyledTransfersBulletProps {}

export const StyledTransfersBulletAdvantages = styled.section<StyledTransfersBulletProps>`
  ${({ theme }) => css`
    
    
    min-width: 100vw;

    ${theme.sub_pages.sub_pages_advantages};

    .container {
      background: ${theme.colors.white_auxiliary.white_dark};
      flex-direction: column;
    }
  `}
`;
