import styled, { css } from 'styled-components';

export const StyledCheckingSlides = styled.section`
  ${({ theme }) => css`

  && {
    .container {
        flex-direction: column;
      }
    ${theme.sub_pages.sub_pages_slides};
  }
  
  `}
`;
