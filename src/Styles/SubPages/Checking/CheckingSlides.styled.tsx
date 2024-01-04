import styled, { css } from 'styled-components';

interface CheckingSlidesProps {
  $small: boolean;
  $medium: boolean;
  $xsmall: boolean;
}

export const StyledCheckingSlides = styled.section<CheckingSlidesProps>`
  ${({ theme, $small, $medium, $xsmall }) => css`
    && {
      .container {
        flex-direction: column;
      }
      ${theme.sub_pages.sub_pages_slides};

      ${$small &&
      css`
        .slides-wrapper {
          flex-direction: column;
          grid-template-columns: 1fr 1fr;
        }
      `}

      ${$medium &&
      css`
        .slides-wrapper {
          grid-template-columns: 1fr 1fr 1fr;
        }
      `}

      ${$xsmall && css`
      .container {
        padding: 9.6rem 2.4rem;
      }
      
      .slides-wrapper {
          grid-template-columns: 1fr;
        }
      `}
    }
  `}
`;
