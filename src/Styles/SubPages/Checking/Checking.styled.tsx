import styled, { css } from 'styled-components';

export const StyledChecking = styled.section`
  ${({ theme }) => css`
    && {
      ${theme.sub_pages.main_page};
    }
  `}
`;
