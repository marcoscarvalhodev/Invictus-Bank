import styled, { css } from 'styled-components';

export const StyledCards = styled.section`
  ${({ theme }) => css`
    && {
      ${theme.sub_pages.main_page};
    }
  `}
`;
