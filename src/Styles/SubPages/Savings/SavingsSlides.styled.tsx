import styled, { css } from 'styled-components';

interface SavingsSlidesProps {
  $small: boolean;
}

export const StyledSavingsSlides = styled.section<SavingsSlidesProps>`
  ${({ theme, $small }) => css`
    && {
      .container {
        flex-direction: column;
      }
      ${theme.sub_pages.sub_pages_slides};
      
      ${$small && css`
      
      .slides-wrapper {
        flex-direction: column;
      }

      `}
    }
  `}
`;
