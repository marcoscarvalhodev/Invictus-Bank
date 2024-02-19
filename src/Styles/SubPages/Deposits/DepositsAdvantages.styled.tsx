import styled, { css } from 'styled-components';

interface DepositsAdvantagesProps {
  $small: boolean;
}

export const StyledDepositsAdvantages = styled.section<DepositsAdvantagesProps>`
  ${({ theme, $small }) => css`

  &&& {
    padding-top: 4rem;
    ${theme.sub_pages.sub_pages_advantages};

    .deposits-hourglass {
      width: 600px;
      border-radius: 4px;
      
    }


    ${$small && css`
    flex-direction: column-reverse;

    .deposits-hourglass {
      width: 100%;
      
    }
    `}

  }
  `}
`;