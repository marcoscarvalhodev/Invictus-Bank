import styled, { css } from 'styled-components';

interface SavingsAdvantagesProps {
  $small: boolean;
}

export const StyledSavingsAdvantages = styled.section<SavingsAdvantagesProps>`
  ${({ theme, $small }) => css`
    && {
      ${theme.sub_pages.sub_pages_advantages};

      ${$small && css`
        
      flex-direction: column;

      .flex-2 {
        margin: 0px;
      }
      `}
    }
  `}
`;
