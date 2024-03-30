import styled, { css } from 'styled-components';

export const StyledCareersDetails = styled.section`
  ${({ theme }) => css`
    &&& {
      position: absolute;
      padding: 9.6rem 0rem;
      top: 0;
      left: 0;
      min-width: 100vw;
      min-height: 100vh;
      background: ${theme.colors.white_auxiliary.white_normal};
    }
  `}
`;
