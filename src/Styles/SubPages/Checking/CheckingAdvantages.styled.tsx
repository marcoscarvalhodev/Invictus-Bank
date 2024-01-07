import styled, { css } from 'styled-components';

interface CheckingAdvantagesProps {
  $small: boolean;
}

export const StyledCheckingAdvantages = styled.section<CheckingAdvantagesProps>`
  ${({ theme, $small }) => css`
    && {
      ${theme.sub_pages.sub_pages_advantages};

      ${$small &&
      css`
        padding: 9.6rem 2.4rem;

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
      `}
    }
  `}
`;
