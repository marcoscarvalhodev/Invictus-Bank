import styled, { css } from 'styled-components';

export const StyledSavingsSlides = styled.section`
  ${({ theme }) => css`
    && {
      .container {
        flex-direction: column;
      }
      ${theme.sub_pages.sub_pages_slides};
      
    }
  `}
`;
